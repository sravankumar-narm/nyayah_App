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
import party_details from '../assets/Images/docverify/party_details.png'
import property_details from '../assets/Images/docverify/property_details.png'
import survey_details from '../assets/Images/docverify/survey_details.png'
import total_area from '../assets/Images/docverify/total_area.png'
import newimg from '../assets/Images/createcase/new.png';
import lineImage from '../assets/Images/casedoc/lineimage.png';
import Icon1st from '../assets/Images/casedoc/1stIcon.png';
import Icon2nd from '../assets/Images/casedoc/2ndIcon.png';
import Icon3rd from '../assets/Images/casedoc/3rdIcon.png';
import graybox from '../assets/Images/casedoc/graybox.png';
import delIcon from '../assets/Images/casedoc/delIcon.png';
import editIcon from '../assets/Images/casedoc/editIcon.png';
import shareIcon from '../assets/Images/casedoc/shareIcon.png';
import CreatableSelect from 'react-select/creatable';


const  CaseDoc = () => {
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
<input type="text" className="w-[450px] h-[30px] border border-gray-400 rounded-lg  pl-2 text-sm" placeholder="Case ID" />

        
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
<div className="flex" style={{ marginLeft: '-795px', marginTop:"140px" }}>
<input type="text" className="w-[480px] h-[30px] border border-gray-400 rounded-lg  pl-2 text-sm" placeholder="Case Title" />
        <input className="w-[300px] h-[30px] border border-gray-400 rounded-lg ml-4 pl-2 text-xs" placeholder="Plot" />
            
        
    </div>
    </div>
<div className="flex z-0 relative" style={{marginLeft:"-960px"}}>
  <div className=' relative flex w-[800px] h-[246px] bg-white border border-gray-400 pl-[25px] pr-[25px] rounded-lg mt-[200px] ml-[164px]'>
  <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={party_details} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Party Details</span>
    </div>
    
  <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg mt-8 mr-4 p-4" style={{ width: "361px", height: "200px" }}>
    <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={personal_details} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Personal Details</span>
    </div>
    <div className="flex mt-2">
    <select className="w-[200px] h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" style={{ borderColor: '#D9D9D9' }}>
        <option value="">Party Type</option>
        
      </select>
      <select className="w-[200px] h-7 border border-gray-400 rounded-lg pl-2 mr-0 text-xs" style={{ borderColor: '#D9D9D9' }}>
        <option value="">Party 1</option>
        
      </select>
      <img src={newimg} className="h-6 w-5 ml-0 mt-1" alt="Icon 1" />
    </div>
    <div className="flex mt-4">
    <div className="flex items-center">
    <input type="text" className="w-1/3 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Party ID" style={{ borderColor: '#D9D9D9' }} />
      <input type="text" className="w-[270px] h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="Full Name"  style={{ borderColor: '#D9D9D9' }}/>
    </div>
    </div>
    <div className="flex mt-4">
    <input type="text" className="w-1/3 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="DD:MM:YYYY" style={{ borderColor: '#D9D9D9' }} />
      <input type="text" className="w-[270px] h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="Email ID"  style={{ borderColor: '#D9D9D9' }}/>
    </div>
    <div className="flex mt-4">
    <input type="text" className="w-1/3 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Gender" style={{ borderColor: '#D9D9D9' }} />
      <input type="text" className="w-[270px] h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="Mobile Number"  style={{ borderColor: '#D9D9D9' }}/>
    </div>
  </div>

  <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg p-4 mt-8 ml-2" style={{ width: "491px", height: "200px" }}>
  <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={current_address} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Party Address</span>
  </div>

  <div className="flex mt-0">
  <input type="text" className="flex-grow h-7 border-b  border-gray-400 pl-2 text-xs" placeholder="Address" style={{ borderColor: '#8D8D8D' }} />
</div>
<div className="flex mt-4">
<input type="text" className="flex-grow  h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Pincode" style={{ borderColor: '#D9D9D9', color:"#C6C6C6" }} />
  <input type="text" className="flex-grow h-7 border border-gray-400 rounded-lg pl-2 text-xs" placeholder="Village" style={{ borderColor: '#D9D9D9' }} />
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

</div>
</div>
     <div className="flex mt-6" style={{marginTop:"450px", marginLeft:"-815px"}}>
     <div className=' relative flex w-[800px] h-[246px] bg-white border border-gray-400 pl-[25px] pr-[25px] rounded-lg mt-[35px] ml-[15px]'>
  <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "40px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={personal_details} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Property Details</span>
    </div>
    <div className="relative w-160 h-48 bg-white border border-gray-400 rounded-lg p-4 mt-8 mr-8" style={{width:"510px", height:"200px"}}>
    <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "10px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={survey_details} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Survey Details</span>
    </div>
    <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "180px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={survey_details} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Total Area: 23.4 Acers</span>
    </div>
    
      {/* Content for the first additional box */}
      <div className=" flex mt-4">
      <input type="text" className="w-[100px] h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Survey Number"  style={{ borderColor: '#D9D9D9' }}/>
      <input type="text" className="w-[100px] h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Area" style={{ borderColor: '#D9D9D9' }} />
      <input type="text" className="w-[110px] h-7 border border-gray-400 rounded-lg pl-2  text-xs" placeholder="Acers" style={{ borderColor: '#D9D9D9' }} />
     
</div>
<div className="flex mt-4">
<input type="text" className="w-[100px] h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Survey Number"  style={{ borderColor: '#D9D9D9' }}/>
      <input type="text" className="w-[100px] h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Area" style={{ borderColor: '#D9D9D9' }} />
      <input type="text" className="w-[110px] h-7 border border-gray-400 rounded-lg pl-2  text-xs" placeholder="Acers" style={{ borderColor: '#D9D9D9' }} />

</div>

<div className="flex mt-4">
<input type="text" className="w-[100px] h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Survey Number"  style={{ borderColor: '#D9D9D9' }}/>
      <input type="text" className="w-[100px] h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs" placeholder="Area" style={{ borderColor: '#D9D9D9' }} />
      <input type="text" className="w-[110px] h-7 border border-gray-400 rounded-lg pl-2  text-xs" placeholder="Acers" style={{ borderColor: '#D9D9D9' }} />
</div>

 
    </div>
    <div className="relative w-160 h-48 bg-white border border-gray-400 mt-8 rounded-lg p-4"style={{width:"491px", height:"200px", marginLeft:"-10px"}}>
    <div className="absolute top-0 left-0 bg-white border border-gray-400 rounded-full h-6 w-[164px] p-2 flex items-center" style={{ marginLeft: "20px", marginTop: "-12px", fontSize: "12px" }}>
      <img src={permanent_address} className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2" style={{ height: "16px", width: "16px" }} alt="icon" />
      <span style={{ marginLeft: "24px" }}>Location Details</span>
    </div>
      {/* Content for the second additional box */}
      <div className="flex mt-0">
  <input type="text" className="flex-grow h-7 border-b  border-gray-400 pl-2 text-xs" placeholder="Village" style={{ borderColor: '#8D8D8D' }} />
  <input type="text" className="flex-grow h-7 border-b  border-gray-400 pl-2 text-xs ml-8" placeholder="Revenue Division" style={{ borderColor: '#8D8D8D' }} />
</div>
<div className="flex mt-4">
<div className="flow-grow relative ml-[-10px]">
<CreatableSelect
          className="  pl-2 text-xs focus:outline-none "
          styles={{ control: (provided) => ({ ...provided, borderColor: '#D9D9D9' ,borderRadius: '10px', height: '20px',  minHeight: '28px',display: 'flex', alignItems: 'center', justifyContent:'center', paddingBottom: '10px' }) 
          
        }}
          onChange={handleChange}
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]}
          placeholder="Pincode"
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
    </div>
    <div>
  <div className="flex mt-[350px] ml-40 " style={{marginLeft:"-800px"}}>
    {/* First set */}
    <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
      <img src={icon1} alt="Logo" />
    </div>
    <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
      <option value="">Document Type</option>
    </select>
    <input type="text" className="w-[400px]  h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />
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
    {/* Repeat the structure for the second set */}
    <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
      <img src={icon2} alt="Logo" />
    </div>
    <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
      <option value="">Document Type</option>
    </select>
    <input type="text" className="w-[400px] h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />
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
    {/* Repeat the structure for the third set */}
    <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
      <img src={icon3} alt="Logo" />
    </div>
    <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
      <option value="">Document Type</option>
    </select>
    <input type="text" className="w-[400px] h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />
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
    {/* Repeat the structure for the fourth set */}
    <div className="w-4 h-4 mt-2 flex items-center justify-center mr-6">
      <img src={icon4} alt="Logo" />
    </div>
    <select className="w-64 h-7 border border-gray-400 rounded-lg pl-2 mr-2 text-xs">
      <option value="">Document Type</option>
    </select>
    <input type="text" className="w-[400px]  h-7 border border-gray-400 rounded-md mr-2 pl-2 text-xs" placeholder="Document Name" />
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
<div className="border-l border-black h-auto" style={{ height: "1091px", marginTop:"-300px" , marginLeft:"20px"}}></div>

