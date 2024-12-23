"use client"
import Link from 'next/link'
import React from 'react'
import { 
    Package2, 
    Bell, 
    LayoutDashboard, 
    CalendarCheck, 
    CircleUserRound, 
    Stethoscope, 
    Users, 
    IdCard, 
    CreditCard, 
    ChartColumnBig, 
    TicketCheck, 
    PillBottle,
    ClipboardPlus,
    Headset 
} from "lucide-react"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'

const Sidebar = ({ session }) => {
    const pathName = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 dark:bg-black md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <div className="flex items-center gap-2 font-semibold">
                    <Package2 className="h-6 w-6 dark:text-white" />
                    <span className="dark:text-white">DentFlow</span>
                </div>
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4 dark:text-white" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {session?.user?.email === "admin@dent.com" && (
                    <>
                    
                        <Link
                        href="/dashboard"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/dashboard" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold")}
                        >
                        <LayoutDashboard  className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <div className='uppercase font-semibold text-xs text-muted-foreground py-4'>
                            Clinic
                        </div>
                        
                        <Link
                        href="/reservation"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/reservation" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold")}
                        >
                            <CalendarCheck className="h-4 w-4" />
                                Reservation
                            
                        </Link>                      
                        <Link
                        href="/patients-list"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/patients-list" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                        <CircleUserRound className="h-4 w-4" />
                            Patients{" "}
                        </Link>
                        <Link
                        href="/treatment"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/treatment" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                        <Stethoscope className="h-4 w-4" />
                            Treatments
                        </Link>
                        <Link
                        href="/staff-list"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/staff-list" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                        <Users className="h-4 w-4" />
                            Staff List
                        </Link>

                        <div className='uppercase font-semibold text-xs text-muted-foreground py-4'>
                            Finance
                        </div>
                        <Link
                        href="/account"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/account" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                            <IdCard className='h-4 w-4'/>
                            Accounts
                        </Link>
                        <Link
                        href="/sales"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/sales" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                            <ChartColumnBig className='h-4 w-4'/>
                            Sales
                        </Link>
                        <Link
                        href="#"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/purchases" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                            <TicketCheck  className='h-4 w-4'/>
                            Purchases
                        </Link>
                        <Link
                        href="payment"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/payment" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                            <CreditCard  className='h-4 w-4'/>
                            Payment Method
                        </Link>

                        <div className='uppercase font-semibold text-xs text-muted-foreground py-4'>
                            Physical Assets
                        </div>
                        <Link
                        href="/stocks"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/stocks" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold")}
                        >
                            <PillBottle  className='h-4 w-4'/>
                            Medicine Stocks
                        </Link>
                        <div className='uppercase font-semibold text-xs text-muted-foreground py-4'>
                            Support
                        </div>
                        <Link
                        href="#"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/report" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                            <ClipboardPlus className='h-4 w-4'/>
                            Report
                        </Link>
                        <Link
                        href="/support"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/support" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                        >
                            <Headset className='h-4 w-4'/>
                            Customer Support
                        </Link>
                    </>
                )}
                
                {(session?.user?.email === "doctor001@dent.com" && (
                        <>
                            <div className='uppercase font-semibold text-xs text-muted-foreground py-4'>
                                Clinic
                            </div>                   
                            <Link
                            href="/patients-list"
                            className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/patients-list" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                            >
                            <CircleUserRound className="h-4 w-4" />
                                Patients{" "}
                            </Link>
                            <Link
                            href="/treatment"
                            className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/treatment" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                            >
                            <Stethoscope className="h-4 w-4" />
                                Treatments
                            </Link>
                        </>
                    )
                )}

                {(session?.user?.email === "receptionist@dent.com" && (
                    <Link
                    href="/reservation"
                    className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-primary hover:bg-muted", pathName === "/reservation" && "text-blue-600 font-bold bg-blue-100 hover:text-blue-600 hover:font-bold ")}
                    >
                        <CalendarCheck className="h-4 w-4" />
                            Reservation
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            6
                        </Badge>
                    </Link>      
                ))}
            </nav>
            </div>
            <div className="mt-auto p-4">
            </div>
        </div>
    </div>
)}

export default Sidebar