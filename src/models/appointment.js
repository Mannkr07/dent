import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  doctorId: { type: Number, required: true },
  patientName: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, default: "Registered" },
  treatment: { type: String, required: true },
});

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
export default Appointment;
