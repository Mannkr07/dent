"use client"
import { Button } from "../../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Phone, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

const PatientList = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto p-6 dark:bg-black">
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4">
          <Button variant="link" className="text-blue-600 font-semibold">Active Treatment</Button>
          <Button variant="link" className="text-gray-400">Inactive Treatment</Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span className="text-gray-700 font-medium">72</span>
            <span className="text-gray-500">total patients</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" className="text-gray-600 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          Filters
        </Button>
        <div className="flex space-x-2">
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="text-gray-600 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            </Button>
            <Button variant="outline" size="icon" className="text-gray-600 dark:text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
            </Button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Add Patient
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">PATIENT NAME</TableHead>
            <TableHead>PHONE</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>ADDRESS</TableHead>
            <TableHead>REGISTERED</TableHead>
            <TableHead>LAST VISIT</TableHead>
            <TableHead>LAST TREATMENT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.name} onClick={() => router.push("/patients")}>
      
                <TableCell className="font-medium">
                  <div className="flex items-center dark:text-white">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={patient.avatar} />
                      <AvatarFallback>{patient.initials}</AvatarFallback>
                    </Avatar>
                    {patient.name}
                  </div>
                </TableCell>
                
                <TableCell>
                  <div className="flex items-center dark:text-white">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    {patient.phone}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center dark:text-white">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    {patient.email}
                  </div>
                </TableCell>
                <TableCell className="dark:text-white">{patient.address}</TableCell>
                <TableCell className="dark:text-white">{patient.registered}</TableCell>
                <TableCell className="dark:text-white">{patient.lastVisit}</TableCell>
                <TableCell className="dark:text-white">{patient.lastTreatment}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PatientList

const patients = [
  {
    name: "Mann Kumar",
    initials: "MK",
    avatar: "/placeholder.svg?height=32&width=32",
    phone: "(388) 316-4463",
    email: "Mannk7688@mail.com",
    address: "8309 Barby Hill",
    registered: "Mar 12, 2021",
    lastVisit: "05 Jun 2021",
    lastTreatment: "Tooth Scaling + Bleac"
  },
  {
    "name": "John Doe",
    "initials": "ED",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(533) 634-3857",
    "email": "emily.davis@mail.com",
    "address": "606 Walnut St",
    "registered": "May 31, 2021",
    "lastVisit": "13 Mar 2022",
    "lastTreatment": "Gum Treatment"
  },
  {
    "name": "David Martinez",
    "initials": "LG",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(908) 526-9615",
    "email": "john.doe@mail.com",
    "address": "404 Cedar Ct",
    "registered": "Jan 20, 2022",
    "lastVisit": "27 Sep 2021",
    "lastTreatment": "Tooth Extraction"
  },
  {
    "name": "Jane Smith",
    "initials": "JD",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(329) 965-2969",
    "email": "linda.garcia@mail.com",
    "address": "707 Aspen Pl",
    "registered": "Apr 17, 2022",
    "lastVisit": "20 Sep 2021",
    "lastTreatment": "Crown Replacement"
  },
  {
    "name": "Jane Smith",
    "initials": "JD",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(128) 334-1341",
    "email": "michael.brown@mail.com",
    "address": "101 Maple Ave",
    "registered": "Nov 13, 2022",
    "lastVisit": "11 May 2022",
    "lastTreatment": "Gum Treatment"
  },
  {
    "name": "James Anderson",
    "initials": "PT",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(122) 278-5586",
    "email": "sarah.wilson@mail.com",
    "address": "202 Birch Rd",
    "registered": "Apr 23, 2022",
    "lastVisit": "28 Jul 2022",
    "lastTreatment": "Veneer Placement"
  },
  {
    "name": "Sarah Wilson",
    "initials": "PT",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(168) 385-6855",
    "email": "michael.brown@mail.com",
    "address": "123 Main St",
    "registered": "Aug 28, 2021",
    "lastVisit": "01 Jul 2021",
    "lastTreatment": "Crown Replacement"
  },
  {
    "name": "Patricia Taylor",
    "initials": "MB",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(218) 603-4355",
    "email": "jane.smith@mail.com",
    "address": "404 Cedar Ct",
    "registered": "Apr 21, 2021",
    "lastVisit": "09 Mar 2021",
    "lastTreatment": "Gum Treatment"
  },
  {
    "name": "James Anderson",
    "initials": "PT",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(215) 618-3493",
    "email": "david.martinez@mail.com",
    "address": "606 Walnut St",
    "registered": "Apr 30, 2021",
    "lastVisit": "29 Jun 2022",
    "lastTreatment": "Root Canal"
  },
  {
    "name": "John Doe",
    "initials": "JS",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(889) 895-3944",
    "email": "robert.johnson@mail.com",
    "address": "123 Main St",
    "registered": "Aug 03, 2021",
    "lastVisit": "18 May 2022",
    "lastTreatment": "Root Canal"
  },
  {
    "name": "Robert Johnson",
    "initials": "PT",
    "avatar": "/placeholder.svg?height=32&width=32",
    "phone": "(593) 425-8387",
    "email": "robert.johnson@mail.com",
    "address": "606 Walnut St",
    "registered": "Jan 21, 2022",
    "lastVisit": "27 May 2021",
    "lastTreatment": "Root Canal"
  },
  // Add more patient data here...
]