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

const Case = () => {
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
    <div className="flex">
    <select
    className="border border-gray-400 rounded-lg pl-2 mr-2 text-xs"
    style={{ width: "260px", height: "30px", outline: "none", cursor: "pointer" }}
  >
    {/* Options for Category */}
    <option value="">Category</option>
  </select>
  {/* Dropdown for Subcategory */}
  <select
    className="border border-gray-400 rounded-lg pl-2 mr-2 text-xs"
    style={{ width: "260px", height: "30px", outline: "none", cursor: "pointer" }}
  >
    {/* Options for Subcategory */}
    <option value="">Subcategory</option>

  </select>
  <button 
    className="bg-black text-white rounded-lg ml-2 text-xs px-2 py-1"
    style={{ width: "67px", height: "42px" }}
  >
    Go
  </button>
    </div>
  


    



     </div>
    

  </div>
     </div>
     
    
   
  

 
     
      
    
  );
};

export default Case;
