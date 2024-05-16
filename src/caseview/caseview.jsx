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
import versus from '../assets/Images/createcase/versus.png';
import permanent_address from '../assets/Images/adduser/permanent_add.png'
import party_details from '../assets/Images/docverify/party_details.png'
import property_details from '../assets/Images/docverify/property_details.png'
import survey_details from '../assets/Images/docverify/survey_details.png'
import total_area from '../assets/Images/docverify/total_area.png'
import newimg from '../assets/Images/createcase/new.png';
import lineImage from '../assets/Images/casedoc/lineimage.png';
import lineImage2 from '../assets/Images/casedoc/lineimage2.png';
import facts from '../assets/Images/createcase/facts.png';
import Icon1st from '../assets/Images/casedoc/1stIcon.png';
import Icon2nd from '../assets/Images/casedoc/2ndIcon.png';
import Icon3rd from '../assets/Images/casedoc/3rdIcon.png';
import ellipse from '../assets/Images/casedoc/ellipse.png';
import graybox from '../assets/Images/casedoc/graybox.png';
import graybox2 from '../assets/Images/casedoc/graybox2.png';
import delIcon from '../assets/Images/casedoc/delIcon.png';
import editIcon from '../assets/Images/casedoc/editIcon.png';
import shareIcon from '../assets/Images/casedoc/shareIcon.png';
import voice from '../assets/Images/createcase/voice.png';
import doc from '../assets/Images/createcase/doc.png';
import CreatableSelect from 'react-select/creatable';


const  CaseView = () => {
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
<div className="flex" style={{ marginLeft: '100px', marginTop:"100px" }}>
<input type="text" className="w-[400px] h-[30px] border border-gray-400 rounded-lg  pl-2 text-sm" placeholder="Case ID" />

        
<button className="w-[76px] h-[30px]  rounded-md ml-4" style={{backgroundColor:"#D9D9D9",  fontSize:"12px"}}>Print</button>
       
<button className="w-[76px] h-[30px] flex items-center justify-center rounded-md ml-2" style={{ backgroundColor: "#D9D9D9", paddingLeft: "0px", fontSize:"12px", fontWeight:"600px" }}>
    <img src={delIcon} alt="Delete Icon" className="mr-2" style={{ height: "13px", width: "11px" }} />
    Delete
</button>

<button className="w-[76px] h-[30px] flex items-center justify-center rounded-md ml-2" style={{ backgroundColor: "#D9D9D9", fontSize:"12px",  paddingLeft: "0px" }}>
    <img src={editIcon} alt="Delete Icon" className="mr-2" style={{ height: "14px", width: "12px" }} />
    Edit
</button>
<button className="w-[76px] h-[30px] flex items-center justify-center rounded-md ml-2" style={{ backgroundColor: "#D9D9D9", fontSize:"12px",  paddingLeft: "0px" }}>
    <img src={shareIcon} alt="Delete Icon" className="mr-2" style={{ height: "14px", width: "12px" }} />
    Share
</button>

    </div>
    <div className="flex z-0" >
<div className="flex" style={{ marginLeft: '-745px', marginTop:"140px" }}>
<input type="text" className="w-[745px] h-[30px] border border-gray-400 rounded-lg  pl-2 text-sm" placeholder="Case Title" />
       
            
        
    </div>
    </div>
    
</div>



 
   
<div className="flex mt-4" style={{ marginTop: "200px", marginLeft: "-1100px" }}>
<div className="flex mt-4 items-center" style={{marginTop:"-400px", marginLeft:"355px"}} >
      <select className="w-[340px] h-10 border border-gray-400 rounded-md pl-2 mr-1 text-xs">
        <option value="">Plaintiff</option>
        {/* Add options here */}
      </select>
      <img src={versus} className="h-6 w-6 mx-1 ml-[20px] mr-[25px]" alt="Icon" />
      <div className="flex items-center">
    <select className="w-[335px] h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Defendant</option>
      {/* Add options here */}
    </select>
    
  </div>
  </div>
  <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg p-4 mr-8" style={{ width: "465px", height: "233px", marginLeft:"-750px" , marginTop:"60px"}}>
  <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[83px] p-2 flex items-center justify-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize:"12px" }}>
  <img src={facts} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
  
      Facts
    </div>
    <div className=" ml-[570px] mt-[180px] flex">
        <img src={voice} className="h-5 w-4" alt="icon1" />
        <img src={doc} className="h-5 w-4 ml-2" alt="icon2" />
      </div>
    {/*  first additional box */}
  </div>
  <div className="flex flex-col" style={{ marginLeft: "0px" , marginTop:"60px" }}>
  <div className="flex items-center mb-4">
    <select className="w-64 h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Case Type</option>
      {/* options */}
    </select>
  
  </div>
  <div className="flex items-center mb-4">
    <select className="w-64 h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Court</option>
      {/*options  */}
    </select>
   
  </div>
  <div className="flex items-center mb-4">
    <select className="w-64 h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Priority</option>
      {/* options */}
    </select>
    
  </div>
  <div className="flex items-center">
    <select className="w-64 h-10 border border-gray-400 rounded-md pl-2 text-xs">
      <option value="">Case Stage</option>
      {/*options*/}
    </select>
    
  </div>
  

