import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { MoreVertical, Stethoscope, SlidersHorizontal } from "lucide-react"

const doctors = [
  {
    name: "Ronald Richards",
    image: "/placeholder.svg?height=40&width=40",
    specialty: "Dentist",
    contact: { phone: "209 555-0104", email: "R.Richards@avicena.com" },
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dental service",
    type: "PART-TIME"
  },
  {
    name: "Drg Jerald O'Hara",
    image: "/placeholder.svg?height=40&width=40",
    specialty: "Orthodontics",
    contact: { phone: "302 555-0107", email: "Jerald@avicena.com" },
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dental service, Oral Disease service +2",
    type: "FULL-TIME"
  },
  {
    name: "Putri Larasati",
    image: "/placeholder.svg?height=40&width=40",
    specialty: "Pediatric Dentistry",
    contact: { phone: "629 555-0129", email: "Larasati@avicena.com" },
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dental service",
    type: "FULL-TIME"
  },
  {
    name: "Drg Soap Mactavish",
    image: "/placeholder.svg?height=40&width=40",
    specialty: "Dentist",
    contact: { phone: "303 555-0105", email: "Soap@avicena.com" },
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Oral Disease service",
    type: "PART-TIME"
  },
  {
    name: "Devon Lane",
    image: "/placeholder.svg?height=40&width=40",
    specialty: "Endodontics",
    contact: { phone: "603 555-0123", email: "Devon@avicena.com" },
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dental service, Oral Disease service +2",
    type: "FULL-TIME"
  },
  {
    name: "Jacob Jones",
    image: "/placeholder.svg?height=40&width=40",
    specialty: "Pediatric Dentistry",
    contact: { phone: "704 555-0127", email: "Jacobjones@avicena.com" },
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dental service, Oral Disease service +2",
    type: "PART-TIME"
  },
  {
    name: "Marvin McKinney",
    image: "/placeholder.svg?height=40&width=40",
    specialty: "Pediatric Dentistry",
    contact: { phone: "907 555-0101", email: "Marvinmckinney@avicena.com" },
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dental service",
    type: "PART-TIME"
  },
  {
    name: "Dianne Russell",
    image: "/placeholder.svg?height=40&width=40",
    specialty: "Orthodontics",
    contact: { phone: "406 555-0120", email: "Diannerussell@avicena .com" },
    workingDays: ["S", "M", "T", "W", "T", "F", "S"],
    treatment: "Dental service, Oral Disease service +2",
    type: "FULL-TIME"
  },
]

const StaffList = () => {
  return (
    <div className="w-full mx-auto p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <div className="space-x-4">
          <Button variant="link" className="text-blue-600 font-semibold">
            Doctor Staff
          </Button>
          <Button variant="link" className="text-gray-400">
            General Staff
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-1">
            <Stethoscope className="h-5 w-5 text-gray-500" />
            <span className="text-xl font-semibold">8</span>
            <span className="text-gray-500">Doctor</span>
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button className="bg-blue-600 text-white">Add Doctor</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">NAME</TableHead>
            <TableHead>CONTACT</TableHead>
            <TableHead>WORKING DAYS</TableHead>
            <TableHead>ASSIGNED TREATMENT</TableHead>
            <TableHead>TYPE</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.name}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  <Input type="checkbox" className="w-4 h-4" />
                  <img
                    alt={doctor.name}
                    className="rounded-full"
                    height="40"
                    src={doctor.image}
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <div>{doctor.name}</div>
                    <div className="text-sm text-gray-500">{doctor.specialty}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>{doctor.contact.phone}</div>
                <div className="text-blue-600">{doctor.contact.email}</div>
              </TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  {doctor.workingDays.map((day, index) => (
                    <span
                      key={index}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        index % 2 === 0 ? "bg-gray-200 text-gray-600" : "bg-green-100 text-green-600"
                      }`}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell>{doctor.treatment}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    doctor.type === "FULL-TIME"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {doctor.type}
                </span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default StaffList