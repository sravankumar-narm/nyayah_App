import React, { useState } from 'react';
import nyayahImage from '../assets/Images/home/nyayah1.png';
import Sidebar from '../sidebar/Sidebar.jsx';
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
import personal_details from '../assets/Images/adduser/personal_details.png'
import advocate from '../assets/Images/adduser/advocate.png'
import current_address from '../assets/Images/adduser/current_add.png'
import permanent_address from '../assets/Images/adduser/permanent_add.png'
import CreatableSelect from 'react-select/creatable';


const AddUser = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (newValue) => {
    setSelectedOption(newValue);
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
       <div className={` fixed z-10  mt-[50px] `}>
        <Sidebar/>
      </div>
      <div className="h-16 flex-grow z-20 bg-gray shadow-md fixed ">
      
          <div className="top-bar w-screen">
          <img src={nyayahImage} alt="Logo" className="h-36 w-55" />
          </div>
        
          
</div>
<div className="flex z-0" >
<div className="flex" style={{ marginLeft: '200px', marginTop:"100px" }}>
        <select className="w-60 h-7 border border-gray-400 rounded-lg mr-4 text-xs">
            <option value="">User Type</option>
            {/* options */}
        </select>
        <input type="text" className="w-60 h-7 border border-gray-400 rounded-lg mr-4 pl-2 text-sm" placeholder="User ID (Auto generated)" />
        <input type="text" className="w-60 h-7 border border-gray-400 rounded-lg mr-4 pl-2 text-sm" placeholder="User Full Name (Auto generated)" />
        <input type="text" className="w-60 h-7 border border-gray-400 rounded-lg pl-2 text-sm" placeholder="Password (Auto generated)" />
    </div>
<div className="flex z-0 relative" style={{marginLeft:"-1170px"}}>
  <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg ml-40 mt-40 mr-4 p-4" style={{ width: "491px", height: "200px" }}>
    <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={personal_details} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Personal Details</span>
    </div>
    <div className="flex mt-2">
      <input type="text" className="w-1/2 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="First Name"  style={{ borderColor: '#D9D9D9' }}/>
      <input type="text" className="w-1/2 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Middle Name" style={{ borderColor: '#D9D9D9' }} />
      <input type="text" className="w-1/2 h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="Last Name"  style={{ borderColor: '#D9D9D9' }}/>
    </div>
    <div className="flex mt-4">
    <div className="flex items-center">
  <select
    className="h-7 border border-gray-400 rounded-l-lg text-xs"
    style={{ borderColor: '#D9D9D9', paddingRight: '5px' }}
  >
    <option value="+91">+91</option>
    {/* Add more country code options as needed */}
  </select>
  <input
    type="text"
    className="w-1/2 h-7 border border-gray-400 rounded-r-lg pl-2 mr-1 text-xs"
    placeholder="Mobile Number"
    style={{ borderColor: '#D9D9D9' }}
  />
</div>

      <input type="text" className="w-[250px] h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="Email ID" style={{ borderColor: '#D9D9D9' }} />
    </div>
    <div className="flex mt-4">
    <input
      type="date"
      className="w-32 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs"
      style={{ borderColor: '#D9D9D9' }}
      placeholder="DOB"
    />
      <input type="text" className="w-11/12 h-7 border-b border-gray-400 pl-2 text-xs" placeholder="00 Year(s) 00 Month(s) and 00 Day(s) Old" />
    </div>
    <div className="flex mt-4">
      <select className="w-1/3 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" style={{ borderColor: '#D9D9D9' }}>
        <option value="">Occupation</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select className="w-1/3 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" style={{ borderColor: '#D9D9D9' }}>
        <option value="">Marital Status</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
      </select>
      <select className="w-1/3 h-7 border border-gray-400 rounded-lg pl-2 text-xs" style={{ borderColor: '#D9D9D9' }}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>

  <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg p-4 mt-40 ml-4" style={{ width: "491px", height: "200px" }}>
  <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={advocate} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Advocate</span>
  </div>

  <div className="flex mt-2">
    <select className="w-40 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" style={{ borderColor: '#D9D9D9' }}>
      <option value="">Bar Council</option>
    </select>
    <input type="text" className="flex-grow h-7 border-b border-gray-400 pl-2 text-xs" placeholder="Reg ID" />
  </div>
  <div className="flex mt-4">
    <input type="text" className="flex-grow h-7 border-b border-gray-400 pl-2 text-xs" placeholder="Reg Date" />
    <input type="text" className="flex-grow h-7 border-b border-gray-400 pl-2 text-xs ml-2" placeholder="Place of Practice" />
  </div>
  <div className="flex mt-4">
    <input type="date" className="w-32 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" style={{ borderColor: '#D9D9D9' }}/>
    <input type="text" className="flex-grow h-7 border-b border-gray-400 pl-2 text-xs" placeholder="00 Year(s) 00 Month(s) and 00 Day(s) of Experience" />
  </div>
</div>
</div>
     <div className="flex mt-4" style={{marginTop:"400px", marginLeft:"-1015px"}}>
    <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg p-4 mr-8" style={{width:"491px", height:"200px"}}>
    <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={current_address} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Current Address</span>
    </div>
      {/* Content for the first additional box */}
      <div className=" flex mt-0">
  <input type="text" className="flex-grow h-7 border-b border-gray-400 pl-2 text-xs" placeholder="Address" style={{ borderColor: '#8D8D8D' }} />
</div>
<div className="flex mt-4">
<div className="flow-grow relative ml-[-10px]">
<CreatableSelect
          className="  pl-2 text-xs focus:outline-none"
          styles={{ control: (provided) => ({ ...provided, borderColor: '#D9D9D9' }) }}
          onChange={handleChange}
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]}
          placeholder="Select or type..."
          value={selectedOption}
        />
  
