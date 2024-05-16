import React, { useState } from 'react';
import nyayahImage from '../assets/Images/home/nyayah1.png';
import Sidebar from '../sidebar/Sidebar.jsx';

import party_details from '../assets/Images/docverify/party_details.png'

import graybox from '../assets/Images/casedoc/graybox.png';
import delIcon from '../assets/Images/casedoc/delIcon.png';
import editIcon from '../assets/Images/casedoc/editIcon.png';
import shareIcon from '../assets/Images/casedoc/shareIcon.png';
import share1 from  '../assets/Images/caseverify/share1.png';
import download1 from  '../assets/Images/caseverify/download1.png';
import pin1 from  '../assets/Images/caseverify/pin1.png';
import print1 from '../assets/Images/caseverify/print1.png';
import CreatableSelect from 'react-select/creatable';
import right from '../assets/Images/caseverify/right.png';
import happy from '../assets/Images/caseverify/happy.png';
import horizontal from '../assets/Images/caseverify/horizontal.png';
import vertical from '../assets/Images/caseverify/vertical.png';
import dateimg from '../assets/Images/caseverify/dateImg.png';
import saledeed from '../assets/Images/caseverify/saledeed.png';
import rupee from '../assets/Images/caseverify/rupee.png';
import location from '../assets/Images/caseverify/location.png';
import arrow from '../assets/Images/caseverify/arrowIcon.png';
import question from '../assets/Images/caseverify/question.png';
import sad from '../assets/Images/caseverify/sad.png';

