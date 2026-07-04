import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorCard from "../components/DoctorCard";

function Doctors() {

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchDoctors();

    }, []);

    const fetchDoctors = async () => {

        try {

            const { data } = await API.get("/doctors");

            setDoctors(data.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Navbar />

            <div className="container py-5">

                <h2 className="text-center mb-5">

                    Our Doctors

                </h2>

                {

                    loading ? (

                        <div className="text-center py-5">

                            <div
                                className="spinner-border text-primary"
                                role="status"
                            >

                                <span className="visually-hidden">

                                    Loading...

                                </span>

                            </div>

                        </div>

                    ) : (

                        <div className="row">

                            {

                                doctors.length > 0 ? (

                                    doctors.map((doctor) => (

                                        <DoctorCard
                                            key={doctor.id}
                                            doctor={doctor}
                                        />

                                    ))

                                ) : (

                                    <div className="col-12">

                                        <div className="alert alert-info text-center">

                                            No doctors available.

                                        </div>

                                    </div>

                                )

                            }

                        </div>

                    )

                }

            </div>

            <Footer />

        </>

    );

}

export default Doctors;