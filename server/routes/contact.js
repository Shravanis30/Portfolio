const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const Contact = require('../models/Contact');

// @route   POST api/contact
// @desc    Submit a contact message and send email via SendGrid
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ msg: 'Please enter all required fields: name, email, and message.' });
        }

        // 1. Optional Database Save (MongoDB)
        if (process.env.MONGO_URI && process.env.MONGO_URI.trim() !== '') {
            try {
                const newContact = new Contact({ name, email, subject: subject || 'Portfolio Contact Form', message });
                await newContact.save();
            } catch (dbErr) {
                console.log('MongoDB optional save skipped:', dbErr.message);
            }
        }

        // 2. Send Email via SendGrid
        const apiKey = process.env.SENDGRID_API_KEY;
        const fromEmail = process.env.FROM_EMAIL || 'salunkeshravani561@gmail.com';
        const toEmail = process.env.TO_EMAIL || 'salunkeshravani561@gmail.com';

        if (apiKey && apiKey.trim() !== '') {
            sgMail.setApiKey(apiKey);

            const msg = {
                to: toEmail,
                from: fromEmail, // Must be a verified sender in SendGrid
                replyTo: email,
                subject: `[Portfolio Inquiry] ${subject || 'New Message from ' + name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 25px; border-radius: 8px; border: 1px solid #e0e0e0;">
                            <h2 style="color: #1a1a1a; border-bottom: 2px solid #e8c872; padding-bottom: 10px;">New Portfolio Message</h2>
                            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                            <div style="margin-top: 20px; padding: 15px; background: #fafafa; border-left: 4px solid #e8c872; border-radius: 4px;">
                                <p style="white-space: pre-wrap; margin: 0; color: #333; font-size: 14px; line-height: 1.6;">${message}</p>
                            </div>
                            <p style="margin-top: 25px; font-size: 11px; color: #888; text-align: center;">Sent via SendGrid from Shravani Salunke Portfolio</p>
                        </div>
                    </div>
                `
            };

            await sgMail.send(msg);
            console.log('SendGrid email sent successfully to', toEmail);
        }

        res.status(200).json({ 
            msg: 'Message sent successfully! Thank you for reaching out.' 
        });

    } catch (err) {
        console.error('SendGrid contact route error:', err.response ? err.response.body : err.message);
        res.status(500).json({ msg: 'Server error while sending message. Please try again.' });
    }
});

module.exports = router;
