import React, {useState} from "react";
import QuoteResponseForm from "./QuoteResponseForm";

import { ChevronDown, Building2, Package } from "lucide-react";
import signDoc from "../assets/sign-doc.png";
import Leading from '../assets/Leading.png';

const pix = Leading;

const QuoteDetails = () => {
  const [isResponseOpen, setIsResponseOpen] = useState(false);

  const quoteData = {
    created: "Wed, 12th June 2022, 08:00am",
    expectedDelivery: "2024-12-02",
    title: "Request for Equipments",
    rfqNo: "RQ #01234",
    requestor: {
      initials: "JD",
      name: "Jane Doe",
      role: "Head Nurse, Paediatrics",
    },
    status: "Awaiting",
    department: "Maternity",
    client: {
      name: "Westend Hospital",
      address: "Clear street",
    },
    items: [
      {
        id: 1,
        image: pix,
        name: "Oxygen concentrator",
        code: "#28373",
        variant: "Blue",
        quantity: "100 pieces",
        price: "$200.00",
        amount: "$2,000.0",
        delivery: "2024-08-07",
      },
      {
        id: 2,
        image: pix,
        name: "Mechanical ventilator",
        code: "#28373",
        variant: "NIL",
        quantity: "45 Kg",
        price: "$350.00",
        amount: "$2,500.00",
        delivery: "2024-08-07",
      },
      {
        id: 3,
        image: pix,
        name: "Patient Monitor",
        code: "#28373",
        variant: "Blue",
        quantity: "30 Units",
        price: "$300.00",
        amount: "$1,500.00",
        delivery: "2024-08-07",
      },
      {
        id: 4,
        image: pix,
        name: "Mechanical ventilator",
        code: "#28373",
        variant: "Blue",
        quantity: "35 Units",
        price: "$200.00",
        amount: "$1,500.00",
        delivery: "2024-08-07",
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6 ">
    <>
  {/* Quote Response Form */}
  {isResponseOpen && (
    <QuoteResponseForm
      isOpen={isResponseOpen}
      onClose={() => setIsResponseOpen(false)}
      quoteData={quoteData}
    />
  )}

  
  {!isResponseOpen && (
    <div>
      
      <div className="flex justify-between items-center mb-6 ml-[50px] lg:ml-[0px]">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold text-2xl leading-[28.8px] tracking-[-0.02em] mb-1">
            Quote details
          </h1>
          <span className="text-sm font-normal text-gray-800 leading-[20px]">
            Created on Wed, 12th June 2022, 08:00am
          </span>
        </div>

        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-[96px]"
            onClick={() => setIsResponseOpen(true)}
          >
            Respond
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors w-[96px] flex items-center justify-center gap-1">
            <span className="text-2xl leading-none">&times;</span>
            <span>Reject</span>
          </button>
        </div>
      </div>

      
      <div className="ml-[50px] lg:ml-[0px]">
        <div className="p-6 border-[2px] mb-5" style={{ borderRadius: "8px" }}>
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold">Quote Information</h2>
            <div
              className="text-gray-600 mt-2 md:mt-0"
              style={{ fontSize: "14px" }}
            >
              Expected delivery date: {quoteData.expectedDelivery}
            </div>
          </div>

          
          <div className="flex flex-row flex-wrap items-start justify-between gap-6">
            <div className="flex flex-col">
              <div className="mb-4">
                <div className="text-gray-600">Title</div>
              </div>
              <div className="mb-4">
                <div className="text-gray-600">RFQ No</div>
              </div>
              <div className="mb-4">
                <div className="text-gray-600">Requestor</div>
              </div>
              <div className="mb-4">
                <div className="text-gray-600">Status</div>
              </div>
              <div className="mb-4">
                <div className="text-gray-600">Department</div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                <div>{quoteData.title}</div>
              </div>
              <div className="mb-4">
                <div>{quoteData.rfqNo}</div>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-black">
                    {quoteData.requestor.initials}
                  </div>
                  <div className="flex items-center">
                    <div>{quoteData.requestor.name}</div>
                    <div className="text-gray-600 text-sm">
                      {quoteData.requestor.role}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                  {quoteData.status}
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <div>{quoteData.department}</div>
              </div>
            </div>

            
            <div className="flex flex-col ">
              <div className="mb-4 w-full md:w-[352px] border-[2px] p-[16px] gap-[8px] rounded-lg">
                <div className="flex flex-row items-center">
                  <Building2 className="text-gray-400 mr-2" size={20} />
                  <div className="text-gray-600">Client</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-black text-sm">
                    <p>W</p>
                  </div>
                  <div>
                    <div>{quoteData.client.name}</div>
                    <div className="text-gray-600 text-sm">
                      {quoteData.client.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="p-6 border-[2px] mb-5" style={{ borderRadius: "8px" }}>
          <h3 className="text-lg font-semibold mb-4">Item(s)</h3>
          <div className="overflow-x-auto border-[1px] rounded-lg">
            <table className="table-auto w-full min-w-[1000px]">
              <thead className="bg-gray-50" style={{ fontSize: "12px" }}>
                <tr>
                  <div className="flex items-center pl-4">
                  <input type="checkbox" className="rounded" />
                    <th className="p-4 text-left font-normal">Items</th>
                  </div>
                  <th className="p-4 text-left font-normal">Variants</th>
                  <th className="p-4 text-left font-normal">Quantity</th>
                  <th className="p-4 text-left font-normal">Price</th>
                  <th className="p-4 text-left font-normal">Amount</th>
                  <th className="p-4 text-left font-normal">
                    Expected Delivery Date
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "14px" }}>
                {quoteData.items.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4 max-w-[150px] truncate">
                      <div className="flex items-center gap-[12px]">
                        <input type="checkbox" className="rounded" />
                        <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.code}</p>
                      </div>
                    </div>
                      </div>
                    </td>
                    <td className="p-4">{item.variant}</td>
                    <td className="p-4">{item.quantity}</td>
                    <td className="p-4">{item.price}</td>
                    <td className="p-4">{item.amount}</td>
                    <td className="p-4">{item.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4">
            <div className="w-4/6"></div>
            <div
              className="w-[118px] text-left"
              style={{ marginLeft: "-40px", fontSize: "16px" }}
            >
              Subtotal
            </div>
            <div className="w-1/6" style={{ marginRight: "45px" }}>
              $8,000.00
            </div>
          </div>
          <div className="flex justify-between border-t mt-2">
            <div className="w-4/6"></div>
            <div
              className="w-[118px] text-left"
              style={{ marginLeft: "-40px", fontSize: "16px" }}
            >
              Total
            </div>
            <div
              className="w-1/6 font-semibold"
              style={{ marginRight: "45px" }}
            >
              $8,750.00
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</>


    {!isResponseOpen && (
         <div className="mt-6 bg-white rounded-lg h-[96px] border-[2px] ml-[50px] lg:ml-[0px]">
         <button className="w-full p-4 text-left flex items-center pt-8 justify-between hover:bg-gray-50 transition-colors">
           <div className="flex items-center gap-2">
             <img
               src={signDoc}
               alt="document"
               className="text-gray-600 w-[32px]"
             />
             <span>Terms and Attachments</span>
           </div>
           <ChevronDown className="text-gray-600" />
         </button>
       </div>
    )}
    </div>
  );
};

export default QuoteDetails;
