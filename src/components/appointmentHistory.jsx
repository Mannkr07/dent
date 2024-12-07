"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { ArrowUpDown } from "lucide-react";

const mockAppointments = [
  {
    id: "1",
    date: "2023-05-01",
    procedure: "Dental Cleaning",
    dentist: "Dr. Smith",
    status: "completed",
    notes: "Regular checkup, no issues found.",
  },
  {
    id: "2",
    date: "2023-03-15",
    procedure: "Cavity Filling",
    dentist: "Dr. Johnson",
    status: "completed",
    notes: "Small cavity in lower right molar.",
  },
  {
    id: "3",
    date: "2023-01-22",
    procedure: "Root Canal",
    dentist: "Dr. Williams",
    status: "completed",
    notes: "Successful procedure, follow-up scheduled.",
  },
  {
    id: "4",
    date: "2022-11-10",
    procedure: "Teeth Whitening",
    dentist: "Dr. Brown",
    status: "completed",
    notes: "Patient satisfied with results.",
  },
  {
    id: "5",
    date: "2022-09-05",
    procedure: "Dental Crown",
    dentist: "Dr. Davis",
    status: "cancelled",
    notes: "Patient rescheduled due to illness.",
  },
  {
    id: "6",
    date: "2022-07-18",
    procedure: "Dental Cleaning",
    dentist: "Dr. Smith",
    status: "no-show",
    notes: "Patient did not attend, follow-up required.",
  },
];

export default function PatientAppointmentHistory({ patientName, patientId }) {
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });
  const [filterStatus, setFilterStatus] = useState("all");

  const sortedAppointments = [...mockAppointments].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const filteredAppointments = sortedAppointments.filter((appointment) =>
    filterStatus === "all" ? true : appointment.status === filterStatus
  );

  const requestSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const statusColors = {
    completed: "bg-green-500",
    cancelled: "bg-red-500",
    "no-show": "bg-yellow-500",
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Appointment History for {patientName}
        </CardTitle>
        <p className="text-sm text-muted-foreground">Patient ID: {patientId}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Select
            value={filterStatus}
            onValueChange={(value) => setFilterStatus(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="no-show">No Show</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" onClick={() => requestSort("date")}>
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => requestSort("procedure")}
                >
                  Procedure
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => requestSort("dentist")}>
                  Dentist
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.procedure}</TableCell>
                <TableCell>{appointment.dentist}</TableCell>
                <TableCell>
                  <Badge className={statusColors[appointment.status]}>
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell>{appointment.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filteredAppointments.length === 0 && (
          <p className="text-center text-muted-foreground mt-4">
            No appointments found matching the current filter.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