<div className="flex justify-center ml-[20px]" style={{marginTop:"-350px"}}> 
  <button className="w-[135px] h-[30px] rounded-md mr-[43px]" style={{ backgroundColor: "black" , color:"white" , fontSize:"16px"}}>28:04:2024</button>
  <button className="w-[172px] h-[30px] rounded-md " style={{ backgroundColor: "black", color:"white" ,  fontSize:"16px"}}>Completed</button>
</div>
<div className="relative" style={{marginLeft:"-348px"}}>

<div className="absolute  left-[20px]  " style={{marginTop:"-250px"}}>
  <div style={{whiteSpace:"nowrap", fontSize:"16px"}} >
    
  20-03-2024
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"100px", fontSize:"16px"}}>
  20-03-2024
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"110px", fontSize:"16px"}}>
  20-03-2024
  </div>
</div>
</div>

<div className="relative">
<img src= {lineImage}  alt="Line" style={{ height: "424px", width: "2px" , marginLeft:"130px", marginTop:"-300px" ,zIndex: 0}} />
<div className="absolute top-1/2 left-[90px] transform -translate-y-1/2 z-1">
  <div style={{ width: "30px", textAlign: "center", fontWeight:"600px" }}>
    
    <img src={Icon1st} alt="Icon 1" style={{ height: "30px", width: "100%", marginTop:"-350px", marginLeft:"25px" }} />
  </div>
  <div style={{ width: "30px", textAlign: "center" }}>
    <img src={Icon2nd} alt="Icon 2" style={{ height: "30px", width: "100%" , marginTop:"100px" , marginLeft:"25px"}} />
  </div>
  <div style={{ width: "30px", textAlign: "center" }}>
    <img src={Icon3rd} alt="Icon 3" style={{ height: "30px", width: "100%" , marginTop:"100px" , marginLeft:"25px"}} />
  </div>
