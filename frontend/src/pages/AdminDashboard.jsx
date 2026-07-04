import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DoctorForm from "../components/DoctorForm";
import AppointmentTable from "../components/AppointmentTable";

import API from "../services/api";

function AdminDashboard() {

    const [doctors, setDoctors] = useState([]);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {

        fetchDoctors();

        fetchAppointments();

    }, []);

    const fetchDoctors = async () => {

        try {

            const { data } = await API.get("/doctors");

            setDoctors(data.data);

        } catch (error) {

            console.log(error);

        }

    };

    const fetchAppointments = async () => {

        try {

            const { data } = await API.get("/appointments");

            setAppointments(data.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteDoctor = async (id) => {

        try {

            await API.delete(`/doctors/${id}`);

            fetchDoctors();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <>

            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-3">

                        <Sidebar />

                    </div>

                    <div className="col-md-9 p-4">

                        <h2>

                            Admin Dashboard

                        </h2>

                        <hr />

                        <DoctorForm
                            refreshDoctors={fetchDoctors}
                        />

                        <hr />

                        <h3>

                            Doctors

                        </h3>

                        <table className="table table-striped">

                            <thead>

                                <tr>

                                    <th>Name</th>

                                    <th>Specialization</th>

                                    <th>Fee</th>

                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    doctors.map((doctor) => (

                                        <tr key={doctor.id}>

                                            <td>

                                                {doctor.name}

                                            </td>

                                            <td>

                                                {doctor.specialization}

                                            </td>

                                            <td>

                                                ₹{doctor.consultationFee}

                                            </td>

                                            <td>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        deleteDoctor(doctor.id)
                                                    }
                                                >

                                                    Delete

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                        <AppointmentTable
                            appointments={appointments}
                        />

                    </div>

                </div>

            </div>

        </>

    );

}

export default AdminDashboard;