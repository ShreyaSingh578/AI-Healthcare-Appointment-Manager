import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import API from "../services/api";
import { useAuth } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookAppointment() {

    const { doctorId } = useParams();

    const navigate = useNavigate();

    const { user } = useAuth();

    const [doctor, setDoctor] = useState(null);

    const [formData, setFormData] = useState({
        appointmentDate: "",
        symptoms: ""
    });

    useEffect(() => {

        fetchDoctor();

    }, []);

    const fetchDoctor = async () => {

        try {

            const { data } = await API.get(`/doctors/${doctorId}`);

            setDoctor(data.data);

        } catch (error) {

            toast.error("Unable to load doctor.");

        }

    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/appointments", {

                patientName: user.name,

                patientEmail: user.email,

                doctorId: Number(doctorId),

                appointmentDate: formData.appointmentDate,

                symptoms: formData.symptoms

            });

            toast.success("Appointment booked successfully.");

            navigate("/dashboard");

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Booking failed."

            );

        }

    };

    return (

        <>

            <Navbar />

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="card shadow">

                            <div className="card-body">

                                <h2 className="mb-4">

                                    Book Appointment

                                </h2>

                                {

                                    doctor && (

                                        <div className="alert alert-primary">

                                            <h5>

                                                Dr. {doctor.name}

                                            </h5>

                                            <p className="mb-1">

                                                <strong>Specialization:</strong> {doctor.specialization}

                                            </p>

                                            <p className="mb-0">

                                                <strong>Consultation Fee:</strong> ₹{doctor.consultationFee}

                                            </p>

                                        </div>

                                    )

                                }

                                <div className="mb-3">

                                    <label className="form-label">

                                        Patient Name

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        value={user?.name || ""}

                                        disabled

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email

                                    </label>

                                    <input

                                        type="email"

                                        className="form-control"

                                        value={user?.email || ""}

                                        disabled

                                    />

                                </div>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Appointment Date

                                        </label>

                                        <input

                                            type="datetime-local"

                                            name="appointmentDate"

                                            className="form-control"

                                            value={formData.appointmentDate}

                                            onChange={handleChange}

                                            required

                                        />

                                    </div>

                                    <div className="mb-4">

                                        <label className="form-label">

                                            Symptoms

                                        </label>

                                        <textarea

                                            rows="4"

                                            name="symptoms"

                                            className="form-control"

                                            value={formData.symptoms}

                                            onChange={handleChange}

                                            placeholder="Describe your symptoms..."

                                            required

                                        />

                                    </div>

                                    <button

                                        className="btn btn-success w-100"

                                    >

                                        Confirm Appointment

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default BookAppointment;