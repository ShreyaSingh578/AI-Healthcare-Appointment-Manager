import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

function Hero() {

    return (

        <section className="hero">

            <div className="container text-center">

                <h1 className="display-4 fw-bold">

                    AI-Powered Healthcare Appointment Manager

                </h1>

                <p className="lead mt-4">

                    Book appointments, receive AI-generated summaries,
                    manage prescriptions and never miss your medications.

                </p>

                <div className="mt-4">

                    <Link
                        to="/register"
                        className="btn btn-primary btn-lg me-3"
                    >
                        Get Started
                    </Link>

                    <Link
                        to="/doctors"
                        className="btn btn-outline-primary btn-lg"
                    >
                        <FaCalendarCheck className="me-2" />
                        Find Doctors
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default Hero;