</div>

<div style={{marginLeft:"50px"}}>
  <div className="flex mt-[350px] ml-40 " style={{marginLeft:"-800px"}}>
    {/* First set */}
    <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
      <img src={icon1} alt="Logo" />
    </div>
    <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
      <option value="">Document Type</option>
    </select>
    <input type="text" className="w-[350px]  h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />
    <div className="flex mt-2">
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={link} alt="Logo" />
      </div>
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={down} alt="Logo" />
      </div>
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={share} alt="Logo" />
      </div>
     
    </div>
  </div>

  {/* Second set */}
  <div className="flex mt-4 ml-40 " style={{marginLeft:"-800px"}}>
 
    <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
      <img src={icon2} alt="Logo" />
    </div>
    <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
      <option value="">Document Type</option>
    </select>
    <input type="text" className="w-[350px] h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />
    <div className="flex mt-2">
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={link} alt="Logo" />
      </div>
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={down} alt="Logo" />
      </div>
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={share} alt="Logo" />
      </div>
    
    </div>
  </div>

  {/* Third set */}
  <div className="flex mt-4 ml-80 " style={{marginLeft:"-800px"}}>
   
    <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
      <img src={icon3} alt="Logo" />
    </div>
    <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
      <option value="">Document Type</option>
    </select>
    <input type="text" className="w-[350px] h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />
    <div className="flex mt-2">
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={link} alt="Logo" />
      </div>
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={down} alt="Logo" />
      </div>
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={share} alt="Logo" />
      </div>
      
    </div>
  </div>

  {/* Fourth set */}
  <div className="flex mt-4 ml-40 " style={{marginLeft:"-800px"}}>
  
    <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
      <img src={icon4} alt="Logo" />
    </div>
    <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
      <option value="">Document Type</option>
    </select>
    <input type="text" className="w-[350px]  h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />
    <div className="flex mt-2">
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={link} alt="Logo" />
      </div>
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={down} alt="Logo" />
      </div>
      <div className="w-3 h-3 flex items-center justify-center mr-6">
        <img src={share} alt="Logo" />
      </div>
      </div>
      
    </div>
  </div>
</div>
<div className="border-l border-black h-auto" style={{ height: "1029px", marginTop:"130px" , marginLeft:"0px"}}></div>

<div className="flex justify-center ml-[20px]" style={{marginTop:"100px"}}> 
  <button className="w-[135px] h-[30px] rounded-md mr-[43px]" style={{ backgroundColor: "black" , color:"white" , fontSize:"16px"}}>28:04:2024</button>
  <button className="w-[172px] h-[30px] rounded-md " style={{ backgroundColor: "black", color:"white" ,  fontSize:"16px"}}>Completed</button>
</div>
<div className="relative" style={{marginLeft:"-348px"}}>

