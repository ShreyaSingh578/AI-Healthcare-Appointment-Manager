import { Link } from "react-router-dom";
import { FaUserMd, FaClock, FaMoneyBillWave } from "react-icons/fa";

function DoctorCard({ doctor }) {

    return (

        <div className="col-md-6 col-lg-4 mb-4">

            <div className="card shadow h-100">

                <div className="card-body">

                    <h4 className="text-primary">

                        <FaUserMd className="me-2" />

                        Dr. {doctor.name}

                    </h4>

                    <hr />

                    <p>

                        <strong>Specialization:</strong>

                        {" "}

                        {doctor.specialization}

                    </p>

                    <p>

                        <strong>Experience:</strong>

                        {" "}

                        {doctor.experience} Years

                    </p>

                    <p>

                        <FaMoneyBillWave className="me-2 text-success" />

                        ₹{doctor.consultationFee}

                    </p>

                    <p>

                        <FaClock className="me-2 text-warning" />

                        {doctor.startTime} - {doctor.endTime}

                    </p>

                    <p>

                        <strong>Available:</strong>

                        {" "}

                        {doctor.availableDays.join(", ")}

                    </p>

                </div>

                <div className="card-footer bg-white">

                    <Link
                        to={`/book/${doctor.id}`}
                        className="btn btn-primary w-100"
                    >

                        Book Appointment

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default DoctorCard;