const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// ==========================
// Booking Confirmation Email
// ==========================
const sendBookingConfirmation = async (
    email,
    doctorName,
    appointmentDate
) => {

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Appointment Booked Successfully",
        html: `
            <h2>Healthcare Appointment Manager</h2>

            <p>Your appointment has been booked successfully.</p>

            <p><strong>Doctor:</strong> ${doctorName}</p>

            <p><strong>Date:</strong> ${appointmentDate}</p>

            <br>

            <p>Thank you.</p>
        `
    });

};

// ==========================
// Appointment Cancellation
// ==========================
const sendCancellationEmail = async (email) => {

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Appointment Cancelled",
        html: `
            <h2>Healthcare Appointment Manager</h2>

            <p>Your appointment has been cancelled.</p>

            <p>If you wish, you can log in and book another appointment.</p>
        `
    });

};

// ==========================
// Medication Reminder Email
// ==========================
const sendMedicationReminder = async (
    email,
    medicine
) => {

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Medication Reminder",
        html: `
            <h2>Healthcare Appointment Manager</h2>

            <p>This is your medication reminder.</p>

            <p><strong>Medicine:</strong> ${medicine}</p>

            <p>Please take your medicine as prescribed by your doctor.</p>

            <br>

            <p>Get well soon!</p>
        `
    });

};

module.exports = {
    sendBookingConfirmation,
    sendCancellationEmail,
    sendMedicationReminder
};