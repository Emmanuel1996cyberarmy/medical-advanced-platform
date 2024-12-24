import React, { useState } from 'react';
import { ChevronDown, CloudUpload } from 'lucide-react';

const RFQForm = () => {
  const [selectedPayment, setSelectedPayment] = useState('Net 30');
  const [selectedDelivery, setSelectedDelivery] = useState('Immediate delivery');
  const [selectedShipping, setSelectedShipping] = useState('Courier Services');
  const [selectedLeadTime, setSelectedLeadTime] = useState('10');
  
  return (
    <div className="w-full ">
     
      
      <div className=" w-full rounded-lg ">
        <h2 className="text-[#1A1A21] text-[24px]  mb-1">Terms and Attachments</h2>
        <p className="text-[#98A2B3] text-[16px] mb-8">Provide detailed information on payment and delivery terms</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-[#475367] text-[14px] mb-2">Payment Terms</label>
            <div className="relative">
              <select 
                value={selectedPayment}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="w-full p-2 border border-[2px]  text-[#101928] text-[13px] appearance-none bg-white pr-10"
                style={{borderRadius: '6px'}}

              >
                <option>Net 30</option>
                <option>Net 60</option>
                <option>Net 90</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-[#475367] pointer-events-none" size={20} />
            </div>
          </div>

          {/* Delivery Schedule */}
          <div>
            <label className="block text-[#475367] text-[14px] mb-2">Delivery Schedule</label>
            <div className="relative">
              <select 
                value={selectedDelivery}
                onChange={(e) => setSelectedDelivery(e.target.value)}
                className="w-full p-2 border-[2px]  text-[13px] appearance-none bg-white pr-10"
                style={{borderRadius: '6px'}}
              >
                <option>Immediate delivery</option>
                <option>Scheduled delivery</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Shipping Method */}
          <div>
            <label className="block text-[#475367] text-[14px] mb-2">Shipping Method</label>
            <div className="relative">
              <select 
                value={selectedShipping}
                onChange={(e) => setSelectedShipping(e.target.value)}
                className="w-full p-2 border-[2px]  text-[13px] appearance-none bg-white pr-10"
                style={{borderRadius: '6px'}}
              >
                <option>Courier Services</option>
                <option>Freight</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Lead Time */}
          <div>
            <label className="block text-[#475367] text-[14px] mb-2">Lead time</label>
            <div className="relative">
              <select 
                value={selectedLeadTime}
                onChange={(e) => setSelectedLeadTime(e.target.value)}
                className="w-full p-2 border-[2px]  text-[13px] appearance-none bg-white pr-10"
                style={{borderRadius: '6px'}}
              >
                <option value="10">10 Days</option>
                <option value="20">20 Days</option>
                <option value="30">30 Days</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        {/* Attachments Section */}
        <div className="mt-8">
          <h3 className="text-[#1D2739 text-[16px] mb-2">Attachments</h3>
          <p className="text-[14px] text-[#98A2B3] mb-4">Attach all necessary files or documents</p>
          
          <div className="border-2 border-[2px]  rounded-lg p-8 w-[515px]">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-50 p-3 rounded-full mb-4">
                <CloudUpload className="h-[28px] w-[28px] text-gray-400" />
              </div>
              <div className="space-y-1 mb-3">
                <p className="text-[#475367] text-[14px] hover:underline"> <span className="text-blue-600 hover:underline"> Click to upload </span> or drag and drop </p> 
                <p className="text-[12px] text-[#98A2B3]  ">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
              <div className=" text-[12px] text-[#98A2B3] my-2 ">OR</div>
              <button className="px-4 py-2 border-[2px] text-[#175CFF] text-[13px] hover:bg-gray-50 w-[113px]" 
              style={{borderRadius: '8px'}}
              >
                Browse Files
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default RFQForm;