</div>

  <select className=" flex-grow h-7 border border-gray-400 rounded-lg pl-2 ml-2  text-xs" style={{ borderColor: '#D9D9D9', marginLeft:"20px" }}>
    <option value="">Location</option>
  </select>
</div>
<div className="flex mt-4">
  <input type="text" className="flex-grow  h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Mandal" style={{ borderColor: '#D9D9D9' }} />
  <input type="text" className="flex-grow h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="District" style={{ borderColor: '#D9D9D9' }} />
</div>
<div className="flex mt-4">
  <input type="text" className="flex-grow  h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="State" style={{ borderColor: '#D9D9D9' }} />
  <input type="text" className="flex-grow  h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="Country" style={{ borderColor: '#D9D9D9' }} />
</div>
 
    </div>
    <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg p-4"style={{width:"491px", height:"200px"}}>
    <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={permanent_address} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Permanent Address</span>
    </div>
      {/* Content for the second additional box */}
      <div className="flex mt-0">
  <input type="text" className="flex-grow h-7 border-b  border-gray-400 pl-2 text-xs" placeholder="Address" style={{ borderColor: '#8D8D8D' }} />
</div>
<div className="flex mt-4">
<div className="flow-grow relative ml-[-10px]">
<CreatableSelect
          className="  pl-2 text-xs focus:outline-none"
          styles={{ control: (provided) => ({ ...provided, borderColor: '#D9D9D9' }) }}
          onChange={handleChange}
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]}
          placeholder="Select or type..."
          value={selectedOption}
        />
  
</div>

  <select className=" flex-grow h-7 border border-gray-400 rounded-lg pl-2 ml-2  text-xs" style={{ borderColor: '#D9D9D9', marginLeft:"20px" }}>
    <option value="">Location</option>
  </select>
</div>
<div className="flex mt-4">
  <input type="text" className="flex-grow  h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Mandal" style={{ borderColor: '#D9D9D9', color:"#C6C6C6" }} />
  <input type="text" className="flex-grow h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="District" style={{ borderColor: '#D9D9D9' }} />
</div>
<div className="flex mt-4">
  <input type="text" className="flex-grow  h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="State" style={{ borderColor: '#D9D9D9' }}/>
  <input type="text" className="flex-grow  h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="Country" style={{ borderColor: '#D9D9D9' }} />
</div>
    </div>
    <div className="flex mt-4 ml-40 " style={{marginTop:"250px", marginLeft:"-1010px"}}>
 
  <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
  <img src={icon1} alt="Logo"  />
  </div>

  {/* Dropdown */}
  <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
    <option value="">Document Type</option>

    
  </select>

  
  <input type="text" className="w-96 h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />

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
  <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
    <option value="">Document Type</option>

    
  </select>

  
  <input type="text" className="w-96 h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />

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
  <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
    <option value="">Document Type</option>

    
  </select>

  
  <input type="text" className="w-96 h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />

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
 <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
    <option value="">Document Type</option>

    
  </select>

  
  <input type="text" className="w-96 h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />

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
<div className="flex justify-center mt-4">
  <button className="w-[120px] h-[30px] bg-black rounded-full mt-[450px] ml-[-20px] flex items-center justify-center text-white font-bold py-2 px-4">
    Create
  </button>
</div>

     </div>
     
     </div>
     
     </div>
   
  

 
     
      
    
  );
};

export default AddUser;