<div className="absolute  left-[20px]  " style={{marginTop:"200px"}}>
  <div style={{whiteSpace:"nowrap", fontSize:"16px"}} >
    
  20-03-2024
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"70px", fontSize:"16px"}}>
  20-03-2024
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"70px", fontSize:"16px"}}>
  20-03-2024
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"70px", fontSize:"16px"}}>
  20-03-2024
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"70px", fontSize:"16px"}}>
  20-03-2024
  </div>
</div>
</div>

<div className="relative">
<img src= {lineImage2}  alt="Line" style={{ height: "424px", width: "2px" , marginLeft:"130px", marginTop:"180px" ,zIndex: 0}} />
<div className="absolute top-1/2 left-[90px] transform -translate-y-1/2 z-1">
  <div style={{ width: "12px", textAlign: "center", fontWeight:"600px" }}>
    
    <img src={ellipse} alt="Icon 1" style={{ height: "12px", width: "100%", marginTop:"170px", marginLeft:"35px" }} />
  </div>
  <div style={{ width: "12px", textAlign: "center" }}>
    <img src={ellipse} alt="Icon 2" style={{ height: "12px", width: "100%" , marginTop:"80px" , marginLeft:"35px"}} />
  </div>
  <div style={{ width: "12px", textAlign: "center" }}>
    <img src={ellipse} alt="Icon 3" style={{ height: "12px", width: "100%" , marginTop:"90px" , marginLeft:"35px"}} />
  </div>
  <div style={{ width: "12px", textAlign: "center" }}>
    <img src={ellipse} alt="Icon 3" style={{ height: "12px", width: "100%" , marginTop:"80px" , marginLeft:"35px"}} />
  </div>
  <div style={{ width: "12px", textAlign: "center" }}>
    <img src={ellipse} alt="Icon 3" style={{ height: "12px", width: "100%" , marginTop:"80px" , marginLeft:"35px"}} />
  </div>
</div>
</div>
<div className="relative">

<div className="absolute  left-[20px]  " style={{marginTop:"80px"}}>
  <div style={{whiteSpace:"nowrap", fontSize:"16px", width:"194px"}} >
    
  <img src={graybox2} alt="Icon 3" style={{ height: "60px", width: "100%" , marginTop:"100px" , marginLeft:"15px"}} />
  <div style={{ marginTop: "-50px", fontSize:"10px", color:"#384247" }}>
  Client approached<br></br>with Case Details</div>
  
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"50px", fontSize:"16px"}}>
  <img src={graybox2} alt="Icon 3" style={{ height: "60px", width: "100%" , marginTop:"30px" , marginLeft:"15px"}} />
  <div style={{ marginTop: "-40px", fontSize:"10px", color:"#384247" }}>
  Case filed by advocate <br></br>Mr Ram M Reddy
</div>
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"50px", fontSize:"16px"}}>
  <img src={graybox2} alt="Icon 3" style={{ height: "60px", width: "100%" , marginTop:"30px" , marginLeft:"15px"}} />
  <div style={{ marginTop: "-40px", fontSize:"10px", color:"#384247" }}>
  Case filed by advocate <br></br>Mr Ram M Reddy
</div>
<div style={{whiteSpace:"nowrap" , marginTop:"50px", fontSize:"16px"}}>
  <img src={graybox2} alt="Icon 3" style={{ height: "60px", width: "100%" , marginTop:"30px" , marginLeft:"15px"}} />
  <div style={{ marginTop: "-40px", fontSize:"10px", color:"#384247" }}>
  Case filed by advocate <br></br>Mr Ram M Reddy
</div>
<div style={{whiteSpace:"nowrap" , marginTop:"50px", fontSize:"16px"}}>
  <img src={graybox2} alt="Icon 3" style={{ height: "60px", width: "100%" , marginTop:"30px" , marginLeft:"15px"}} />
  <div style={{ marginTop: "-40px", fontSize:"10px", color:"#384247" }}>
  Case filed by advocate <br></br>Mr Ram M Reddy
</div>
</div>
</div>
  </div>
</div>
</div>



     </div>
     
      
    
  );
};

export default CaseView;
