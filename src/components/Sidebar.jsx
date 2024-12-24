import React, { useState } from 'react';
import {
  HelpCircle,
  LogOut,
  LayoutPanelTop,
  ShoppingCart,
  CalendarMinus2,
  Package,
  FileText,
  ChevronDown,
  Banknote,
  MessagesSquare,
  Settings
} from 'lucide-react';
import Group from '../assets/Group.png';
import user from '../assets/user.png';

const Sidebar = ({ isOpen }) => {
  const [isProcurementOpen, setIsProcurementOpen] = useState(false); 

  const navItems = [
    { icon: LayoutPanelTop, label: 'Dashboard', isActive: false },
    { icon: Package, label: 'Inventory', isActive: false },
    {
      icon: ShoppingCart,
      label: 'Procurement',
      isActive: true,
      isToggled: true, 
    },
    { icon: Banknote, label: 'Finance', isActive: false, isChevronDown: true },
    { icon: MessagesSquare, label: 'Communication', isActive: false, badge: 10 },
    { icon: CalendarMinus2, label: 'Calendar', isActive: false, badge: 10 },
    { icon: FileText, label: 'Contacts', isActive: false },
  ];

  const bottomNavItems = [
    { icon: HelpCircle, label: 'Support' },
    { icon: Settings, label: 'Settings' },
  ];

  // Toggle the Procurement section
  const toggleProcurement = () => {
    setIsProcurementOpen(!isProcurementOpen);
  };

  return (
    <div
      className={`bg-white fixed lg:relative transition-all duration-300 shadow-lg lg:shadow-none 
        ${isOpen ? 'w-[300px]' : 'w-16'} flex flex-col border-r z-50`}
        style={{
            minHeight: window.innerWidth <= 640 ? '1000px' : '100%',
             overflowX: 'hidden',
          }}
    >
      <div className="flex-1 py-4">
        <div className="flex items-center justify-between px-4 mb-10">
          <img src={Group} alt="logo" className="w-[82px] mr-3 h-[24px]" />
          {isOpen && (
            <span className="text-md h-[24px] max-w-[170px] mb-2" style={{ color: '#141460' }}>
              Medical Advanced Platform
            </span>
          )}
        </div>
        <nav className="space-y-1 px-2">
          {navItems.map((item, index) => {
            // If the item is "Procurement", make it toggleable
            if (item.isToggled) {
              return (
                <div key={index}>
                  <a
                    href="#"
                    onClick={toggleProcurement}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-150 ${
                      item.isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon size={20} className={item.isActive ? 'text-blue-600' : 'text-gray-500'} />
                    {isOpen && (
                      <span className={`ml-3 ${item.isActive ? 'font-medium' : ''}`}>{item.label}</span>
                    )}
                    { isOpen && <ChevronDown
                      size={20}
                      className={`ml-auto transition-transform ${isProcurementOpen ? 'rotate-180' : ''}`}
                    /> }
                  </a>
                  {/* Conditionally render Quotes and Orders */}
                  {isProcurementOpen && (
                    <div className="">
                      {isOpen && <a
                        href="#"
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-150 bg-blue-50 text-blue-600 my-2`}
                      >
                         <span className="ml-3 pl-6 bg-blue-50 text-blue-600">Quotes</span>
                      </a> }
                      {isOpen && <a
                        href="#"
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-150 text-gray-600 hover:bg-gray-100`}
                      >
                         <span className="ml-3 pl-6">Orders</span>
                      </a> }
                    </div>
                  )}
                </div>
              );
            }

            // If the item is "Finance", show the ChevronDown icon 
            if (item.isChevronDown) {
              return (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-150 ${
                    item.isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} className={item.isActive ? 'text-blue-600' : 'text-gray-500'} />
                  {isOpen && (
                    <span className={`ml-3 ${item.isActive ? 'font-medium' : ''}`}>{item.label}</span>
                  )}
                  {isOpen && (<ChevronDown size={20} className="ml-auto" />)}
                </a>
              );
            }

            // For Communication and Calendar, show badge
            if (item.badge) {
              return (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-150 ${
                    item.isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} className={item.isActive ? 'text-blue-600' : 'text-gray-500'} />
                  {isOpen && (
                    <span className={`ml-3 ${item.isActive ? 'font-medium' : ''}`}>{item.label}</span>
                  )}
                  {isOpen && (<div className="ml-auto w-10 bg-blue-600 text-white rounded-full py-1 flex items-center justify-center text-xs">
                    {item.badge}
                  </div>)}
                </a>
              );
            }

            // Regular nav items (not toggleable or with badges)
            return (
              <a
                key={index}
                href="#"
                className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-150 ${
                  item.isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} className={item.isActive ? 'text-blue-600' : 'text-gray-500'} />
                {isOpen && (
                  <span className={`ml-3 ${item.isActive ? 'font-medium' : ''}`}>{item.label}</span>
                )}
              </a>
            );
          })}
        </nav>
      </div>
      <div className=" py-2 px-2">
        <nav className="space-y-1">
          {bottomNavItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-150"
            >
              <item.icon size={20} className="text-gray-500" />
              {isOpen && <span className="ml-3">{item.label}</span>}
            </a>
          ))}
        </nav>
        <div className='py-2 px-2 flex items-center justify-between'>
         {isOpen &&  <div className='flex items-center justify-between'>
              <div className='mr-3'>
                <img src={user} alt="user photo" />
              </div>
              <div className='flex flex-col items-start'>
                <span>Mark Benson</span>
                <span className='truncate max-w-[130px]'>markbenson@core</span>
              </div>
          </div>}
          <LogOut size={20} className='text-gray-500' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
