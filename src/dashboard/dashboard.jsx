import React, { useState } from 'react';
import nyayahImage from '../assets/Images/home/nyayah1.png';
import caseIcon from '../assets/Images/dashboard/case.png';
import User from '../assets/Images/dashboard/dashboard_user.png';
import totalCases from '../assets/Images/dashboard/total_cases.png';
import Sidebar from '../sidebar/Sidebar.jsx';
import civilCases from '../assets/Images/dashboard/civil_cases.png';
import criminaalCases from '../assets/Images/dashboard/criminal_cases.png';
import longPending from '../assets/Images/dashboard/long_pending.png';
import totalClients from '../assets/Images/dashboard/total_clients.png';
import activeClients from '../assets/Images/dashboard/active_clients.png';
import inactiveClients from '../assets/Images/dashboard/inactive_clients.png';
import totalPortal from '../assets/Images/dashboard/total_portal.png';
import star from '../assets/Images/dashboard/star.png';
import star1 from '../assets/Images/dashboard/star2.png';
import view from '../assets/Images/dashboard/view.png';
import citation from '../assets/Images/dashboard/citation.png';
import printicon from '../assets/Images/dashboard/print.png';
import deleteicon from '../assets/Images/dashboard/deleteIcon.png';
import info from '../assets/Images/dashboard/info.png';


