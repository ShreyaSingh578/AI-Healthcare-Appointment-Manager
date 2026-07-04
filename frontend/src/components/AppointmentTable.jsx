function AppointmentTable({ appointments }) {

    return (

        <div className="mt-5">

            <h3>Appointments</h3>

            <table className="table table-bordered table-hover">

                <thead className="table-primary">

                    <tr>

                        <th>ID</th>

                        <th>Doctor</th>

                        <th>Patient</th>

                        <th>Date</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        appointments.map((appointment) => (

                            <tr key={appointment.id}>

                                <td>{appointment.id}</td>

                                <td>

                                    Dr. {appointment.doctor.name}

                                </td>

                                <td>

                                    {appointment.patientName}

                                </td>

                                <td>

                                    {

                                        new Date(
                                            appointment.appointmentDate
                                        ).toLocaleString()

                                    }

                                </td>

                                <td>

                                    {appointment.status}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default AppointmentTable;