import { Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const stocks = () => {
  return (
    <div className="w-full space-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 rounded-full p-3">
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" 
          viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round" 
          class="lucide lucide-banknote"><rect width="20" 
          height="12" x="2" y="6" rx="2"/>
          <circle cx="12" cy="12" r="2"/>
          <path d="M6 12h.01M18 12h.01"/>
          </svg>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-500">
              TOTAL ASSET VALUE
            </h2>
            <p className="text-3xl font-bold">SAR 10,200,323</p>
          </div>
        </div>
        <div className="p-2 md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">32 Product</h2>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 relative">
         <div className="bg-teal-400 h-2.5 rounded-full absolute top-0 left-0" style={{ width: '25%' }}></div>
         <div className="bg-orange-400 h-2.5 rounded-full absolute top-0 left-1/4" style={{ width: '37.5%' }}></div>
         <div className="bg-red-400 h-2.5 rounded-full absolute top-0 left-[62.5%]" style={{ width: '37.5%' }}></div>
</div>

        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-teal-400 mr-2"></div>
            <span className="text-gray-600">In stock:</span>
            <span className="font-medium ml-1">20</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
            <span className="text-gray-600">Low stock:</span>
            <span className="font-medium ml-1">8</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
            <span className="text-gray-600">Out of stock:</span>
            <span className="font-medium ml-1">4</span>
          </div>
        </div>
        </div>
      </div>
      <div className="flex space-x-4 border-b">
        <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
          Inventory
        </button>
        <button className="text-gray-500 pb-2 font-medium">Order Stock</button>
      </div>
      <div className="flex justify-between items-center">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search name or reservation ID..."
            className="pl-8 w-80"
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Filters</Button>
          <Button variant="outline">Order Stock</Button>
          <Button>+ New Product</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">NAME</TableHead>
            <TableHead>CATEGORIES</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>VENDOR</TableHead>
            <TableHead>STOCK</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead className="text-right">ASSET VALUE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.sku}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.vendor}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-xs ${getStatusColor(
                    product.status
                  )}`}
                >
                  {product.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                SAR {product.assetValue.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const products = [
  {
    name: "Ambesol",
    category: "Pain and Anxiety",
    sku: "ZKS8124",
    vendor: "Barone LLC.",
    stock: 0,
    status: "OUT OF STOCK",
    assetValue: 0,
  },
  {
    name: "Anesthesia",
    category: "Pain and Anxiety",
    sku: "ZKS8123",
    vendor: "Dentalku",
    stock: 124,
    status: "IN STOCK",
    assetValue: 2000,
  },
  {
    name: "Doxycycline",
    category: "Periodontal Disease",
    sku: "ZKS8122",
    vendor: "Dentalku",
    stock: 0,
    status: "IN STOCK",
    assetValue: 1500,
  },
  {
    name: "Lidex",
    category: "Anti-inflammatory",
    sku: "ZKS8121",
    vendor: "Barone LLC.",
    stock: 0,
    status: "OUT OF STOCK",
    assetValue: 0,
  },
  {
    name: "Orabase",
    category: "Anti-inflammatory",
    sku: "ZKS8120",
    vendor: "Barone LLC.",
    stock: 10,
    status: "LOW STOCK",
    assetValue: 1800,
  },
  {
    name: "Orajel",
    category: "Pain and Anxiety",
    sku: "ZKS8119",
    vendor: "K24",
    stock: 10,
    status: "IN STOCK",
    assetValue: 4200,
  },
  {
    name: "PerioChip",
    category: "Plaque and Gingivitis",
    sku: "ZKS8118",
    vendor: "K24",
    stock: 124,
    status: "IN STOCK",
    assetValue: 5200,
  },
  {
    name: "Peridex",
    category: "Plaque and Gingivitis",
    sku: "ZKS8117",
    vendor: "K24",
    stock: 10,
    status: "LOW STOCK",
    assetValue: 800,
  },
  {
    name: "Temovate",
    category: "Anti-inflammatory",
    sku: "ZKS8116",
    vendor: "Dentalku",
    stock: 124,
    status: "LOW STOCK",
    assetValue: 300,
  },
];

function getStatusColor(status) {
  switch (status) {
    case "IN STOCK":
      return "bg-teal-100 text-teal-800";
    case "LOW STOCK":
      return "bg-orange-100 text-orange-800";
    case "OUT OF STOCK":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
export default stocks;