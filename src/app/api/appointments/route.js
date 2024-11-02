import dbConnect from "../../../dbConfig/dbConfig";
import Appointment from "../../../models/appointment";

// Connect to the database before handling requests
await dbConnect();

// Handle GET requests
export async function GET(req) {
  try {
    const appointments = await Appointment.find({});
    return new Response(JSON.stringify({ success: true, data: appointments }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle POST requests
export async function POST(req) {
  try {
    const data = await req.json();
    const appointment = await Appointment.create(data);
    return new Response(JSON.stringify({ success: true, data: appointment }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle PUT requests
export async function PUT(req) {
  try {
    const data = await req.json();
    const { id } = data;
    const appointment = await Appointment.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!appointment) {
      return new Response(JSON.stringify({ success: false }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data: appointment }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle DELETE requests
export async function DELETE(req) {
  try {
    const { id } = new URL(req.url).searchParams; // Extract the id from query parameters
    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return new Response(JSON.stringify({ success: false }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
