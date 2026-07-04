const cron = require("node-cron");
const prisma = require("../config/prisma");

const {
    sendMedicationReminder
} = require("./emailService");

const startReminderService = () => {

    // Runs every hour
    cron.schedule("0 * * * *", async () => {

        console.log("Checking medication reminders...");

        try {

            const reminders = await prisma.medicationReminder.findMany({
                where: {
                    nextReminder: {
                        lte: new Date()
                    }
                },
                include: {
                    appointment: true
                }
            });

            if (reminders.length === 0) {
                console.log("No reminders to send.");
                return;
            }

            for (const reminder of reminders) {

                // Send reminder email
                await sendMedicationReminder(
                    reminder.appointment.patientEmail,
                    reminder.medicine
                );

                console.log(
                    `Reminder sent to ${reminder.appointment.patientEmail}`
                );

                // Schedule next reminder for tomorrow
                await prisma.medicationReminder.update({
                    where: {
                        id: reminder.id
                    },
                    data: {
                        nextReminder: new Date(
                            reminder.nextReminder.getTime() +
                            24 * 60 * 60 * 1000
                        )
                    }
                });

            }

        } catch (error) {

            console.error("Reminder Service Error:", error.message);

        }

    });

};

module.exports = {
    startReminderService
};