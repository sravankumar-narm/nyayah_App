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
import facts from '../assets/Images/createcase/facts.png';
import versus from '../assets/Images/createcase/versus.png';
import newimg from '../assets/Images/createcase/new.png';
import voice from '../assets/Images/createcase/voice.png';
import doc from '../assets/Images/createcase/doc.png';

const CreateCase = () => {
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
      <div className={` fixed z-10  mt-[50px] `}>
        <Sidebar/>
      </div>
      <div className="h-16 flex-grow z-20 bg-gray shadow-md fixed ">
      
          <div className="top-bar w-screen">
          <img src={nyayahImage} alt="Logo" className="h-36 w-55" />
          </div>
        
          
</div>
<div className="flex z-0" >
<div className="p-4 rounded-lg" style={{ marginLeft: "150px", marginTop: "100px" }}>
  <input 
    type="text" 
    className="border border-gray-400 rounded-lg pl-2 mr-2 text-xs" 
    placeholder="Case Title" 
    style={{ width: "970px", height: "45px", outline: "none", cursor: "text" }}
  />


    <div className="flex mt-2 items-center">
      <select className="w-[420px] h-10 border border-gray-400 rounded-md pl-2 mr-1 text-xs">
        <option value="">Plaintiff</option>
        {/* Add options here */}
      </select>
      <img src={versus} className="h-6 w-6 mx-1 ml-[20px] mr-[25px]" alt="Icon" />
      <div className="flex items-center">
    <select className="w-[420px] h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Defendant</option>
      {/* Add options here */}
    </select>
    <img src={newimg} className="h-8 w-7 ml-[25px]" alt="Second Icon" />
  </div>
</div>
</div>



 
   
<div className="flex mt-4" style={{ marginTop: "250px", marginLeft: "-995px" }}>
  <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg p-4 mr-8" style={{ width: "650px", height: "233px" }}>
  <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[83px] p-2 flex items-center justify-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize:"12px" }}>
  <img src={facts} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
  
      Facts
    </div>
    <div className=" ml-[570px] mt-[180px] flex">
        <img src={voice} className="h-5 w-4" alt="icon1" />
        <img src={doc} className="h-5 w-4 ml-2" alt="icon2" />
      </div>
    {/* Content for the first additional box */}
  </div>
  <div className="flex flex-col" style={{ marginLeft: "0px" }}>
  <div className="flex items-center mb-4">
    <select className="w-64 h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Case Type</option>
      {/* Add options here */}
    </select>
    <img src={newimg} className="h-6 w-5 ml-2" alt="Icon 1" />
  </div>
  <div className="flex items-center mb-4">
    <select className="w-64 h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Court</option>
      {/* Add options here */}
    </select>
    <img src={newimg} className="h-6 w-5 ml-2" alt="Icon 2" />
  </div>
  <div className="flex items-center mb-4">
    <select className="w-64 h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Priority</option>
      {/* Add options here */}
    </select>
    <img src={newimg} className="h-6 w-5 ml-2" alt="Icon 3" />
  </div>
  <div className="flex items-center">
    <select className="w-64 h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Priority</option>
      {/* Add options here */}
    </select>
    <img src={newimg} className="h-6 w-5 ml-2" alt="Icon 4" />
  </div>
</div>


    
    <div className="flex mt-4 ml-40 " style={{marginTop:"250px", marginLeft:"-1270px"}}>
 
  <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6" style={{marginLeft:"310px"}}>
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
  <button className="w-[120px] h-[30px] bg-black rounded-full mt-[450px] ml-[-70px] flex items-center justify-center text-white font-bold py-2 px-4">
    Create
  </button>
</div>



     </div>
    

  </div>
     </div>
     
    
   
  

 
     
      
    
  );
};

export default CreateCase;
