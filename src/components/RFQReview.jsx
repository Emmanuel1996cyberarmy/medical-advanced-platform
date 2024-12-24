import React from 'react';
import { Edit, ChevronDown } from 'lucide-react';
import Leading from '../assets/Leading.png';

const pix = Leading;

const RFQReview = () => {
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
   items : [
    {
      id: 1,
      image: pix,
      name: "Oxygen concentra...",
      code: "#28373",
      variant: "Blue",
      quantity: "100 pack",
      price: 200.00,
      amount: 2000.00,
      deliveryDate: "2024-08-07"
    },
    {
      id: 2,
      image: pix,
      name: "Mechanical ventila...",
      code: "#28373",
      variant: "NIL",
      quantity: "45 Kg",
      price: 350.00,
      amount: 2500.00,
      deliveryDate: "2024-08-07"
    },
    {
      id: 3,
      image: pix,
      name: "Patient Monitor",
      code: "#28373",
      variant: "Blue",
      quantity: "30 Units",
      price: 300.00,
      amount: 1500.00,
      deliveryDate: "2024-08-07"
    },
    {
      id: 4,
      image: pix,
      name: "Mechanical ventila...",
      code: "#28373",
      variant: "Blue",
      quantity: "35 Units",
      price: 200.00,
      amount: 1500.00,
      deliveryDate: "2024-08-07"
    }
  ]};

  return (
    <div className="w-full  mx-auto p-4">
      

      {/* Request Information Section */}
      <div className=" p-6 mb-6 border-[2px] " style={{borderRadius: '8px'}}>
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-semibold">Request Information</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <Edit size={20} />
          </button>
        </div>

        <div className="flex flex-row flex-wrap items-start justify-between gap-6 max-w-[500px] " 
             >
        
            <div className="flex flex-col text-[#555E68] text-[16px] ">
              <div className="mb-4">
                <div >Title</div>
              </div>
              <div className="mb-4">
                <div >RFQ No</div>
              </div>
              <div className="mb-4">
                <div >Requestor</div>
              </div>
              <div className="mb-4">
                <div >Status</div>
              </div>
              <div className="mb-4">
                <div >Department</div>
              </div>
            </div>

            <div className="flex flex-col text-[#101928] text-[16px]">
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

            
           
          </div>
      </div>

      
      <div className="bg-white rounded-lg p-6 mb-6 border-[2px] mb-5" style={{ borderRadius: "8px" }}>
        <h2 className="text-xl font-semibold mb-6">Item(s)</h2>
        <div className="overflow-x-auto border-[1px] rounded-lg p-2" >
          <table className="table-auto w-full min-w-[1000px]">
            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="pb-2 font-normal mr-2">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="pb-2 text-left font-normal">Items</th>
                <th className="pb-2 text-left font-normal">Variants</th>
                <th className="pb-2 text-left font-normal">Quantity</th>
                <th className="pb-2 text-left font-normal">Price</th>
                <th className="pb-2 text-left font-normal">Amount</th>
                <th className="pb-2 text-left font-normal max-w-[170px] truncate ">Expected Delivery Date</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "14px" }}>
              {quoteData.items.map((item) => (
                <tr key={item.id} className="border-b last:border-b-0">
                  <td className="py-4 pl-7">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="py-4 max-w-[120px] truncate">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-[40px] h-[40px] rounded-lg" />
                      <div>
                        <p className="text-[#101928] text-[14px] ">{item.name}</p>
                        <p className="text-[14px] text-[#475367]">{item.code}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-[#344054]">{item.variant}</td>
                  <td className="py-4 text-[#344054]">{item.quantity}</td>
                  <td className="py-4 text-[#344054]">${item.price.toFixed(2)}</td>
                  <td className="py-4 text-[#344054]">${item.amount.toFixed(2)}</td>
                  <td className="py-4 text-[#344054]">{item.deliveryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-6 border-t pt-4">
          <div className="w-48 mr-[0px] lg:mr-[190px] ">
            <div className="flex justify-between text-sm mb-2 text-[#475367]">
              <span>Sub Total</span>
              <span>$8,000.00</span>
            </div>
            <div className="flex justify-between font-medium text-[#475367] ">
              <span>Total</span>
              <span className='text-[16px]'>$8,750.00</span>
            </div>
          </div>
        </div>
      </div>

      
      

     
    </div>
  );
};

export default RFQReview;