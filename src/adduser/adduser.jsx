import React, { useState } from 'react';
import nyayahImage from '../assets/Images/home/nyayah1.png';
import icon1 from '../assets/Images/home/icon1.png';
import icon2 from '../assets/Images/home/icon2.png';
import icon3 from '../assets/Images/home/icon3.png';
import icon4 from '../assets/Images/home/icon4.png';
import link from '../assets/Images/home/Link.png';
import upload from '../assets/Images/home/Upload.png';
import down from '../assets/Images/home/Down.png';
import share from '../assets/Images/home/Share.png';
import delete1 from '../assets/Images/home/Delete.png';
import edit from '../assets/Images/home/edit.png';

const AddUser = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen -mt-8 -ml-16">
        <style>{`
        body {
          background-color: #F5F5F5;
          margin: 0;
          font-family:Open Sans;
          padding: 0;
        }
        .top-bar {
            height: 64px;
            width:screen;
            background-color: #F5F5F5; 
            z-index: 10; 
            position: sticky; 
            top: 0; 
          }
      `}</style>
      <div className={`bg-black w-16 h-full transition-all fixed z-10 ${isExpanded ? 'w-64' : 'w-16'} mt-16`}>
        Sidebar
      </div>
      <div className="h-16 flex-grow z-20 bg-gray shadow-md fixed ">
      
          <div className="top-bar w-screen">
          <img src={nyayahImage} alt="Logo" className="h-36 w-55" />
          </div>
        
          <div className="flex-grow z-0 p-4 overflow-y-auto">
    <div className="flex" style={{ marginLeft: '120px' }}>
        <select className="w-60 h-8 border border-gray-400 rounded-md mr-4 text-sm">
            <option value="">User Type</option>
            {/* options */}
        </select>
        <input type="text" className="w-52 h-8 border border-gray-400 rounded-md mr-4 pl-2 text-sm" placeholder="User ID (Auto generated)" />
        <input type="text" className="w-60 h-8 border border-gray-400 rounded-md mr-4 pl-2 text-sm" placeholder="User Full Name (Auto generated)" />
        <input type="text" className="w-52 h-8 border border-gray-400 rounded-md pl-2 text-sm" placeholder="Password (Auto generated)" />
    </div>
</div>
</div>
      <div className="flex z-0">
      <div className="flex mt-2">
      <div className="w-160 h-48 bg-white border border-gray-400 rounded-md ml-40 mt-60 mr-4 p-4">
    <div className="flex">
    <input type="text" className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="First Name" />
      <input type="text" className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="Middle Name" />
      <input type="text" className="w-32 h-8 border border-gray-400 rounded-md pl-2 text-sm" placeholder="Last Name" />
    </div>
    <div className="flex mt-2">
      <input type="text" className="w-45 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="Mobile Number" />
      <input type="text" className="w-55 h-8 border border-gray-400 rounded-md pl-2 text-sm" placeholder="Email ID" />
    </div>
    <div className="flex mt-2">
    <input type="date" className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" />
  <input type="text" className="w-250 h-6 border-b border-gray-400 pl-2 text-sm" placeholder="00 Year(s) 00 Month(s) and 00 Day(s) of Age" />
</div>

    <div className="flex mt-2">
      <select className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
        <option value="">Occupation</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
        <option value="">Marital Status</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
      </select>
      <select className="w-32 h-8 border border-gray-400 rounded-md pl-2 text-sm">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>
  <div className="w-160 h-48 bg-white border border-gray-400 rounded-md p-4 mt-60 ml-4">
      <div className="flex">
      <select className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
          <option value="">Bar Council</option>
          
        </select>
        <input type="text" className="w-220 h-6 border-b border-gray-400 pl-2 text-sm" placeholder="Line Input" />
        
      </div>
      <div className="flex mt-2">
      <input type="text" className="w-220 h-6 border-b border-gray-400 pl-2 text-sm" placeholder="Reg Date" />
      <input type="text" className="w-220 h-6 border-b border-gray-400 pl-2 text-sm ml-2" placeholder="Place of Practice" />
      </div>
      <div className="flex mt-2">
        <input type="date" className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" />
        <input type="text" className="w-220 h-6 border-b border-gray-400 pl-2 text-sm" placeholder="Line Input" />
      </div>
     </div>
     </div>
     <div className="flex mt-4" style={{marginTop:"500px", marginLeft:"-850px"}}>
    <div className="w-160 h-48 bg-white border border-gray-400 rounded-md p-4 mr-4">
      {/* Content for the first additional box */}
      <div className="flex">
    <input type="text" className="w-220 h-6 border-b border-gray-400 pl-2 text-sm" placeholder="Address" />
    </div>
    <div className="flex mt-2">
      <input type="text" className="w-45 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="Pin Code" />
      <select className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
          <option value="">Location</option>
          
        </select>
    </div>
    <div className="flex mt-2">
    <input type="text" className="w-45 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="Mandal" />
      <input type="text" className="w-55 h-8 border border-gray-400 rounded-md pl-2 text-sm" placeholder="District" />
