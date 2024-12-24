import React, { useState } from "react";
import { ChevronDown, Calendar, X, Trash2 } from "lucide-react";
import RFQForm from "./RFQForm";
import RFQReview from "./RFQReview";
import ConfirmationModal from "./ConfirmationModal";
import LoadingOverlay from "./LoadingOverlay";
import SuccessNotification from "./SuccessNotification";

const QuoteResponseForm = ({ isOpen, onClose, quoteData }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    rfqNo: quoteData?.rfqNo || "",
    title: quoteData?.title || "",
    department: quoteData?.department || "",
    expectedDeliveryDate: quoteData?.expectedDelivery || "",
    items: quoteData?.items || [],
    note: "",
  });
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  if (!isOpen) return null;

  const steps = [
    {
      number: 1,
      title: "Request Information",
      description: "Provide details about the RFQ",
    },
    {
      number: 2,
      title: "Terms and Attachments",
      description: "Payment and delivery terms",
    },
    {
      number: 3,
      title: "Review",
      description: "Confirm all information provided",
    },
  ];

  const handleContinue = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleConfirm = () => {
    setIsConfirmModalOpen(true);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsConfirmModalOpen(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error submitting the quote:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccessVisible(true);
      }, 3000);
    }
  };

  return (
    <div className=" flex items-center justify-center mb-6 ml-[50px] lg:ml-[0px]">
      <div className="w-full">
        {/* Header */}
        <div className="border-b p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-[#175cff]">Quotes</span>
            <span>/</span>
            <span>Quote Response</span>
          </div>
        </div>

        {/* Steps */}
        <div className="border-[2px] mb-5 p-4" style={{ borderRadius: "10px" }}>
          <div className=" py-6">
            <div className="flex justify-between flex-wrap">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeStep === step.number
                        ? "bg-blue-500 text-white"
                        : activeStep > step.number
                        ? "bg-[#0F973D] text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-sm text-gray-500">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div
          className=" py-6 border-[2px] mb-5 p-4"
          style={{ borderRadius: "10px" }}
        >
          {activeStep === 1 && (
            <>
              <h2 className="text-[24px] font-semibold mb-1 text-[#1a1a21]">
                Request for Quote
              </h2>
              <p className="text-gray-600 mb-8 text-[16px] text-[#98a2b3]">
                Fill out these details to send the RFQ
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#475367] text-[14px] mb-1">
                      RFQ No
                    </label>
                    <input
                      type="text"
                      value={formData.rfqNo}
                      readOnly
                      className="w-full p-2 border-[2px] rounded-lg text-[12px] bg-gray-50"
                      style={{ borderRadius: "6px" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[#475367] text-[14px] mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      readOnly
                      className="w-full p-2 border border-[2px] text-[12px] bg-gray-50"
                      style={{ borderRadius: "6px" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#475367] text-[14px] mb-1">
                      Department
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.department}
                        readOnly
                        className="w-full p-2 border border-[2px] text-[12px] bg-gray-50 pr-10"
                        style={{ borderRadius: "6px" }}
                      />
                      <X className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <label className="block  text-[#475367] text-[14px] mb-1">
                      Expected delivery date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value={formData.expectedDeliveryDate}
                        className="w-full p-2 border border-[2px] text-[12px] pr-10"
                        style={{ borderRadius: "6px" }}
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Calculated based on lead time and issue date
                    </p>
                  </div>
                </div>

                {/* Items Table */}
                <div>
                  <h3 className="text-lg mb-4 text-[#1D2739] text-[16px] ">
                    Add Items
                  </h3>
                  <div className="border rounded-lg overflow-x-auto">
                    <table className="table-auto w-full min-w-[1000px]">
                      <thead className="bg-gray-50 text-sm text-gray-600">
                        <tr>
                          <th className="p-4 text-left font-normal">Items</th>
                          <th className="p-4 text-left font-normal">Variant</th>
                          <th className="p-4 text-left font-normal">
                            Quantity
                          </th>
                          <th className="p-4 text-left font-normal">Price</th>
                          <th className="p-4 text-left font-normal">
                            Expected delivery date
                          </th>
                          <th className="p-4 text-left font-normal">Amount</th>
                          <th className="p-4 text-left font-normal"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.items.map((item, index) => (
                          <tr key={item.id} className="border-t">
                            <td className="p-4">
                              <div className="relative">
                                <input
                                  type="text"
                                  value={item.name}
                                  className="w-full p-2 border rounded-lg pr-10"
                                />
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="relative">
                                <input
                                  type="text"
                                  value={item.variant}
                                  readOnly
                                  className="w-full p-2 border rounded-lg pr-10 text-[12px] text-[#98A2B3]"
                                />
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                              </div>
                            </td>
                            <td className="p-4">
                              <input
                                type="text"
                                readOnly
                                value={item.quantity}
                                className="w-full p-2 border rounded-lg text-[12px] text-[#98A2B3]"
                              />
                            </td>
                            <td className="p-4">
                              <input
                                type="text"
                                readOnly
                                value={item.price}
                                className="w-full p-2 border rounded-lg text-[12px] text-[#98A2B3]"
                              />
                            </td>
                            <td className="p-4">
                              <div className="relative">
                                <input
                                  type="text"
                                  readOnly
                                  value={item.delivery}
                                  className="w-full p-2 border rounded-lg pr-10 text-[12px] text-[#98A2B3]"
                                />
                                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                              </div>
                            </td>
                            <td className="p-4">
                              <input
                                type="text"
                                value={item.amount}
                                className="w-full p-2 border rounded-lg"
                                readOnly
                              />
                            </td>
                            <td className="p-4">
                              <button className="text-gray-400 hover:text-gray-600">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
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
                    <div className="w-1/6" style={{ marginRight: "30px" }}>
                      $8,000.00
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="max-w-[472px]">
                  <label className="block text-[#475367] text-[14px] mb-1">
                    Note
                  </label>
                  <textarea
                    value={formData.note}
                    onChange={(e) =>
                      setFormData({ ...formData, note: e.target.value })
                    }
                    className="w-full p-3 border rounded-lg h-24 resize-none max-w-[472px] max-h-[175px] border-[2px]"
                    placeholder="Enter note here"
                    style={{ borderRadius: "6px" }}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    0/200
                  </div>
                </div>
              </div>
            </>
          )}
          {activeStep === 2 && <RFQForm />}

          {activeStep === 3 && <RFQReview quoteData={quoteData} />}

          {/* loading overlay */}
          <LoadingOverlay isLoading={isLoading} />
        </div>

        <ConfirmationModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={handleSubmit}
          rfqId="ID"
          clientName="Westend Clear Hospital"
        />
        <SuccessNotification
          isVisible={isSuccessVisible}
          onClose={() => setIsSuccessVisible(false)}
        />

        {/* Footer */}
        <div className="border-t p-4 flex justify-end gap-5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#475367] bg-white  rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-[#175CFF] text-[14px] border-[2px] rounded-lg mr-2 w-[180px]"
            style={{ borderRadius: "8px" }}
          >
            Save as draft
          </button>
          {activeStep < steps.length && (
            <button
              className="p-[10px] py-2 bg-blue-500 text-white border-[2px]  border-[1.5px] w-[180px]"
              style={{ borderRadius: "8px" }}
              onClick={handleContinue}
            >
              Continue
            </button>
          )}
          {activeStep === steps.length && (
            <button
              className="p-[10px] py-1 bg-[#175CFF] text-white  border-[1.5px] w-[180px]"
              style={{ borderRadius: "8px" }}
              onClick={handleConfirm}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteResponseForm;
