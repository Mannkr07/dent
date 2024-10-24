import React from 'react'
import { auth } from "../../app/auth"
import Charts from "../(dashboard)/dashboard/page"
import PatientList from "../(dashboard)/patients-list/page"

const page = async () => {
  const session = auth();
  return (
    <div>
      {(session?.user?.email === "admin@dent.com" && (
        <Charts />
      ))}
      {(session?.user?.email === "doctor001@dent.com" && (
        <PatientList />
      ))}
    </div>
  )
}

export default page