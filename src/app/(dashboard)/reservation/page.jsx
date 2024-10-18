"use client";

import { useState } from 'react';
import { Calendar } from '../../../components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { ScrollArea } from '../../../components/ui/scroll-area';

const Reservation = () =>  {
  const [date, setDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && patientName && patientEmail) {
      const newReservation = {
        id: Date.now(),
        date,
        patientName,
        patientEmail,
      };
      setReservations([...reservations, newReservation]);
      setPatientName('');
      setPatientEmail('');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Reservation System
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Select Date</CardTitle>
            <CardDescription>Choose a date for your appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                className="rounded-md border"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Make Reservation</CardTitle>
            <CardDescription>Fill in your details to book an appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="patientName" className="text-sm md:text-base">
                  Name
                </Label>
                <Input
                  id="patientName"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="patientEmail" className="text-sm md:text-base">
                  Email
                </Label>
                <Input
                  id="patientEmail"
                  type="email"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Make Reservation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6 w-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Current Reservations</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            {reservations.length > 0 ? (
              <ul className="space-y-4">
                {reservations.map((reservation) => (
                  <li key={reservation.id} className="bg-muted p-3 rounded-lg">
                    <p className="font-medium text-sm md:text-base">{reservation.patientName}</p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {reservation.date.toLocaleDateString()} at {reservation.date.toLocaleTimeString()}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">{reservation.patientEmail}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground">No reservations yet.</p>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
export default Reservation