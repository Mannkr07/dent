import { Star, MoreVertical, Filter, Plus } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const treatments = [
  { name: "General Checkup", sample: true, price: 50, duration: "± 1 hour(s)", visitType: "SINGLE VISIT", rating: null, reviews: 0 },
  { name: "Teeth Whitening", sample: true, price: 300, duration: "± 1 hour(s) /treatments", visitType: "MULTIPLE VISIT", rating: null, reviews: 0 },
  { name: "Teeth Cleaning", price: 75, duration: "± 1 hour(s)", visitType: "SINGLE VISIT", rating: 3.8, reviews: 48 },
  { name: "Tooth Extraction", price: 300, duration: "± 2 hour(s) /treatments", visitType: "MULTIPLE VISIT", rating: 4.5, reviews: 110 },
  { name: "Tooth Fillings", price: 210, duration: "± 1.5 hour(s)", visitType: "SINGLE VISIT", rating: 3.2, reviews: 75 },
  { name: "Tooth Scaling", price: 140, duration: "± 1.5 hour(s)", visitType: "SINGLE VISIT", rating: 4.5, reviews: 186 },
  { name: "Tooth Braces (Metal)", price: 3000, duration: "± 1.5 hour(s) /treatments", visitType: "MULTIPLE VISIT", rating: 4.5, reviews: 220 },
  { name: "Veneers", price: 925, duration: "± 1.5 hour(s) /treatments", visitType: "MULTIPLE VISIT", rating: 4.0, reviews: 32 },
  { name: "Bonding", price: 190, duration: "± 1.5 hour(s)", visitType: "SINGLE VISIT", rating: 4.0, reviews: 4 },
];

const Treatment = () => {
  return (
    <div className="w-full h-screen space-w-4xl mx-auto p-4 bg-white dark:bg-black">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <Button variant="link" className="text-blue-600 font-semibold">Active Treatment</Button>
          <Button variant="link" className="text-gray-400">Inactive Treatment</Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <path d="M20 7h-7"></path>
              <path d="M14 17H6"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>
            <span className="text-gray-700">9</span>
            <span className="text-gray-500">treatments</span>
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
          <Button className="bg-blue-600 text-white flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Treatment</span>
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">
                <Input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="text-left p-2 text-gray-500 font-normal">TREATMENT NAME</th>
              <th className="text-left p-2 text-gray-500 font-normal">PRICE</th>
              <th className="text-left p-2 text-gray-500 font-normal">ESTIMATE DURATION</th>
              <th className="text-left p-2 text-gray-500 font-normal">TYPE OF VISIT</th>
              <th className="text-left p-2 text-gray-500 font-normal">RATING</th>
              <th className="text-left p-2 text-gray-500 font-normal">REVIEW</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {treatments.map((treatment, index) => (
              <tr key={index} className="border-b dark:text-white">
                <td className="p-2">
                  <Input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="p-2">
                  <div className="flex items-center space-x-2">
                    <span>{treatment.name}</span>
                    {treatment.sample && <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">SAMPLE</span>}
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-500">Start from</span>
                    <span className="font-semibold">SAR {treatment.price}</span>
                  </div>
                </td>
                <td className="p-2 text-gray-700 dark:text-white">{treatment.duration}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded text-xs ${treatment.visitType === 'SINGLE VISIT' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                    {treatment.visitType}
                  </span>
                </td>
                <td className="p-2">
                  {treatment.rating ? (
                    <div className="flex items-center space-x-1 dark:text-white">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{treatment.rating}</span>
                    </div>
                  ) : (
                    <span className="text-gray-500 dark:text-white">No Rating</span>
                  )}
                </td>
                <td className="p-2 text-gray-700 dark:text-white">{treatment.reviews} Review(s)</td>
                <td className="p-2">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Treatment;
