import { FaHospital } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">

            <div className="container text-center">

                <h5>
                    <FaHospital className="me-2" />
                    AI Healthcare Appointment Manager
                </h5>

                <p className="mb-0">
                    © 2026 All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;