</div>
</div>
<div className="relative">

<div className="absolute  left-[20px]  " style={{marginTop:"-370px"}}>
  <div style={{whiteSpace:"nowrap", fontSize:"16px", width:"194px"}} >
    
  <img src={graybox} alt="Icon 3" style={{ height: "111px", width: "100%" , marginTop:"100px" , marginLeft:"15px"}} />
  <div style={{ marginTop: "-100px", fontSize:"10px", color:"#384247" }}><b>Seller:</b> Ram, Shyam<br/>
<b>Buyer:</b> Sivaraj, Yuvaraj <br/>
<b>Loc:</b> Adigodi, Bangalore <br/>
<b>Sale Type:</b> Sale <br/>
<b>Amount:</b> 1,00,000 INR <br/>
<b>Area:</b> 3 Acres 20 Cents</div>
  
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"30px", fontSize:"16px"}}>
  <img src={graybox} alt="Icon 3" style={{ height: "111px", width: "100%" , marginTop:"30px" , marginLeft:"15px"}} />
  <div style={{ marginTop: "-100px", fontSize:"10px", color:"#384247" }}><b>Seller:</b> Ram, Shyam<br/>
<b>Buyer:</b> Sivaraj, Yuvaraj <br/>
<b>Loc:</b> Adigodi, Bangalore <br/>
<b>Sale Type:</b> Sale <br/>
<b>Amount:</b> 1,00,000 INR <br/>
<b>Area:</b> 3 Acres 20 Cents</div>
  </div>
  <div style={{whiteSpace:"nowrap" , marginTop:"30px", fontSize:"16px"}}>
  <img src={graybox} alt="Icon 3" style={{ height: "111px", width: "100%" , marginTop:"30px" , marginLeft:"15px"}} />
  <div style={{ marginTop: "-100px", fontSize:"10px", color:"#384247" }}><b>Seller:</b> Ram, Shyam<br/>
<b>Buyer:</b> Sivaraj, Yuvaraj <br/>
<b>Loc:</b> Adigodi, Bangalore <br/>
<b>Sale Type:</b> Sale <br/>
<b>Amount:</b> 1,00,000 INR <br/>
<b>Area:</b> 3 Acres 20 Cents</div>
  
  </div>
</div>
</div>



     </div>
     
     </div>
     
     </div>  
    
  );
};

export default CaseDoc;
