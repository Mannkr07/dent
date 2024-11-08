"use client";

import { useState, useEffect } from "react";
import AddPatientModal from "../../../components/addPatientModal";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  AlertCircle,
} from "lucide-react";

const ReservationTable = () => {
  const [selectedDate, setSelectedDate] = useState("Fri, 16 May 2022");
  const [doctors] = useState([
    { id: 1, name: "Drg Soap Mactavish" },
    { id: 2, name: "Drg Jerald O'Hara" },
    { id: 3, name: "Drg Putri Larasati" },
    { id: 4, name: "Shaurya" },
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
        await axios.put(`/api/appointments`, {
          _id: editingAppointment._id, // Use `_id` for MongoDB
          ...newAppointment,
        });
        setAppointments((prev) =>
          prev.map((appt) =>
            appt._id === editingAppointment._id
              ? { ...appt, ...newAppointment }
              : appt
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
    <div className="h-screen dark:bg-black dark:text-white">
      <div className="container mx-auto p-4 max-w-6xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Reservation Schedule
        </h1>

        {/* Doctor Filter Dropdown */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <Button variant="link" className="text-blue-600 font-semibold">
              Calendar
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="text-gray-400" />
            <span className="font-semibold">16</span>
            <span className="text-gray-500">total appointments</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline">Today</Button>
            <Button variant="ghost" size="icon">
              <ChevronLeft />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight />
            </Button>
            <span className="font-semibold">{selectedDate}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Select
              value={selectedDoctorFilter}
              onValueChange={setSelectedDoctorFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Dentist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Doctors</SelectItem>{" "}
                {/* Updated to match the previous code's default value */}
                {doctors.map((doctor) => (
                  <SelectItem key={doctor.id} value={doctor.id}>
                    {" "}
                    {/* Use doctor.id as value */}
                    {doctor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto relative">
          <table className="min-w-full border border-gray-300 dark:border-neutral-800 rounded-lg">
            <thead>
              <tr className="text-black">
                <th className="px-4 py-2 border-r border-gray-300 dark:border-neutral-800 text-center bg-gray-100 dark:bg-black dark:text-white w-[192px] min-w-[192px] sticky left-[-1px] z-10 ">
                  Time
                </th>
                {filteredDoctors.map((doctor) => (
                  <th
                    key={doctor.id}
                    className="px-4 py-2 h-[60px] border-r border-gray-300 dark:border-neutral-800 text-center bg-gray-100 dark:bg-black dark:text-white"
                    style={{ minWidth: "300px", width: "300px" }}
                  >
                    <div className="flex flex-row items-center gap-[10px]">
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
                <tr key={slotIdx} className="h-[75px]">
                  <td className="px-4 py-3 text-black border-r border-gray-300 dark:border-neutral-800 text-center bg-gray-50 dark:bg-black dark:text-white font-medium sticky left-[-1px] z-10">
                    {slot}
                  </td>
                  {filteredDoctors.map((doctor) => {
                    const appointment = appointments.find(
                      (appt) =>
                        appt.doctorId === doctor.id && appt.time === slot
                    );

                    return (
                      <td
                        key={`${doctor.id}-${slotIdx}`}
                        onClick={() => handleSlotClick(doctor, slot)}
                        className={`px-4 py-3 border-r border-b border-gray-300 dark:border-neutral-800 text-center cursor-pointer ${
                          appointment
                            ? appointment.status === "Finished"
                              ? "bg-green-100"
                              : "bg-blue-100"
                            : "bg-gray-50"
                        }`}
                        style={{ minWidth: "300px", width: "300px" }}
                      >
                        {appointment ? (
                          <div className="flex flex-row">
                            <div className="flex flex-col items-start gap-[2px]">
                              <p className="font-medium text-black text-sm">
                                {appointment.patientName}
                              </p>
                              <p
                                className={`text-xs font-light text-gray-600 px-[8px] py-[2px] rounded-[8px] border-[1px] bg-white ${
                                  appointment.status === "Finished"
                                    ? "border-green-200"
                                    : "border-yellow-200"
                                }`}
                              >
                                {appointment.treatment}
                              </p>
                            </div>
                            <span
                              className={`flex flex-row justify-center items-center h-[25px] w-[70px] text-xs rounded ml-auto ${
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
    </div>
  );
};

export default ReservationTable;
