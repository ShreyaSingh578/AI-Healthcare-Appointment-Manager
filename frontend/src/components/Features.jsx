import {
    FaUserMd,
    FaRobot,
    FaBell,
    FaCalendarAlt
} from "react-icons/fa";

function Features() {

    const features = [

        {
            icon: <FaUserMd size={45} />,
            title: "Expert Doctors",
            text: "Find experienced specialists across multiple medical fields."
        },

        {
            icon: <FaCalendarAlt size={45} />,
            title: "Easy Appointment Booking",
            text: "Book appointments online in just a few clicks."
        },

        {
            icon: <FaRobot size={45} />,
            title: "AI Medical Summary",
            text: "Generate intelligent pre and post visit summaries."
        },

        {
            icon: <FaBell size={45} />,
            title: "Medication Reminder",
            text: "Receive automatic reminders for your medicines."
        }

    ];

    return (

        <section className="container py-5">

            <h2 className="text-center mb-5">

                Our Features

            </h2>

            <div className="row g-4">

                {

                    features.map((feature, index) => (

                        <div
                            key={index}
                            className="col-md-6 col-lg-3"
                        >

                            <div className="card h-100 shadow-sm text-center p-4">

                                <div className="text-primary mb-3">

                                    {feature.icon}

                                </div>

                                <h5>

                                    {feature.title}

                                </h5>

                                <p>

                                    {feature.text}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Features;