import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import { ChevronDownIcon, MoreHorizontalIcon, EyeIcon, ArrowRightIcon, PencilIcon, TrashIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu"

export default function Component() {
  return (
    <div className="w-full space-w-4xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <svg
              className=" w-5 h-5 text-gray-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="18" rx="2" width="18" x="3" y="3" />
              <path d="M16 8h.01" />
              <path d="M8 8h.01" />
              <path d="M8 16h.01" />
              <path d="m16 16-.01.01" />
              <path d="M12 12h.01" />
            </svg>
            <span className="text-sm font-medium text-gray-500">TOTAL ASSET VALUE</span>
          </div>
          <div className="mt-2 text-2xl font-bold">SAR 13,232,432</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <svg
              className=" w-5 h-5 text-gray-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            <span className="text-sm font-medium text-gray-500">LIQUID ASSETS</span>
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-bold">SAR 8,983,123</span>
            <span className="text-sm font-medium text-green-500">4.51%</span>
            
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <svg
              className=" w-5 h-5 text-gray-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
            <span className="text-sm font-medium text-gray-500">PHYSICAL ASSETS VALUE</span>
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-bold">SAR 4,249,309</span>
            <span className="text-sm font-medium text-red-500">2.51%</span>
          </div>
        </Card>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">List Account</h2>
            <p className="text-sm text-gray-500">All account setup manually</p>
          </div>
          <div className="space-x-2">
            <Button variant="outline">Transfer money</Button>
            <Button>Add new account</Button>
          </div>
        </div>
        <Card>
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">ACTIVE LIST</h3>
            <ChevronDownIcon className="w-5 h-5" />
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "FREE CASH", amount: "SAR 4,012,409", icon: "💵", description: "This is money for this need" },
              { name: "DRUG PURCHASE", amount: "SAR 4,120,130", icon: "💊", description: "No rek : 124 1245 3567 0987" },
              { name: "TREATMENT FUND", amount: "SAR 3,341,130", icon: "🦷", description: "This is money for this need" },
              { name: "STOCK FUND", amount: "SAR 2,139,209", icon: "📊", description: "This is money for this need" },
            ].map((account, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                      {account.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{account.name}</h4>
                      <p className="text-2xl font-bold">{account.amount}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Detail account
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ArrowRightIcon className="w-4 h-4 mr-2" />
                        Transfer money
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <PencilIcon className="w-4 h-4 mr-2" />
                        Deactive
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        <TrashIcon className="w-4 h-4 mr-2" />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="mt-2 text-sm text-gray-500">{account.description}</p>
              </Card>
            ))}
          </div>
        </Card>
        <Card>
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">INACTIVE LIST</h3>
            <ChevronDownIcon className="w-5 h-5" />
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "MONTHLY RENT", amount: "SAR 6,123,434", icon: "🏢", description: "No rek : 009 2345 2224 3446" },
              { name: "DRUG PURCHASE", amount: "SAR 3,246,245", icon: "💊", description: "No rek : 004 3345 2234 5678" },
              { name: "TREATMENT FUND", amount: "SAR 5,234,234", icon: "🦷", description: "No rek : 004 3334 5556 2344" },
            ].map((account, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                      {account.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">{account.name}</h4>
                      <p className="text-xl font-bold text-gray-500">{account.amount}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Activate
                  </Button>
                </div>
                <p className="mt-2 text-sm text-gray-400">{account.description}</p>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}