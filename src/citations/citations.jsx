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
import generate from '../assets/Images/citations/generate.png';
import manual from '../assets/Images/citations/manual.png';
import refresh  from '../assets/Images/citations/refresh.png';
import star from '../assets/Images/dashboard/star.png';
import star1 from '../assets/Images/dashboard/star2.png';
import view from '../assets/Images/dashboard/view.png';
import citation from '../assets/Images/dashboard/citation.png';
import printicon from '../assets/Images/dashboard/print.png';
import deleteicon from '../assets/Images/dashboard/deleteIcon.png';
import searchIcon from '../assets/Images/dashboard/search.png';
import info from '../assets/Images/dashboard/info.png';


const Citations = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleColorMode = () => {
    setIsBlackAndWhite(!isBlackAndWhite);
  };
  const [data, setData] = useState([
    {
        image:{star},
        "Score(Rank)": '001',
      "Case Title": ' Dummy Dummy Dummy  Dummy Dummy Dummy ',
      "Year" : '2021',
      "Court" : 'City Civil court, Bangalore',
      
    },
    // Add more data objects as needed
    {
        id: 1,
        "Score(Rank)": '001',
      "Case Title": ' Dummy Dummy Dummy  Dummy Dummy Dummy ',
      "Year" : '2020',
      "Court" : 'City Civil court, Bangalore',
      },
      {
        id: 1,
        "Score(Rank)": '001',
        "Case Title": ' Dummy Dummy Dummy  Dummy Dummy Dummy ',
        "Year" : '2020',
        "Court" : 'City Civil court, Bangalore',
      },
    
  ]);


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
          .slider {
            position: relative;
            width: 83px;
            height: 24px;
          }
          .slider input {
            display: none;
          }
          .slider .slider-track {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 83px; /* Chosen button width */
  height: 100%;
            background-color: black;
            border-radius: 34px;
            cursor: pointer;
          }
          .slider .slider-thumb {
            position: absolute;
            top: 0.5px;
            bottom: 1px;
            left: 1px;
            margin-bottom: 2px;
            width: 43px;
            height: 98%;
            background-color: #fff;
            border-radius: 34px;
            transition: transform 0.3s ease;
            border: 1px solid gray;
          }
          .slider input:checked + .slider-track {
            background-color: black;
           
          }
          .slider input:checked + .slider-track .slider-thumb {
            transform: translateX(43px);
          }
                 
          .slider-label-on,
.slider-label-off {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: white;
    transition: left 0.3s ease;
}

.slider-label-on {
    left: 5px; /* Adjusted position */
    color: black;
}

.slider-label-off {
    right: 5px; /* Adjusted position */
}
.table-container {
    margin-top: 20px;
    flex-grow: 1; 
  }
  .table {
    border-collapse: collapse;
    flex-grow: 1; 
    text-align: center;
  }
  .table th {
    padding: 8px;
    
    font-weight: bold;
    white-space: nowrap;
    text-align: center;
    margin-left:20px;
    border-top: 2px solid black; 
    border-bottom: 2px solid black; 

    
  }
  .table td {
    padding: 25px;
    font-size:11px;
    font-weight:600;
    text-align: center;
    
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
  style={{ width: "250px", height: "30px", outline: "none", cursor: "pointer" }}
>
  <option value="" disabled selected hidden>Case ID</option>
  
 
</select>

      <input 
        type="text" 
        className="border border-gray-400 rounded-lg pl-2 mr-2 text-xs bg-white" 
        placeholder="Case Title" 
        style={{ width: "520px", height: "30px", outline: "none", cursor: "text" }}
      />
      
      <button 
        className="border border-gray-400 rounded-lg text-xs bg-white  mr-[8px]" 
        style={{ width: "50px", height: "42px" }}
      >
             <img src={generate} alt="generate" style={{ width: "20px", height: "20px" , marginLeft:"13px" }} />
      </button>
      <button 
        className="border border-gray-400 rounded-lg text-xs bg-white mr-[8px]" 
        style={{ width: "50px", height: "42px" }}
      >
             <img src={manual} alt="manual" style={{ width: "20px", height: "20px" , marginLeft:"13px"}} />
      </button>
      <button 
        className="border border-gray-400 rounded-lg text-xs bg-white  mr-[8px]" 
        style={{ width: "50px", height: "42px" }}
      >
         <img src={refresh} alt="refresh" style={{ width: "20px", height: "20px" , marginLeft:"13px"}} />
      </button>
    </div>
  
    <div className="flex z-0" >
<p className='text-sm font-bold mt-[50px]'> Citations History</p>
<label className="slider" style={{marginTop:"50px" , marginLeft:"750px"}}>
          <input type="checkbox" onChange={toggleColorMode} />
          <span className="slider-track">
            <span className="slider-thumb" style={{zIndex:1, fontSize:"11px"}}> Top 10</span>
          </span>
          <span className="slider-label-on"></span>
        <span className="slider-label-off ">All</span>
        </label>
</div>
<div className="table-container ml-[-100px] mt-[1000px]" style={{ marginTop: "100px" }}>
  <table className="table" style={{ width: "1290px" }}>
    <thead>
      <tr>
        <th>
          <img src={star} alt="Image Alt Text" style={{ width: '20px', height: '18px', marginLeft: "16px" }} />
        </th>
        <th>
          <div className="header-content">
            <span>Score (Rank)</span>
          </div>
        </th>
        <th>
          <div className="header-content">
            <span style={{ marginLeft: "30px" }}>Case Title</span>
          </div>
        </th>
        <th>Year</th>
        <th>
          <div className="header-content">
            <span style={{ marginLeft: "15px" }}>Court</span>
          </div>
        </th>
        <th>
        <div className="search-container relative">
  <input type="text" className="search-input" placeholder="Search..." />
  <div className="absolute top-[2px] left-[170px]">
    <div className="w-5 h-5 bg-cover" style={{ backgroundImage: `url(${searchIcon})` }}></div>
  </div>
</div>

        </th>
      </tr>
    </thead>
    <tbody>
  {data.map((item, index) => (
    <tr key={index}>
      <td><img src={star1} style={{ width: '16px', height: '16px' }} alt="Image" /></td>
      <td>{item["Score(Rank)"]}</td>
      <td>{item["Case Title"]}</td>
      <td>{item.Year}</td>
      <td>{item.Court}</td>
      <td>
        {index === 0 && (
          <div style={{ display: 'flex', flexDirection: "row" }}>
            <img src={view} style={{ width: '15px', height: '11.46px', marginRight: "20px" }} alt="Icon 1" />
            <img src={citation} style={{ width: '14px', height: '13px', marginRight: "20px" }} alt="Icon 2" />
            <img src={printicon} style={{ width: '16px', height: '16px', marginRight: "20px", marginTop: "-2px" }} alt="Icon 3" />
            <img src={deleteicon} style={{ width: '10px', height: '12px' }} alt="Icon 4" />
          </div>
        )}
      </td>
    </tr>
  ))}
</tbody>

  </table>
</div>


    



 
   

   
  
  


     </div>
    

  </div>
     </div>
     
    
   
  

 
     
      
    
  );
};

export default Citations;