</div>
<div className="flex mt-2">
    <input type="text" className="w-45 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="State" />
      <input type="text" className="w-55 h-8 border border-gray-400 rounded-md pl-2 text-sm" placeholder="Country" />
    </div>
      
    </div>
    <div className="w-160 h-48 bg-white border border-gray-400 rounded-md p-4">
      {/* Content for the second additional box */}
      <div className="flex">
      <input type="text" className="w-300 h-6 border-b border-gray-400 pl-2 text-sm" placeholder="Address" />
    </div>
    <div className="flex mt-2">
      <input type="text" className="w-45 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="Pin Code" />
      <select className="w-32 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
          <option value="">Location</option>
          
        </select>
        </div>
    <div className="flex mt-2">
    <input type="text" className="w-45 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="Mandal" />
      <input type="text" className="w-55 h-8 border border-gray-400 rounded-md pl-2 text-sm" placeholder="District" />
</div>
<div className="flex mt-2">
    <input type="text" className="w-45 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm" placeholder="State" />
      <input type="text" className="w-55 h-8 border border-gray-400 rounded-md pl-2 text-sm" placeholder="Country" />
    
    </div>
    </div>
    <div className="flex mt-4 ml-40 " style={{marginTop:"250px", marginLeft:"-800px"}}>
 
  <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
  <img src={icon1} alt="Logo"  />
  </div>

  {/* Dropdown */}
  <select className="w-64 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
    <option value="">Document Type</option>

    
  </select>

  
  <input type="text" className="w-96 h-8 border border-gray-400 rounded-md mr-2 pl-2 text-sm" placeholder="Document Name" />

  {/* Six icons */}
  <div className="flex mt-2">
 
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={link} alt="Logo"  />
    </div>
    <div className="w-3 h-3flex items-center justify-center mr-6">
    <img src={upload} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={down} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={share} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={delete1} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={edit} alt="Logo"  />
    </div>
  </div>
</div>

<div className="flex mt-4 ml-40 " style={{marginTop:"300px", marginLeft:"-912px"}}>
 
  <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
  <img src={icon2} alt="Logo"  />
  </div>

  {/* Dropdown */}
  <select className="w-64 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
    <option value="">Document Type</option>

    
  </select>

  
  <input type="text" className="w-96 h-8 border border-gray-400 rounded-md mr-2 pl-2 text-sm" placeholder="Document Name" />

  {/* Six icons */}
  <div className="flex mt-2">
 
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={link} alt="Logo"  />
    </div>
    <div className="w-3 h-3flex items-center justify-center mr-6">
    <img src={upload} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={down} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={share} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={delete1} alt="Logo"  />
    </div>
  </div>
</div>

<div className="flex mt-4 ml-40 " style={{marginTop:"350px", marginLeft:"-877px"}}>
 
  <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
  <img src={icon3} alt="Logo"  />
  </div>

  {/* Dropdown */}
  <select className="w-64 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
    <option value="">Document Type</option>

    
  </select>

  
  <input type="text" className="w-96 h-8 border border-gray-400 rounded-md mr-2 pl-2 text-sm" placeholder="Document Name" />

  {/* Six icons */}
  <div className="flex mt-2">
 
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={link} alt="Logo"  />
    </div>
    <div className="w-3 h-3flex items-center justify-center mr-6">
    <img src={upload} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={down} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={share} alt="Logo"  />
    </div>
    <div className="w-3 h-3 flex items-center justify-center mr-6">
    <img src={delete1} alt="Logo"  />
    </div>
  </div>
</div>
<div className="flex mt-4 ml-40 " style={{marginTop:"400px", marginLeft:"-877px"}}>
 
 <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
 <img src={icon4} alt="Logo"  />
 </div>

 {/* Dropdown */}
 <select className="w-64 h-8 border border-gray-400 rounded-md pl-2 mr-2 text-sm">
   <option value="">Document Type</option>

   
 </select>

 
 <input type="text" className="w-96 h-8 border border-gray-400 rounded-md mr-2 pl-2 text-sm" placeholder="Document Name" />

 {/* Six icons */}
 <div className="flex mt-2">

   <div className="w-3 h-3 flex items-center justify-center mr-6">
   <img src={link} alt="Logo"  />
   </div>
   <div className="w-3 h-3flex items-center justify-center mr-6">
   <img src={upload} alt="Logo"  />
   </div>
   <div className="w-3 h-3 flex items-center justify-center mr-6">
   <img src={down} alt="Logo"  />
   </div>
   <div className="w-3 h-3 flex items-center justify-center mr-6">
   <img src={share} alt="Logo"  />
   </div>
   <div className="w-3 h-3 flex items-center justify-center mr-6">
   <img src={delete1} alt="Logo"  />
   </div>
   <div className="w-3 h-3 flex items-center justify-center mr-6">
   <img src={edit} alt="Logo"  />
   </div>
 </div>
</div>


     </div>
     
     </div>
     
     </div>
   
  

 
     
      
    
  );
};

export default AddUser;
