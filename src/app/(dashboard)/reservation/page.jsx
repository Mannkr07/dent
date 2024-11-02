// "use client";

// import { useState } from 'react';
// import { Calendar } from '../../../components/ui/calendar';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Button } from '../../../components/ui/button';
// import { Input } from '../../../components/ui/input';
// import { Label } from '../../../components/ui/label';
// import { ScrollArea } from '../../../components/ui/scroll-area';

// const Reservation = () =>  {
//   const [date, setDate] = useState(new Date());
//   const [reservations, setReservations] = useState([]);
//   const [patientName, setPatientName] = useState('');
//   const [patientEmail, setPatientEmail] = useState('');

//   const handleDateSelect = (selectedDate) => {
//     setDate(selectedDate);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (date && patientName && patientEmail) {
//       const newReservation = {
//         id: Date.now(),
//         date,
//         patientName,
//         patientEmail,
//       };
//       setReservations([...reservations, newReservation]);
//       setPatientName('');
//       setPatientEmail('');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-6xl">
//       <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
//         Reservation System
//       </h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card className="w-full">
//           <CardHeader>
//             <CardTitle className="text-xl md:text-2xl">Select Date</CardTitle>
//             <CardDescription>Choose a date for your appointment</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex justify-center">
//               <Calendar
//                 mode="single"
//                 selected={date}
//                 onSelect={handleDateSelect}
//                 className="rounded-md border"
//               />
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="w-full">
//           <CardHeader>
//             <CardTitle className="text-xl md:text-2xl">Make Reservation</CardTitle>
//             <CardDescription>Fill in your details to book an appointment</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="patientName" className="text-sm md:text-base">
//                   Name
//                 </Label>
//                 <Input
//                   id="patientName"
//                   value={patientName}
//                   onChange={(e) => setPatientName(e.target.value)}
//                   required
//                   className="w-full"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="patientEmail" className="text-sm md:text-base">
//                   Email
//                 </Label>
//                 <Input
//                   id="patientEmail"
//                   type="email"
//                   value={patientEmail}
//                   onChange={(e) => setPatientEmail(e.target.value)}
//                   required
//                   className="w-full"
//                 />
//               </div>
//               <Button type="submit" className="w-full">
//                 Make Reservation
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//       <Card className="mt-6 w-full">
//         <CardHeader>
//           <CardTitle className="text-xl md:text-2xl">Current Reservations</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ScrollArea className="h-[200px] w-full rounded-md border p-4">
//             {reservations.length > 0 ? (
//               <ul className="space-y-4">
//                 {reservations.map((reservation) => (
//                   <li key={reservation.id} className="bg-muted p-3 rounded-lg">
//                     <p className="font-medium text-sm md:text-base">{reservation.patientName}</p>
//                     <p className="text-muted-foreground text-xs md:text-sm">
//                       {reservation.date.toLocaleDateString()} at {reservation.date.toLocaleTimeString()}
//                     </p>
//                     <p className="text-muted-foreground text-xs md:text-sm">{reservation.patientEmail}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-center text-muted-foreground">No reservations yet.</p>
//             )}
//           </ScrollArea>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
// export default Reservation

"use client";

import { useState, useEffect } from "react";
import AddPatientModal from "../../../components/addPatientModal";
import axios from "axios";

