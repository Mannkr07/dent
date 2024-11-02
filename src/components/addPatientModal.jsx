"use client";

import { useState, useEffect } from "react";

// Modal Component for Adding/Editing Patient
const AddPatientModal = ({
  isOpen,
  onClose,
  doctor,
  timeSlot,
  onSave,
  editingAppointment,
}) => {
  const [patientName, setPatientName] = useState(
    editingAppointment ? editingAppointment.patientName : ""
  );
  const [treatment, setTreatment] = useState(
    editingAppointment ? editingAppointment.treatment : ""
  );
  const [status, setStatus] = useState(
    editingAppointment ? editingAppointment.status : "Registered"
  );

  useEffect(() => {
    if (editingAppointment) {
      setPatientName(editingAppointment.patientName);
      setTreatment(editingAppointment.treatment);
      setStatus(editingAppointment.status);
    }
  }, [editingAppointment]);

  const handleClose = () => {
    setPatientName("");
    setTreatment("");
    setStatus("Registered");
    onClose();
  };

  const handleSave = () => {
    const newAppointment = {
      id: editingAppointment ? editingAppointment.id : Date.now(),
      patientName,
      treatment,
      status,
      doctorId: doctor ? doctor.id : null, // Handle null doctor case
      time: timeSlot,
    };

    onSave(newAppointment);
    handleClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">
          {editingAppointment ? "Edit" : "Add"} Patient for{" "}
          {doctor ? doctor.name : "Selected Doctor"}
        </h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Patient Name
        </label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          placeholder="Enter patient name"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Treatment
        </label>
        <input
          type="text"
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          placeholder="Enter treatment"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="Registered">Registered</option>
          <option value="Finished">Finished</option>
          <option value="Encounter">Ongoing</option>
        </select>

        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="mr-2 px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPatientModal;
