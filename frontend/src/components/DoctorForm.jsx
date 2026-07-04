import { useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

function DoctorForm({ refreshDoctors }) {

    const [doctor, setDoctor] = useState({
        name: "",
        specialization: "",
        experience: "",
        consultationFee: "",
        availableDays: "",
        startTime: "",
        endTime: "",
        slotDuration: ""
    });

    const handleChange = (e) => {

        setDoctor({
            ...doctor,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/doctors", {

                ...doctor,

                experience: Number(doctor.experience),

                consultationFee: Number(doctor.consultationFee),

                slotDuration: Number(doctor.slotDuration),

                availableDays: doctor.availableDays
                    .split(",")
                    .map(day => day.trim())

            });

            toast.success("Doctor Added Successfully");

            refreshDoctors();

            // Clear form
            setDoctor({
                name: "",
                specialization: "",
                experience: "",
                consultationFee: "",
                availableDays: "",
                startTime: "",
                endTime: "",
                slotDuration: ""
            });

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to add doctor"
            );

        }

    };

    return (

        <div className="card shadow-sm">

            <div className="card-body">

                <h4 className="mb-4">

                    Add New Doctor

                </h4>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        placeholder="Doctor Name"
                        name="name"
                        value={doctor.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Specialization"
                        name="specialization"
                        value={doctor.specialization}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="number"
                        placeholder="Experience (Years)"
                        name="experience"
                        value={doctor.experience}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="number"
                        placeholder="Consultation Fee"
                        name="consultationFee"
                        value={doctor.consultationFee}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Available Days (Monday, Tuesday)"
                        name="availableDays"
                        value={doctor.availableDays}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="time"
                        name="startTime"
                        value={doctor.startTime}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="time"
                        name="endTime"
                        value={doctor.endTime}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-4"
                        type="number"
                        placeholder="Slot Duration (Minutes)"
                        name="slotDuration"
                        value={doctor.slotDuration}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >

                        Add Doctor

                    </button>

                </form>

            </div>

        </div>

    );

}

export default DoctorForm;