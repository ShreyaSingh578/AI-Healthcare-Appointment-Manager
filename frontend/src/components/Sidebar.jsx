import { Link } from "react-router-dom";
import {
    FaUserMd,
    FaCalendarAlt,
    FaHome
} from "react-icons/fa";

function Sidebar() {

    return (

        <div
            className="bg-dark text-white p-3"
            style={{
                minHeight: "100vh"
            }}
        >

            <h3 className="mb-4">

                Admin Panel

            </h3>

            <ul className="nav flex-column">

                <li className="nav-item mb-3">

                    <Link
                        className="nav-link text-white"
                        to="/"
                    >

                        <FaHome className="me-2" />

                        Home

                    </Link>

                </li>

                <li className="nav-item mb-3">

                    <Link
                        className="nav-link text-white"
                        to="/admin"
                    >

                        <FaUserMd className="me-2" />

                        Doctors

                    </Link>

                </li>

                <li className="nav-item">

                    <Link
                        className="nav-link text-white"
                        to="/dashboard"
                    >

                        <FaCalendarAlt className="me-2" />

                        Appointments

                    </Link>

                </li>

            </ul>

        </div>

    );

}

export default Sidebar;