const ReservationTable = () => {
  const [doctors] = useState([
    { id: 1, name: "Drg Soap Mactavish" },
    { id: 2, name: "Drg Jerald O'Hara" },
    { id: 3, name: "Drg Putri Larasati" },
  ]);

  const [timeSlots] = useState([
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
  ]);

  // const [appointments] = useState([
  //   {
  //     id: 1,
  //     doctorId: 1,
  //     patientName: "Rafii Jauindi",
  //     time: "09:00 AM - 10:00 AM",
  //     status: "Finished",
  //     treatment: "General Checkup",
  //   },
  //   {
  //     id: 2,
  //     doctorId: 1,
  //     patientName: "Sekar Nandita",
  //     time: "10:00 AM - 11:00 AM",
  //     status: "Finished",
  //     treatment: "Scaling",
  //   },
  //   {
  //     id: 3,
  //     doctorId: 1,
  //     patientName: "Angkasa Pura",
  //     time: "11:00 AM - 12:00 PM",
  //     status: "Finished",
  //     treatment: "Bleaching",
  //   },
  //   {
  //     id: 4,
  //     doctorId: 1,
  //     patientName: "Lembayung Senja",
  //     time: "12:00 PM - 01:00 PM",
  //     status: "Encounter",
  //     treatment: "Extraction",
  //   },
  //   {
  //     id: 5,
  //     doctorId: 2,
  //     patientName: "Daniswara",
  //     time: "02:00 PM - 03:00 PM",
  //     status: "Registered",
  //     treatment: "General Checkup",
  //   },
  // ]);

  const [appointments, setAppointments] = useState([]);
  const [selectedDoctorFilter, setSelectedDoctorFilter] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);

  // Fetch appointments from API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("/api/appointments");
        setAppointments(response.data.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  const getAppointmentCount = (doctorId) => {
    return appointments.filter((appt) => appt.doctorId === doctorId).length;
  };

  // Open the modal for a specific doctor and time slot
  const handleSlotClick = (doctor, timeSlot) => {
    const existingAppointment = appointments.find(
      (appt) => appt.doctorId === doctor.id && appt.time === timeSlot
    );

    setSelectedDoctor(doctor);
    setSelectedTimeSlot(timeSlot);
    setEditingAppointment(existingAppointment || null);
    setModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDoctor(null);
    setSelectedTimeSlot(null);
    setEditingAppointment(null);
  };

  // Save or update the appointment
  const handleSaveAppointment = async (newAppointment) => {
    try {
      if (editingAppointment) {
        await axios.put(
          `/api/appointments/${editingAppointment.id}`,
          newAppointment
        );
        setAppointments((prev) =>
          prev.map((appt) =>
            appt.id === newAppointment.id ? newAppointment : appt
          )
        );
      } else {
        const response = await axios.post("/api/appointments", newAppointment);
        setAppointments((prev) => [...prev, response.data.data]);
      }
    } catch (error) {
      console.error("Error saving appointment:", error);
    }
    handleCloseModal();
  };

  const filteredDoctors =
    selectedDoctorFilter === "all"
      ? doctors
      : doctors.filter(
          (doctor) => doctor.id === parseInt(selectedDoctorFilter)
        );

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Reservation Schedule
      </h1>

      {/* Doctor Filter Dropdown */}
      <div className="mb-4">
        <label className="font-semibold text-gray-700 mr-2">
          Filter by Doctor:
        </label>
        <select
          value={selectedDoctorFilter}
          onChange={(e) => setSelectedDoctorFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Doctors</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="text-black">
              <th className="px-4 py-2 border-r border-gray-300 text-center bg-gray-100">
                Time
              </th>
              {filteredDoctors.map((doctor) => (
                <th
                  key={doctor.id}
                  className="px-4 py-2 h-[60px] border-r border-gray-300 text-center bg-gray-100"
                >
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    <div className="w-[30px] h-[30px] rounded-full bg-black"></div>
                    <div className="flex flex-col items-start">
                      <h2 className="text-[16px] font-bold">{doctor.name}</h2>
                      <h3 className="text-[12px] font-normal">
                        Today's Appointment:{" "}
                        <span className="font-bold">
                          {getAppointmentCount(doctor.id)} Patients
                        </span>
                      </h3>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, slotIdx) => (
              <tr key={slotIdx} className="h-[85px]">
                <td className="px-4 py-3 text-black border-r border-gray-300 text-center bg-gray-50 font-medium">
                  {slot}
                </td>
                {filteredDoctors.map((doctor) => {
                  const appointment = appointments.find(
                    (appt) => appt.doctorId === doctor.id && appt.time === slot
                  );

                  return (
                    <td
                      key={`${doctor.id}-${slotIdx}`}
                      onClick={() => handleSlotClick(doctor, slot)}
                      className={`px-4 py-3 border-r border-b border-gray-300 text-center cursor-pointer ${
                        appointment
                          ? appointment.status === "Finished"
                            ? "bg-green-100"
                            : "bg-blue-100"
                          : "bg-gray-50"
                      }`}
                    >
                      {appointment ? (
                        <div>
                          <p className="font-semibold text-black text-sm">
                            {appointment.patientName}
                          </p>
                          <p className="text-xs text-gray-600">
                            {appointment.treatment}
                          </p>
                          <span
                            className={`inline-block mt-1 px-2 py-1 text-xs rounded ${
                              appointment.status === "Finished"
                                ? "bg-green-200 text-green-800"
                                : "bg-yellow-200 text-yellow-800"
                            }`}
                          >
                            {appointment.status}
                          </span>
                        </div>
                      ) : (
                        <p className="text-gray-400 text-xs">Available</p>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddPatientModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        doctor={selectedDoctor}
        timeSlot={selectedTimeSlot}
        onSave={handleSaveAppointment}
        editingAppointment={editingAppointment}
      />
    </div>
  );
};

export default ReservationTable;
