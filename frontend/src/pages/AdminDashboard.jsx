import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DoctorForm from "../components/DoctorForm";
import AppointmentTable from "../components/AppointmentTable";

import API from "../services/api";

function AdminDashboard() {

    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchDoctors();
        fetchAppointments();

    }, []);

    const fetchDoctors = async () => {

        try {

            const { data } = await API.get("/doctors");

            setDoctors(data.data);

        } catch (error) {

            toast.error("Unable to load doctors.");

        }

    };

    const fetchAppointments = async () => {

        try {

            const { data } = await API.get("/appointments");

            setAppointments(data.data);

        } catch (error) {

            toast.error("Unable to load appointments.");

        } finally {

            setLoading(false);

        }

    };

    const deleteDoctor = async (id) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this doctor?"
        );

        if (!confirmed) return;

        try {

            await API.delete(`/doctors/${id}`);

            toast.success("Doctor deleted successfully.");

            fetchDoctors();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to delete doctor."
            );

        }

    };

    if (loading) {

        return (

            <>
                <Navbar />

                <div className="container text-center py-5">

                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >
                        <span className="visually-hidden">

                            Loading...

                        </span>
                    </div>

                </div>

            </>

        );

    }

    return (

        <>

            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-3">

                        <Sidebar />

                    </div>

                    <div className="col-md-9 p-4">

                        <h2 className="mb-4">

                            Admin Dashboard

                        </h2>

                        <DoctorForm
                            refreshDoctors={fetchDoctors}
                        />

                        <hr className="my-5" />

                        <h3 className="mb-3">

                            Doctors

                        </h3>

                        <table className="table table-striped table-hover">

                            <thead className="table-primary">

                                <tr>

                                    <th>Name</th>

                                    <th>Specialization</th>

                                    <th>Fee</th>

                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    doctors.length > 0 ?

                                    doctors.map((doctor) => (

                                        <tr key={doctor.id}>

                                            <td>

                                                Dr. {doctor.name}

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
                                                        deleteDoctor(
                                                            doctor.id
                                                        )
                                                    }
                                                >

                                                    Delete

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                    :

                                    (

                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="text-center"
                                            >

                                                No doctors found.

                                            </td>

                                        </tr>

                                    )

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