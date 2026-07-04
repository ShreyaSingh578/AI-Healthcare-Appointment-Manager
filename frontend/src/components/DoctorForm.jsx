import { useState } from "react";
import toast from "react-hot-toast";

import API from "../services/api";

function DoctorForm({ refreshDoctors }) {

    const [doctor, setDoctor] = useState({
        name: "",
        specialization: "",
        experience: "",
        consultationFee: "",
        availableDays: [],
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

            await API.post(
                "/doctors",
                {
                    ...doctor,
                    experience: Number(doctor.experience),
                    consultationFee: Number(doctor.consultationFee),
                    slotDuration: Number(doctor.slotDuration),
                    availableDays: doctor.availableDays
                        .split(",")
                        .map(day => day.trim())
                }
            );

            toast.success("Doctor Added");

            refreshDoctors();

        } catch (error) {

            toast.error("Unable to add doctor");

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                className="form-control mb-2"
                placeholder="Doctor Name"
                name="name"
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                placeholder="Specialization"
                name="specialization"
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                placeholder="Experience"
                name="experience"
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                placeholder="Consultation Fee"
                name="consultationFee"
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                placeholder="Monday, Tuesday"
                name="availableDays"
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                type="time"
                name="startTime"
                onChange={handleChange}
            />

            <input
                className="form-control mb-2"
                type="time"
                name="endTime"
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                placeholder="Slot Duration"
                name="slotDuration"
                onChange={handleChange}
            />

            <button
                className="btn btn-success w-100"
            >

                Add Doctor

            </button>

        </form>

    );

}

export default DoctorForm;