const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);
  const [priority, setPriority] = useState(1);
  const [priority1, setPriority1] = useState(1);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

    const [selectedPriority, setSelectedPriority] = useState(1);
  
    const handlePriorityChange = (priority) => {
      setSelectedPriority(priority);
    };

  const handlePriorityChange1 = (value) => {
    setPriority1(value);
  };

  const toggleColorMode = () => {
    setIsBlackAndWhite(!isBlackAndWhite);
  };

  const [selectedType, setSelectedType] = useState('civil');

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const [data, setData] = useState([
    {
        image:{star},
      caseId: '001',
      number: '123456789012345',
      title: 'Smt. Najmunisha, Abdul Hamid Chandmiya alias Ladoo Bapu Vs. State of Gujarat, Narcotics Control Bureau',
      type: 'Civil',
      clientName: 'Sivaraj',
      courtName: 'Bangalore',
      advocateName: 'Ram M Reddy',
      status: 'Open'
    },
    // Add more data objects as needed
    {
        id: 1,
        caseId: '002',
        number: '123456789012345',
        title: 'Smt. Najmunisha, Abdul Hamid Chandmiya alias Ladoo Bapu Vs. State of Gujarat, Narcotics Control Bureau',
        type: 'Civil',
        clientName: 'Sivaraj',
        courtName: 'Bangalore',
        advocateName: 'Ram M Reddy',
        status: 'Open'
      },
      {
        id: 1,
        caseId: '003',
        number: '123456789012345',
        title: 'Smt. Najmunisha, Abdul Hamid Chandmiya alias Ladoo Bapu Vs. State of Gujarat, Narcotics Control Bureau',
        type: 'Civil',
        clientName: 'Sivaraj',
        courtName: 'Bangalore',
        advocateName: 'Ram M Reddy',
        status: 'Open'
      },
      {
        id: 1,
        caseId: '004',
        number: '123456789012345',
        title: 'Smt. Najmunisha, Abdul Hamid Chandmiya alias Ladoo Bapu Vs. State of Gujarat, Narcotics Control Bureau',
        type: 'Civil',
        clientName: 'Sivaraj',
        courtName: 'Bangalore',
        advocateName: 'Ram M Reddy',
        status: 'Open'
      },
      {
        id: 1,
        caseId: '005',
        number: '123456789012345',
        title: 'Smt. Najmunisha, Abdul Hamid Chandmiya alias Ladoo Bapu Vs. State of Gujarat, Narcotics Control Bureau',
        type: 'Civil',
        clientName: 'Sivaraj',
        courtName: 'Bangalore',
        advocateName: 'Ram M Reddy',
        status: 'Open'
      },
  ]);

  const [sortConfig, setSortConfig] = useState(null);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };


  return (
    <div className="flex h-screen -mt-8 -ml-16">
        <style>{`
        body {
          background-color: #FFFFFF;
          margin: 0;
          font-family:Open Sans;
          font-size:12px;
          padding: 0;
          display: flex;
        }
        .top-bar {
            height: 64px;
            width:screen;
            background-color: #FFFFFF; 
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
.priority-buttons {
    position: relative;
    display: flex;
  }
  
  .priority-button {
    width: 106px;
    height: 18px;
    border: none;
    background-color: black;
    color: white;
    font-size: 12px;
    cursor: pointer;
  }
  
  .priority-button.selected {
    background-color: white;
    color: black;
    
  }
  
  .selected-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 106px;
    height: 18px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 4px;
    transition: left 0.3s ease; /* Add transition for smooth movement */
  }
  .case-type-buttons {
    position: relative;
    display: flex;
  }
  
  .case-type-button {
    width: 106px;
    height: 18px;
    border: none;
    background-color: black;
    color: white;
    font-size: 12px;
    cursor: pointer;
  }
  
  .case-type-button.selected {
    background-color: white;
    color: black;
  }
  
  .selected-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 106px;
    height: 18px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 4px;
    transition: left 0.3s ease; /* Add transition for smooth movement */
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
            border: 1px solid #dee2e6;
            background-color: #2C2C2C;
            color:white;
            font-weight: bold;
            white-space: nowrap;
            text-align: center;
            margin-left:20px;
            

            
          }
          .table td {
            padding: 25px;
            font-size:11px;
            font-weight:600;
            text-align: center;
            border-left: 1px solid #C4C4C4; /* Add border for left side only */
  border-right: 1px solid #C4C4C4; 
          }
   
.header-content {
    display: flex;
    align-items: center;
  }
  
  .sort-indicator {
    margin-left: 5px; /* Add margin between text and arrows */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .up-arrow, .down-arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin: 2px 0; /* Add margin */
  }
  
  
  .up-arrow {
    border-bottom: 5px solid white;
  }
  
  .down-arrow {
    border-top: 5px solid white;
  }
  .search-container {
    position: relative;
    background-image: url('../assets/Images/dashboard/search.png'); /* Replace 'search-icon.png' with your icon image */
  }
  
  .search-input {
   
    border-radius:30px;
  }
  
  .search-icon {
    position: absolute;
    top: 50%;
    right: 10px; /* Adjust as needed */
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background-image: url('../assets/Images/dashboard/search.png'); /* Replace 'search-icon.png' with your icon image */
    background-size: cover;
    background-position: center;
    cursor: pointer;
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
<div className="flex justify-end pt-6 pr-6 ml-[500px] mt-[94px]">
          <div className="relative ml-[600px] flex items-center justify-center text-center" style={{   width: '75px', height: '30px', textAlign: 'center'  }}>
            
          <a href="/createcase" className="inline-block">
  <button className="w-[70px] h-[30px] bg-black rounded-full flex items-center justify-center text-white font-bold py-2 px-4">
    <img src={caseIcon} alt="Icon" className="inline-block h-4 w-4 mr-2" />
    Case
  </button>
</a>

          </div>
          <div className="relative ml-4 flex items-center justify-center" style={{  width: '75px', height: '30px', textAlign: 'center'  }}>
          <a href="/adduser" className="inline-block">
          <button className="w-[70px] h-[30px] bg-black rounded-full flex items-center justify-center text-white font-bold py-2 px-4">
          <img src={User}alt="Icon" className="inline-block h-4 w-4 mr-2" />User
  </button>
  </a>
  </div>
  <div className="flex mt-[50px] ml-[-1150px] justify-center">
  <div className="w-[280px] h-[65px] border rounded-lg bg-gray-300 mr-4 flex items-center px-4">
  <img src={totalCases} alt="Icon" className="w-8 h-8 mr-2" />
  <div className="flex flex-col ml-6 whitespace-nowrap">
    <p className="text-base font-bold">Total Cases</p>
    <p className="text-xs">All active cases</p>
  </div>
  <p className="text-4xl ml-8  font-extrabold self-end  mb-2" >100</p>
</div>

<div className="w-[280px] h-[65px] border rounded-lg bg-gray-300 mr-4 flex items-center px-4">
  <img src={civilCases} alt="Icon" className="w-8 h-8 mr-2" />
  <div className="flex flex-col">
    <p className="text-base font-bold">Civil Cases</p>
    <p className="text-xs">All active Civil cases</p>
  </div>
  <div className="flex flex-col ml-8">
      <p className="text-xs  self-end">37.00%</p>
      <p className="text-4xl font-extrabold self-end mb-1">086</p>
    </div>
        </div>
        <div className="w-[280px] h-[65px] border rounded-lg bg-gray-300 mr-4 flex items-center px-4">
  <img src={criminaalCases} alt="Icon" className="w-8 h-8 mr-2" />
  <div className="flex flex-col whitespace-nowrap">
    <p className="text-base font-bold">Criminal Cases</p>
    <p className="text-xs">All active Criminal cases</p>
  </div>
  <div className="flex flex-col ml-6">
      <p className="text-xs  self-end">37.00%</p>
      <p className="text-4xl font-extrabold self-end mb-1">037</p>
    </div>
        </div>
        <div className="w-[280px] h-[65px] border rounded-lg bg-gray-300 mr-4 flex items-center px-4">
  <img src={longPending} alt="Icon" className="w-8 h-8 mr-1" />
  <div className="flex flex-col whitespace-nowrap">
    <p className="text-base font-bold">Long-pending Cases</p>
    <p className="text-xs">Cases over 1 year old</p>
  </div>
  <div className="flex flex-col ml-1">
      <p className="text-xs  self-end">37.00%</p>
      <p className="text-4xl font-extrabold self-end mb-1">063</p>
    </div>
        </div>
      </div>
      <div className="flex mt-[130px] ml-[-1183px] justify-center">
      <div className="w-[280px] h-[65px] border rounded-lg bg-gray-300 mr-4 flex items-center px-4">
  <img src={totalClients} alt="Icon" className="w-8 h-8 mr-2" />
  <div className="flex flex-col">
    <p className="text-base font-bold">Total Clients</p>
    <p className="text-xs whitespace-nowrap">All Clients of the firm</p>
  </div>
  <p className="text-4xl ml-8  font-extrabold self-end  mb-2" >100</p>
</div>
        <div className="w-[280px] h-[65px] border rounded-lg bg-gray-300 mr-4 flex items-center px-4">
  <img src={activeClients} alt="Icon" className="w-8 h-8 mr-2" />
  <div className="flex flex-col whitespace-nowrap">
    <p className="text-base font-bold">Active Clients</p>
    <p className="text-xs">All active Clients</p>
  </div>
  <div className="flex flex-col ml-6">
      <p className="text-xs  self-end">37.00%</p>
      <p className="text-4xl font-extrabold self-end mb-1">199</p>
    </div>
        </div>
        <div className="w-[280px] h-[65px] border rounded-lg bg-gray-300 mr-4 flex items-center px-4">
  <img src={inactiveClients} alt="Icon" className="w-8 h-8 mr-2" />
  <div className="flex flex-col whitespace-nowrap">
    <p className="text-base font-bold">Inactive Clients</p>
    <p className="text-xs">All inactive Clients</p>
  </div>
  <div className="flex flex-col ml-6">
      <p className="text-xs  self-end">37.00%</p>
      <p className="text-4xl font-extrabold self-end mb-1">060</p>
    </div>
        </div>
        <div className="w-[280px] h-[65px] border rounded-lg bg-gray-300 mr-4 flex items-center px-4">
  <img src={totalPortal} alt="Icon" className="w-8 h-8 mr-2" />
  <div className="flex flex-col whitespace-nowrap">
    <p className="text-base font-bold">Total Portal Users</p>
    <p className="text-xs">All users of the firm</p>
  </div>
  <div className="flex flex-col ml-3">
      <p className="text-xs  self-end">37.00%</p>
      <p className="text-4xl font-extrabold self-end mb-1">199</p>
    </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between px-6 mt-[70px] ml-[-1230px]">
        <p className="text-black text-lg font-semibold mr-4 whitespace-nowrap">Proceedings this week</p>
        <label className="slider">
          <input type="checkbox" onChange={toggleColorMode} />
          <span className="slider-track">
            <span className="slider-thumb" style={{zIndex:1}}> On</span>
          </span>
          <span className="slider-label-on"></span>
        <span className="slider-label-off">Off</span>
        </label>
      </div>

      <img src={info} style={{width:"15px", height:"15px", marginTop:"345px", marginLeft:"-15px"}}/>
      <div className="flex items-center justify-between px-6 mt-[70px] ml-[40px]">
        
      <div className="priority-buttons">
      <button
        className={`priority-button ${selectedPriority === 1 ? 'selected' : ''}`}
        onClick={() => handlePriorityChange(1)}
      >
        Priority 1
      </button>
      <button
        className={`priority-button ${selectedPriority === 2 ? 'selected' : ''}`}
        onClick={() => handlePriorityChange(2)}
      >
        Priority 2
      </button>
      <button
        className={`priority-button ${selectedPriority === 3 ? 'selected' : ''}`}
        onClick={() => handlePriorityChange(3)}
      >
        Priority 3
      </button>
      <span
        className="selected-indicator"
        style={{ left: `${selectedPriority * 106 - 106}px` }}
      ></span>
    </div>
    </div>
    <img src={info} style={{width:"15px", height:"15px", marginTop:"345px", marginLeft:"-15px"}}/>
      <div className="flex items-center justify-between px-8 mt-[70px] ml-[90px]">
        
      <div className="case-type-buttons">
      <button
        className={`case-type-button ${selectedType === 'civil' ? 'selected' : ''}`}
        onClick={() => handleTypeChange('civil')}
      >
        Civil
      </button>
      <button
        className={`case-type-button ${selectedType === 'criminal' ? 'selected' : ''}`}
        onClick={() => handleTypeChange('criminal')}
      >
        Criminal
      </button>
      <button
        className={`case-type-button ${selectedType === 'all' ? 'selected' : ''}`}
        onClick={() => handleTypeChange('all')}
      >
        All
      </button>
      <span
        className="selected-indicator"
        style={{ left: `${(selectedType === 'civil' ? 1 : selectedType === 'criminal' ? 2 : 3) * 106 - 106}px` }}
      ></span>
    </div>

      </div>
       <div className="table-container  ml-[-1280px] mt-[1000px] " style={{marginTop:"400px"}}>
       <table className="table" style={{width:"1290px"}}>
        <thead>
          <tr>
          <th>
  <img src={star} alt="Image Alt Text" style={{ width: '20px', height: '18px',marginLeft:"16px" }} />
</th>

            <th onClick={() => requestSort('caseId')} className={sortConfig && sortConfig.key === 'caseId' && 'active'}>
              <div className="header-content">
                <span>Case id</span>
                <span className="sort-indicator">
                  <i className="up-arrow"></i>
                  <i className="down-arrow"></i>
                </span>
              </div>
            </th>
            <th onClick={() => requestSort('number')} className={sortConfig && sortConfig.key === 'number' && 'active'}>
              <div className="header-content">
                <span style={{marginLeft:"30px"}}>Number</span>
                <span className="sort-indicator">
                  <i className="up-arrow"></i>
                  <i className="down-arrow"></i>
                </span>
              </div>
            </th>
            <th>Title</th>
            <th onClick={() => requestSort('type')} className={sortConfig && sortConfig.key === 'type' && 'active'}>
              <div className="header-content">
                <span style={{marginLeft:"15px"}}>Type</span>
                <span className="sort-indicator">
                  <i className="up-arrow"></i>
                  <i className="down-arrow"></i>
                </span>
              </div>
            </th>
            <th onClick={() => requestSort('clientName')} className={sortConfig && sortConfig.key === 'clientName' && 'active'}>
              <div className="header-content">
                <span>Client Name</span>
                <span className="sort-indicator">
                  <i className="up-arrow"></i>
                  <i className="down-arrow"></i>
                </span>
              </div>
            </th>
            <th>Court Name</th>
            <th onClick={() => requestSort('advocateName')} className={sortConfig && sortConfig.key === 'advocateName' && 'active'}>
              <div className="header-content">
                <span>Advocate Name</span>
                <span className="sort-indicator">
                  <i className="up-arrow"></i>
                  <i className="down-arrow"></i>
                </span>
              </div>
            </th>
            <th onClick={() => requestSort('status')} className={sortConfig && sortConfig.key === 'status' && 'active'}>
              <div className="header-content">
                <span>Status</span>
                <span className="sort-indicator">
                  <i className="up-arrow"></i>
                  <i className="down-arrow"></i>
                </span>
              </div>
            </th>
            <th>
            <div className="search-container">
    <input type="text" className="search-input" placeholder="Search..." />
    <span img src="../assets/Images/dashboard/search.png"></span>
  </div>
            </th>
          </tr>
        </thead>
        <tbody>
        {sortedData().map((item, index) => (
  <tr key={index}>
    <td><img src={star1} style={{ width: '40px', height: '16px' }} alt="Image" /></td>
    <td>{item.caseId}</td>
    <td>{item.number}</td>
    <td>{item.title}</td>
    <td>{item.type}</td>
    <td>{item.clientName}</td>
    <td>{item.courtName}</td>
    <td>{item.advocateName}</td>
    <td>{item.status}</td>
    <td>
      {index === 0 && (
        <>
                <div style={{ display: 'flex', flexDirection:"row"}}>

          <img src={view} style={{ width: '15px', height: '11.46px' , marginRight:"20px"}} alt="Icon 1" />
          <img src={citation} style={{ width: '14px', height: '13px', marginRight:"20px" }} alt="Icon 2" />
          <img src={printicon} style={{ width: '16px', height: '16px', marginRight:"20px", marginTop:"-2px" }} alt="Icon 3" />
          <img src={deleteicon} style={{ width: '10px', height: '12px' }} alt="Icon 4" />
          </div>
        </>

      )}
    </td>
  </tr>
))}

        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Dashboard;
