import React from 'react'
import Image from "next/image"
import { Button } from "../../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { CheckCircle2, Clock, FileText, MoreVertical, PlusCircle, Pencil } from "lucide-react"
import Odontogram from "../../../assests/images/Odontogram.png"


const Patients = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Patients</h1>
        </div>
        {/* <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
          </div>
        </div> */}
        <main className="flex-1 overflow-y-auto p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage alt="Mann Kumar" src="/placeholder.svg?height=64&width=64" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Mann Kumar</h1>
              <div className="flex items-center text-sm text-gray-500">
                <FileText className="w-4 h-4 mr-1" />
                Have uneven jawline
                <Button variant="link" className="ml-2 p-0 h-auto">
                  Edit
                </Button>
              </div>
            </div>
          </div>
          <Button>Create Appointment</Button>
        </div>
        <Tabs defaultValue='patient-information'>
          <TabsList>
            <TabsTrigger value="patient-information">Patient Information</TabsTrigger>
            <TabsTrigger value="appointment-history">Appointment History</TabsTrigger>
            <TabsTrigger value="next-treatment">Next Treatment</TabsTrigger>
            <TabsTrigger value="medical-record">Medical Record</TabsTrigger>
          </TabsList>
          <TabsContent value="patient-information" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">PATIENT DATA</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm text-gray-500">Age</h3>
                  <p>22 years old</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Gender</h3>
                  <p>Male</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Email Address</h3>
                  <p>Mannk6574@mail.com</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Mobile number</h3>
                  <p>(302) 555-0107</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Address</h3>
                  <p>8309 Barby Hill</p>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">MEDICAL DATA</CardTitle>
                <span className="text-sm text-gray-500">Last update 12 Juny 2022</span>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm text-gray-500">Blood pressure</h3>
                  <p>130 mm, 80 HG</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Particular sickness</h3>
                  <p>Heart Disease, hepatitis</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Allergic</h3>
                  <p>Medicine Allergic</p>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">ORAL CHECK</CardTitle>
                <span className="text-sm text-gray-500">Last update 12 Juny 2022</span>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm text-gray-500">Occlusi</h3>
                  <p>Normal Bite</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Torus Palatinus</h3>
                  <p>No</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Torus Mandibularis</h3>
                  <p>No</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Palatum</h3>
                  <p>No</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Diastema</h3>
                  <p>Yes ( tooth number 11,21)</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Anomalous teeth</h3>
                  <p>No</p>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">ORAL HYGIENE HABITS</CardTitle>
                <span className="text-sm text-gray-500">Last update 12 Juny 2022</span>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm text-gray-500">Latest dental visit?</h3>
                  <p>Less than 3 months ago</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">What time did you start dental care?</h3>
                  <p>About 20 years old</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">How many time, in a day, do you wash your teeth?</h3>
                  <p>Twice</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Do you use mouthwash?</h3>
                  <p>Yes</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Do you use dental floss?</h3>
                  <p>Yes</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">How often do you change your toothbrush?</h3>
                  <p>Every 3 months</p>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">ATTACHMENT</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-4">
                {[
                  { src: "/placeholder.svg", name: "Med_Pic_2131.jpg", action: "Add notes" },
                  { src: "/placeholder.svg", name: "Med_Pic_2132.jpg", action: "Patient tooth shape" },
                  { src: "/placeholder.svg", name: "Med_Pic_2133.jpg", action: "Add notes" },
                ].map((image, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <Image
                      src={image.src}
                      alt={`Dental X-ray ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-2">
                      <p className="text-sm font-medium">{image.name}</p>
                      <Button variant="link" className="p-0 h-auto text-blue-500">
                        {image.action === "Add notes" ? (
                          <>
                            <PlusCircle className="w-4 h-4 mr-1" />
                            {image.action}
                          </>
                        ) : (
                          <>
                            <Pencil className="w-4 h-4 mr-1" />
                            {image.action}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="appointment-history"></TabsContent>
          <TabsContent value="medical-record">
            <Card>
              <CardHeader>
                <CardTitle>Service</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="secondary">Medical</Button>
                  <Button variant="outline">Cosmetic</Button>
                </div>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Image
                    alt="Odontogram"
                    className="w-full"
                    height="300"
                    src={Odontogram}
                    style={{
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="absolute inset-0 bg-opacity-20" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Maxillary Left Lateral Incisor</h3>
                  <Card>
                    <CardHeader>
                      <div className='flex justify-between items-center'>
                        <CardTitle className="text-base">MAY 03</CardTitle>
                        <CardDescription>
                          <span className="font-semibold text-green-500 text-lg">Done</span>
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-14">
                        <div>
                          <div className="text-xs font-medium">CONDITION</div>
                          <div>Caries</div>
                        </div>
                        <div>
                          <div className="text-xs font-medium">TREATMENT</div>
                          <div>Tooth filling</div>
                        </div>
                        <div>
                          <div className="text-xs font-medium">DENTIST</div>
                          <div>Drg Soap Mactavish</div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-sm text-gray-500 border rounded-lg p-4">
                        <FileText className="w-4 h-4 mr-1" />
                        Advanced Decay
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="mt-4">
                    <CardHeader>
                      <div className='flex items-center justify-between'>
                        <CardTitle className="text-base">APR 12</CardTitle>
                        <CardDescription>
                          <span className="font-semibold text-yellow-500 text-lg">Pending</span>
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-14">
                        <div>
                          <div className="text-xs font-medium">CONDITION</div>
                          <div>Caries</div>
                        </div>
                        <div>
                          <div className="text-xs font-medium">TREATMENT</div>
                          <div>Tooth filling</div>
                        </div>
                        <div>
                          <div className="text-xs font-medium">DENTIST</div>
                          <div>Drg Soap Mactavish</div>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-yellow-500">Reason: Not enough time</div>
                      <div className="mt-4 flex items-center text-sm text-gray-500 border rounded-lg p-4">
                        <FileText className="w-4 h-4 mr-1" />
                        Decay in pulp
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      </main>
  )
}

export default Patients