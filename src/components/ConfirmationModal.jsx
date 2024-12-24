import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, rfqId, clientName, }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 "
   
    >
      <div className="bg-white z-50 border-[1px] w-full max-w-[568px] text-[#FFFFFF] p-8 "
       style={{borderRadius: "8px"} }
      >
        <h2 className="text-[20px] text-[#101928] mb-4">
          Confirmation
        </h2>
        
        <p className="text-[#475367] text-[13px] font-[500px] leading-relaxed mb-8 ">
          You are about to submit this quote in response to RFQ {rfqId}, this will immediately be sent to the client "{clientName}". Are you sure you want to proceed?
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="p-[8px] rounded-lg text-gray-700 w-[86px] hover:bg-gray-50 font-medium border-[1px] "
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="p-[8px] bg-[#175CFF] text-white rounded-lg hover:bg-blue-700 font-medium w-[92px] h-[36px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;