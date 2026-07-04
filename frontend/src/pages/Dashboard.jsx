import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../services/api";

function Dashboard() {

    const [appointments, setAppointments] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchAppointments();

    }, []);

    const fetchAppointments = async () => {

        try {

            const { data } = await API.get("/appointments");

            setAppointments(data.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Navbar />

            <div className="container py-5">

                <h2 className="mb-4">

                    My Appointments

                </h2>

                {

                    loading

                    ?

                    (

                        <h4>Loading...</h4>

                    )

                    :

                    appointments.length === 0

                    ?

                    (

                        <div className="alert alert-info">

                            No appointments found.

                        </div>

                    )

                    :

                    (

                        <table className="table table-bordered table-hover">

                            <thead className="table-primary">

                                <tr>

                                    <th>ID</th>

                                    <th>Doctor</th>

                                    <th>Date</th>

                                    <th>Status</th>

                                    <th>Symptoms</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    appointments.map((appointment) => (

                                        <tr key={appointment.id}>

                                            <td>

                                                {appointment.id}

                                            </td>

                                            <td>

                                                Dr. {appointment.doctor.name}

                                            </td>

                                            <td>

                                                {

                                                    new Date(
                                                        appointment.appointmentDate
                                                    ).toLocaleString()

                                                }

                                            </td>

                                            <td>

                                                <span
                                                    className={`badge ${
                                                        appointment.status === "BOOKED"
                                                            ? "bg-warning"
                                                            : appointment.status === "COMPLETED"
                                                            ? "bg-success"
                                                            : "bg-danger"
                                                    }`}
                                                >

                                                    {appointment.status}

                                                </span>

                                            </td>

                                            <td>

                                                {appointment.symptoms}

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    )

                }

            </div>

            <Footer />

        </>

    );

}

export default Dashboard;