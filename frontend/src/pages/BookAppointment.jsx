import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import API from "../services/api";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookAppointment() {

    const { doctorId } = useParams();

    const navigate = useNavigate();

    const [doctor, setDoctor] = useState(null);

    const [formData, setFormData] = useState({
        patientName: "",
        patientEmail: "",
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
                ...formData,
                doctorId
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

                                            <p>

                                                {doctor.specialization}

                                            </p>

                                        </div>

                                    )

                                }

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">

                                        <label>

                                            Patient Name

                                        </label>

                                        <input
                                            type="text"
                                            name="patientName"
                                            className="form-control"
                                            value={formData.patientName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label>

                                            Email

                                        </label>

                                        <input
                                            type="email"
                                            name="patientEmail"
                                            className="form-control"
                                            value={formData.patientEmail}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label>

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

                                        <label>

                                            Symptoms

                                        </label>

                                        <textarea
                                            rows="4"
                                            name="symptoms"
                                            className="form-control"
                                            value={formData.symptoms}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <button
                                        className="btn btn-success w-100"
                                    >

                                        Book Appointment

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