const  CaseVerify = () => {
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
<div className="flex z-0">
  <div className="flex items-center" style={{ marginLeft: '90px', marginTop: '-350px' }}>
    <div className="relative">
      <div className="absolute top-[-10px] left-[15px] bg-white border border-gray-400 rounded-full h-5 w-37 flex items-center pr-2">
        <img src={party_details} className="h-4 w-4 mr-1 " alt="icon" />
        <span className='text-xs ml-[-5px]'> Case Title</span>
      </div>
      <input
        type="text"
        className="w-[346px] h-[45px] border border-gray-400 rounded-lg pl-[40px] pr-[25px] text-sm"
        placeholder=""
      />
    </div>
    <div className="flex ml-4">
      <button className="w-[76px] h-[45px] rounded-md" style={{ backgroundColor: "#D9D9D9", fontSize: "12px" }}>Print</button>
      <button className="w-[76px] h-[45px] flex items-center justify-center rounded-md ml-1" style={{ backgroundColor: "#D9D9D9", fontSize: "12px", fontWeight: "600px" }}>
        <img src={delIcon} alt="Delete Icon" className="mr-1" style={{ height: "13px", width: "11px" }} />
        Delete
      </button>
      <button className="w-[76px] h-[45px] flex items-center justify-center rounded-md ml-1" style={{ backgroundColor: "#D9D9D9", fontSize: "12px" }}>
        <img src={editIcon} alt="Edit Icon" className="mr-1" style={{ height: "14px", width: "12px" }} />
        Edit
      </button>
      <button className="w-[76px] h-[45px] flex items-center justify-center rounded-md ml-1" style={{ backgroundColor: "#D9D9D9", fontSize: "12px" }}>
        <img src={shareIcon} alt="Share Icon" className="mr-1" style={{ height: "14px", width: "12px" }} />
        Share
      </button>
    </div>
  </div>


    <div className="flex z-0" >
<div className="flex" style={{ marginLeft: '-690px', marginTop:"210px" }}>
<input type="text" className="w-[230px] h-[45px] border-none rounded-lg  pl-1 text-sm shadow-md" placeholder="Property Type" />
        <input className="w-[230px] h-[45px] border-none rounded-lg ml-4 pl-1 text-sm shadow-md" placeholder="Revenue Division" />
        <input className="w-[160px] h-[45px] border-none rounded-lg ml-4 pl-1 text-sm shadow-md" placeholder="Extra" />
            
        
    </div>
    </div>

    <div className="flex z-0" >
<div className="flex" style={{ marginLeft: '-690px', marginTop:"290px" }}>
<textarea className="w-[310px] h-[154px] border border-gray-400 rounded-lg pl-1 text-sm resize-none" placeholder="Party Details"></textarea>

<textarea className="w-[310px] h-[154px] border border-gray-400 rounded-lg ml-8 pl-1 text-sm resize-none" placeholder="Property Details"></textarea>


            
        
    </div>
    
    </div>
    <div className="flex z-0" >
<div className="flex" style={{ marginLeft: '-690px', marginTop:"450px" }}>
<u><p className="mt-4 text-sm font-bold">List of Documents:</p></u>

            
        
    </div>
    
    </div>
  
  
    <div className="flex z-0 " >
<div className="flex" style={{ marginLeft: '-690px', marginTop:"450px" }}>
<div className="flex items-center">
  {/* First box */}
  <div className="w-[130px] h-[50px] border border-gray-400 rounded-lg mr-4 text-sm flex items-center justify-center " style={{color:"#313144"}}>
  Sale Deed 
  </div>

  {/* Second box */}
  <div className="w-[190px] h-[50px] border border-gray-400 rounded-lg  text-sm mr-4 flex items-center justify-center font-medium" style={{color:"#313144", fontWeight:"500"}}>
  Sale Deed # 1234
  </div>

  {/* Text in the same line */}
  <div className="flex" style={{ color: "#ADADAD" }}>
    <div className="flex items-center mr-4">
        <img src={print1} alt="Print" className="h-4 w-4 mr-1" />
        <p className="text-xs">Print</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={download1} alt="Download" className="h-4 w-4 mr-1" />
        <p className="text-xs">Download</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={share1} alt="Share" className="h-4 w-4 mr-1" />
        <p className="text-xs">Share</p>
    </div>
    <div className="flex items-center">
        <img src={pin1} alt="Pin" className="h-4 w-3 mr-1" />
        <p className="text-xs">Pin</p>
    </div>
</div>
</div>
<div className="flex z-0 " >
<div className="flex" style={{ marginLeft: '-610px', marginTop:"150px" }}>
<div className="flex items-center">
  {/* First box */}
  <div className="w-[130px] h-[50px] border border-gray-400 rounded-lg mr-4 text-sm flex items-center justify-center " style={{color:"#313144"}}>
  Sale Deed 
  </div>

  {/* Second box */}
  <div className="w-[190px] h-[50px] border border-gray-400 rounded-lg  text-sm mr-4 flex items-center justify-center font-medium" style={{color:"#313144", fontWeight:"500"}}>
  Sale Deed # 1234
  </div>

  {/* Text in the same line */}
  <div className="flex" style={{ color: "#ADADAD" }}>
    <div className="flex items-center mr-4">
        <img src={print1} alt="Print" className="h-4 w-4 mr-1" />
        <p className="text-xs">Print</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={download1} alt="Download" className="h-4 w-4 mr-1" />
        <p className="text-xs">Download</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={share1} alt="Share" className="h-4 w-4 mr-1" />
        <p className="text-xs">Share</p>
    </div>
    <div className="flex items-center">
        <img src={pin1} alt="Pin" className="h-4 w-3 mr-1" />
        <p className="text-xs">Pin</p>
    </div>
</div>
</div>
</div>
</div>

<div className="flex z-0 " >
<div className="flex" style={{ marginLeft: '-610px', marginTop:"240px" }}>
<div className="flex items-center">
  {/* First box */}
  <div className="w-[130px] h-[50px] border border-gray-400 rounded-lg mr-4 text-sm flex items-center justify-center " style={{color:"#313144"}}>
  Sale Deed 
  </div>

  {/* Second box */}
  <div className="w-[190px] h-[50px] border border-gray-400 rounded-lg  text-sm mr-4 flex items-center justify-center font-medium" style={{color:"#313144", fontWeight:"500"}}>
  Sale Deed # 1234
  </div>

  {/* Text in the same line */}
  <div className="flex" style={{ color: "#ADADAD" }}>
    <div className="flex items-center mr-4">
        <img src={print1} alt="Print" className="h-4 w-4 mr-1" />
        <p className="text-xs">Print</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={download1} alt="Download" className="h-4 w-4 mr-1" />
        <p className="text-xs">Download</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={share1} alt="Share" className="h-4 w-4 mr-1" />
        <p className="text-xs">Share</p>
    </div>
    <div className="flex items-center">
        <img src={pin1} alt="Pin" className="h-4 w-3 mr-1" />
        <p className="text-xs">Pin</p>
    </div>
</div>
</div>
</div>
</div>
<div className="flex z-0 " >
<div className="flex" style={{ marginLeft: '20px', marginTop:"0px" }}>
<div className="flex items-center">
  {/* First box */}
  <div className="w-[130px] h-[50px] border border-gray-400 rounded-lg mr-4 text-sm flex items-center justify-center " style={{color:"#313144"}}>
  Sale Deed 
  </div>

  {/* Second box */}
  <div className="w-[190px] h-[50px] border border-gray-400 rounded-lg  text-sm mr-4 flex items-center justify-center font-medium" style={{color:"#313144", fontWeight:"500"}}>
  Sale Deed # 1234
  </div>

  {/* Text in the same line */}
  <div className="flex" style={{ color: "#ADADAD" }}>
    <div className="flex items-center mr-4">
        <img src={print1} alt="Print" className="h-4 w-4 mr-1" />
        <p className="text-xs">Print</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={download1} alt="Download" className="h-4 w-4 mr-1" />
        <p className="text-xs">Download</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={share1} alt="Share" className="h-4 w-4 mr-1" />
        <p className="text-xs">Share</p>
    </div>
    <div className="flex items-center">
        <img src={pin1} alt="Pin" className="h-4 w-3 mr-1" />
        <p className="text-xs">Pin</p>
    </div>
</div>
</div>
</div>
</div>
<div className="flex z-0 " >
<div className="flex" style={{ marginLeft: '-610px', marginTop:"150px" }}>
<div className="flex items-center">
  {/* First box */}
  <div className="w-[130px] h-[50px] border border-gray-400 rounded-lg mr-4 text-sm flex items-center justify-center " style={{color:"#313144"}}>
  Sale Deed 
  </div>

  {/* Second box */}
  <div className="w-[190px] h-[50px] border border-gray-400 rounded-lg  text-sm mr-4 flex items-center justify-center font-medium" style={{color:"#313144", fontWeight:"500"}}>
  Sale Deed # 1234
  </div>

  {/* Text in the same line */}
  <div className="flex" style={{ color: "#ADADAD" }}>
    <div className="flex items-center mr-4">
        <img src={print1} alt="Print" className="h-4 w-4 mr-1" />
        <p className="text-xs">Print</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={download1} alt="Download" className="h-4 w-4 mr-1" />
        <p className="text-xs">Download</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={share1} alt="Share" className="h-4 w-4 mr-1" />
        <p className="text-xs">Share</p>
    </div>
    <div className="flex items-center">
        <img src={pin1} alt="Pin" className="h-4 w-3 mr-1" />
        <p className="text-xs">Pin</p>
    </div>
</div>
</div>
</div>
</div>
<div className="flex z-0 " >
<div className="flex" style={{ marginLeft: '-610px', marginTop:"240px" }}>
<div className="flex items-center">
  {/* First box */}
  <div className="w-[130px] h-[50px] border border-gray-400 rounded-lg mr-4 text-sm flex items-center justify-center " style={{color:"#313144"}}>
  Sale Deed 
  </div>

  {/* Second box */}
  <div className="w-[190px] h-[50px] border border-gray-400 rounded-lg  text-sm mr-4 flex items-center justify-center font-medium" style={{color:"#313144", fontWeight:"500"}}>
  Sale Deed # 1234
  </div>

  {/* Text in the same line */}
  <div className="flex" style={{ color: "#ADADAD" }}>
    <div className="flex items-center mr-4">
        <img src={print1} alt="Print" className="h-4 w-4 mr-1" />
        <p className="text-xs">Print</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={download1} alt="Download" className="h-4 w-4 mr-1" />
        <p className="text-xs">Download</p>
    </div>
    <div className="flex items-center mr-4">
        <img src={share1} alt="Share" className="h-4 w-4 mr-1" />
        <p className="text-xs">Share</p>
    </div>
    <div className="flex items-center">
        <img src={pin1} alt="Pin" className="h-4 w-3 mr-1" />
        <p className="text-xs">Pin</p>
    </div>
</div>
</div>
</div>
</div>
           

<div className="flex z-0" >
<div className="flex" style={{ marginLeft: '-1230px', marginTop:"300px" }}>
<u><p className="mt-4 text-sm font-bold">Verification Details: (Survey:1234)</p></u>
</div>
            
<div className="flex z-0">
  <div className="flex" style={{ marginLeft: '-240px', marginTop: "350px" }}>
    <div className="w-[1070px] h-[168px] border border-gray-400 rounded-lg mt-6 mb-[40px]">
      <img src={right} alt="Right Icon" className='w-[52px] h-[52px] mt-[20px] ml-[20px]' />
      <img src={happy} alt="Happy Icon" className="mb-2 w-[50px] h-[50px] mt-[20px] ml-[20px]" />
      <img src={vertical} alt="Vertical Line" className="mb-2 w-[5px] h-[135px] mt-[-130px] ml-[90px]" />
      <div className="flex items-center ml-[140px] mt-[-150px]">
        <div className="flex items-center">
          {/* Icons for respective items */}
          <img src={dateimg} alt="Icon 1" className="mr-2 w-[36px] h-[36px]" />
          <p className="text-sm mr-[50px]">dd:mm:yy</p>
        </div>
        <div className="flex items-center ml-4">
          <img src={saledeed} alt="Icon 2" className="mr-2 w-[19px] h-[19px]" />
          <p className="text-sm mr-[50px]">sale deed</p>
        </div>
        <div className="flex items-center ml-4">
          <img src={rupee} alt="Icon 3" className="mr-2 w-[14px] h-[21px]" />
          <p className="text-sm mr-[50px]">12,3456</p>
        </div>
        <div className="flex items-center ml-4">
          <img src={location} alt="Icon 4" className="mr-2 w-[21px] h-[30px]"/>
          <p className="text-sm mr-[50px]">location</p>
        </div>
        
      </div>
      <p style={{marginLeft:"-750px", marginTop:"10px" , fontSize:"14px"}}>From</p>
      <img src={horizontal} alt="Icon 4" className="mr-2 w-[292px] h-[2px] ml-[140px]"/>
      <p style={{marginLeft:"-530px", marginTop:"10px" , fontSize:"14px"}}>Party Details Party Details Party Details<br></br>
Party Details Party Details Party Details</p>
<p style={{marginLeft:"-395px", marginTop:"10px" , fontSize:"14px", fontWeight:600}}>Note: dummy text dummy text  dummy text dummy text</p>
<img src={arrow} alt="Icon 4" className="mr-2 w-[60px] h-[60px] ml-[480px] mt-[-100px]"/>
<div className='ml-[780px] mt-[-90px]'>
<p style={{marginLeft:"-640px", marginTop:"10px"  , fontSize:"14px"}} >To</p>
      <img src={horizontal} alt="Icon 4" className="mr-2 w-[512px] h-[2px] ml-[-180px]"/>
      <p style={{marginLeft:"-390px", marginTop:"10px"  , fontSize:"14px"}}>Party Details Party Details Party Details<br></br>
Party Details Party Details Party Details</p>
</div>
    </div>
    </div>
    <div className="flex z-0" >
<div className="flex" style={{ marginLeft: '-1070px', marginTop:"550px" }}>
<div className="w-[1070px] h-[168px] border border-gray-400 rounded-lg mt-6 mb-[40px]">
      <img src={question} alt="Right Icon" className='w-[31.5px] h-[49px] mt-[20px] ml-[30px]' />
      <img src={sad} alt="Happy Icon" className="mb-2 w-[50px] h-[50px] mt-[20px] ml-[20px]" />
      <img src={vertical} alt="Vertical Line" className="mb-2 w-[5px] h-[135px] mt-[-130px] ml-[90px]" />
      <div className="flex items-center ml-[140px] mt-[-150px]">
        <div className="flex items-center">
          {/* Icons for respective items */}
          <img src={dateimg} alt="Icon 1" className="mr-2 w-[36px] h-[36px]" />
          <p className="text-sm mr-[50px]">dd:mm:yy</p>
        </div>
        <div className="flex items-center ml-4">
          <img src={saledeed} alt="Icon 2" className="mr-2 w-[19px] h-[19px]" />
          <p className="text-sm mr-[50px]">sale deed</p>
        </div>
        <div className="flex items-center ml-4">
          <img src={rupee} alt="Icon 3" className="mr-2 w-[14px] h-[21px]" />
          <p className="text-sm mr-[50px]">12,3456</p>
        </div>
        <div className="flex items-center ml-4">
          <img src={location} alt="Icon 4" className="mr-2 w-[21px] h-[30px]"/>
          <p className="text-sm mr-[50px]">location</p>
        </div>
        
      </div>
      <p style={{marginLeft:"-750px", marginTop:"10px" , fontSize:"14px"}}>From</p>
      <img src={horizontal} alt="Icon 4" className="mr-2 w-[292px] h-[2px] ml-[140px]"/>
      <p style={{marginLeft:"-530px", marginTop:"10px" , fontSize:"14px"}}>Party Details Party Details Party Details<br></br>
Party Details Party Details Party Details</p>
<p style={{marginLeft:"-395px", marginTop:"10px" , fontSize:"14px", fontWeight:600}}>Note: dummy text dummy text  dummy text dummy text</p>
<img src={arrow} alt="Icon 4" className="mr-2 w-[60px] h-[60px] ml-[480px] mt-[-100px]"/>
<div className='ml-[780px] mt-[-90px]'>
<p style={{marginLeft:"-640px", marginTop:"10px"  , fontSize:"14px"}} >To</p>
      <img src={horizontal} alt="Icon 4" className="mr-2 w-[512px] h-[2px] ml-[-180px]"/>
      <p style={{marginLeft:"-390px", marginTop:"10px"  , fontSize:"14px"}}>Party Details Party Details Party Details<br></br>
Party Details Party Details Party Details</p>
</div>
    </div>
    </div>
</div>

</div>

    </div>
        
    </div>
    
    </div>

</div>
<div className="flex justify-center ml-[-400px]" style={{marginTop:"70px"}}> 
  <button className="w-[135px] h-[30px] rounded-md mr-1" style={{ backgroundColor: "black" , color:"white" , fontSize:"16px"}}>28:04:2024</button>
  <button className="w-[172px] h-[30px] rounded-md" style={{ backgroundColor: "black", color:"white" ,  fontSize:"16px"}}>Completed</button>
</div>
</div>


  
     
     
    
  );
};

export default CaseVerify;
