"use client";
import { useState } from 'react';
import { CalendarIcon, ChevronDownIcon, DollarSignIcon, DownloadIcon, SearchIcon } from 'lucide-react';
import { Avatar } from '../../../components/ui/avatar';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';

const Sales = () => {
  const [activeTab, setActiveTab] = useState('Bill');

  return (
    <div className="w-full space-w-6xl mx-auto p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 space-y-2">
          <div className="text-sm text-gray-500">Revenue this month</div>
          <div className="flex items-center space-x-2">
            
            <span className="text-2xl font-bold">SAR 10,398</span>
            <span className="text-sm text-green-500">+SAR 498</span>
          </div>
        </Card>
        <Card className="p-4 space-y-2">
          <div className="text-sm text-gray-500">Profit this month</div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">SAR 3,982</span>
            <span className="text-sm text-green-500">+SAR 198</span>
          </div>
        </Card>
      </div>
      <div className="flex border-b">
        <Button
          variant={activeTab === 'Bill' ? 'default' : 'ghost'}
          className="rounded-none"
          onClick={() => setActiveTab('Bill')}
        >
          Bill
        </Button>
        <Button
          variant={activeTab === 'Payment Received' ? 'default' : 'ghost'}
          className="rounded-none"
          onClick={() => setActiveTab('Payment Received')}
        >
          Payment Received
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="relative w-full md:w-64">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input placeholder="Search name or reservation ID..." className="pl-8" />
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="1 May 2021 - 30 May 2021">
            <SelectTrigger className="w-[240px]">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 May 2021 - 30 May 2021">1 May 2021 - 30 May 2021</SelectItem>
              {/* Add more date range options here */}
            </SelectContent>
          </Select>
          <Button>
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">RESERVATION ID</TableHead>
            <TableHead>PATIENT NAME</TableHead>
            <TableHead>NUMBER OF BILL</TableHead>
            <TableHead>RESERVATION DATE</TableHead>
            <TableHead>TOTAL AMOUNT</TableHead>
            <TableHead>PAYMENT</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { id: '#RSV008', name: 'Albert Flores', bill: '1/2', date: '24/05/2022', amount: 'SAR 2,311', status: 'PARTIALLY PAID' },
            { id: '#RSV007', name: 'Esther Howard', bill: '0/2', date: '23/05/2022', amount: 'SAR 535', status: 'PARTIALLY PAID' },
            { id: '#RSV006', name: 'Kathryn Murphy', bill: '2/2', date: '19/05/2022', amount: 'SAR 645', status: 'FULLY PAID' },
            { id: '#RSV005', name: 'Brooklyn Simmons', bill: '2/2', date: '19/05/2022', amount: 'SAR 667', status: 'FULLY PAID' },
            { id: '#RSV004', name: 'Bessie Cooper', bill: '2/2', date: '18/05/2022', amount: 'SAR 343', status: 'FULLY PAID' },
            { id: '#RSV003', name: 'Arlene McCoy', bill: '2/2', date: '18/05/2022', amount: 'SAR 900', status: 'FULLY PAID' },
            { id: '#RSV002', name: 'Jane Cooper', bill: '2/2', date: '17/05/2022', amount: 'SAR 650', status: 'FULLY PAID' },
            { id: '#RSV001', name: 'Darrell Steward', bill: '2/2', date: '16/05/2022', amount: 'SAR 1,200', status: 'FULLY PAID' },
          ].map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.id}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell>{row.bill}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    row.status === 'FULLY PAID' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {row.status}
                </span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Sales;
