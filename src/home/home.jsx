import React, { useState, useEffect } from "react";
//import { Helmet } from 'react-helmet';
import styles from "./Home.module.css";
//import img from 'next/image';
//import { FaUser } from 'react-icons/fa';
import lawImage from '../assets/Images/home/law.png';
import opagueImage from '../assets/Images/home/opague.png';
import nyayahImage from '../assets/Images/home/nyayah1.png';
import homeIcon from '../assets/Images/home/home.png';
import pricingIcon from '../assets/Images/home/pricing.png';
import aboutIcon from '../assets/Images/home/aboutus.png';
import loginIcon from '../assets/Images/home/logout.png';
import drafting from '../assets/Images/home/drafting.png';
import AIpowered from '../assets/Images/home/ai-powered.png';
import andMore from '../assets/Images/home/and-more.png';
import docVerify from '../assets/Images/home/doc-verify.png';
import intelligentCit from '../assets/Images/home/intelli-citations.png';
import line1 from '../assets/Images/home/line1.png';
import line2 from '../assets/Images/home/line2.png';
import line3 from '../assets/Images/home/line3.png';
import line4 from '../assets/Images/home/line4.png';
import doubleQuotes from '../assets/Images/home/double-inverted.png';
import doubleQuotes1 from '../assets/Images/home/double-inverted1.png';
import verticalLine from '../assets/Images/home/verticalLine.png';
import mailIcon from '../assets/Images/home/new_mail.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import userid from '../assets/Images/home/userid.png';
import password1 from '../assets/Images/home/password.png';
//import { FaMagnifyingGlass, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import loginImage from '../assets/Images/home/loginImage.png';
import loginImageHover from '../assets/Images/home/loginhover.png';
import loginImageActive from '../assets/Images/home/afterlogin.png';
import { useNavigate } from "react-router-dom";
import visible from '../assets/Images/home/visible.png';
import invisible from '../assets/Images/home/invisibleIcon.png';

const Home = () => {
  const [showPricing, setShowPricing] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const toggleFormVisibility2 = () => {
    setShowForm2(!showForm2);
  };

  const handleHomeClick = () => {
    setShowPricing(false); 
    setShowAboutUs(false);
    setShowLoginForm(false);
    setShowForm2(false);
   
  };

  const handleAboutUsClick = () => {
    setShowAboutUs(true); 
    setShowPricing(false); 
    setShowForm(false);
    setShowForm2(false);
  };

  const handlePricingClick = () => {
    setShowPricing(true);
    setShowForm(false);
  }
  const handleLoginClick = () => {
    setShowAboutUs(false); 
    setShowPricing(false); 
    setShowLoginForm(true);
    setShowForm(false);
    setShowForm2(false);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    // if (username.trim() === '') {
    //   setErrorMessage('Please enter your username.');
    //   return; 
    // }

    // if (password.trim() === '') {
    //   setErrorMessage('Please enter your password.');
    //   return; 
    // }

    // if (username.trim() === '' || password.trim() === '') {
    //   setErrorMessage('Please enter username and password.');
    //   return; 
    // }

    try {
      if (!username || !password) {
        // If either username or password is empty, do not proceed with the API call
        return;
      }
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        navigate("/dashboard");
        console.log('Login successful!');
        setErrorMessage('');
        if (responseData && responseData.response === 'success') {
          setSuccessMessage(responseData.data);
        }
      } else {
        if (responseData && responseData.detail && responseData.detail.response === 'fail') {
          console.error('Login failed:', responseData.detail.data); 
          setErrorMessage(responseData.detail.data); 
          setSuccessMessage('');
        } else {
          console.error('An unknown error occurred while logging in.');
          setErrorMessage('An unknown error occurred while logging in.');
          setSuccessMessage('');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('An error occurred while logging in.');
      setSuccessMessage('');
    }

  };


  return (
    <div className={styles.backgroundContainer} >
    {/* Background Images */}
    <div className={styles.backgroundImageBack} style={{ width: "1390px", height: 862,marginTop: -30, backgroundImage: `url(${lawImage})`, backgroundSize: 'cover', backgroundPosition: 'center', marginLeft:"-100px" }}>
    </div>
    <div className={styles.backgroundImageFront} style={{width: "1390px", height: 892, marginTop: -892, backgroundImage: `url(${opagueImage})`, backgroundSize: 'cover', backgroundPosition: 'center', marginLeft:"-100px" }}>
    </div>
      <div className={styles.logoContainer} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <img src={nyayahImage} alt="Nyayah Logo" width={260} height={148} />
      </div>
  <div className={styles.navigationContainer} style={{ position: 'absolute', top: '26px', marginLeft:"320px",cursor:'pointer',left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', fontFamily: 'Open Sans', fontSize: '16px', fontWeight: '600' }}>
  <div className={styles.navigationItem} style={{ display: 'flex', alignItems: 'center' }}>
    <img src={homeIcon} alt="Home Icon" width={20} height={17} style={{ marginRight: '5px' }} />
    <span style={{ marginRight:"20px" }} onClick={handleHomeClick}>Home</span>
  </div>
  <div className={styles.navigationItem} style={{ display: 'flex', alignItems: 'center',marginRight:"30px" }}>
    <img src={pricingIcon} alt="Pricing Icon" width={11.39} height={11} style={{ marginRight: '0px' }} />
    <span style={{ marginLeft: '5px' }}onClick={ handlePricingClick}>Pricing</span>
  </div>
  <div className={styles.navigationItem} style={{ display: 'flex', alignItems: 'center' }}>
    <img src={aboutIcon} alt="About Icon" width={25.03} height={22.17} style={{ marginRight: '0px' }} />
    <span style={{ marginLeft: '5px' ,whiteSpace:"nowrap"}}onClick={handleAboutUsClick}>About Us</span>
  </div>
  <div className={styles.navigationItem} style={{ display: 'flex', alignItems: 'center', marginLeft:"30px" }}>
    <img src={loginIcon} alt="Login Icon" width={19.95} height={20} style={{ marginRight: '0px' }} />
    <span style={{ marginLeft: '5px' }}onClick={handleLoginClick}>Login</span>
  </div>
</div>
{showPricing ? (
    <div style={{ position: 'absolute', left: '830px', top: '144px', width: '364px', height: '423px', fontFamily: 'Open Sans', fontWeight: '600', fontSize: '10px', fontStyle: 'italic' }}>
    {/* Pricing Content */}
    <div className={styles.pricingContainer} style={{ fontFamily: 'Open Sans', fontWeight: '600', fontSize: '18px', fontStyle: 'italic' }}>
    <p style={{ fontSize: '18px', lineHeight: '3' , textAlign:"center"}}>
    <img src={doubleQuotes} alt="First Inverted Comma" width={25} height={30}style={{ position:"absolute",marginTop: '12px' }} />
      Initiate an evaluative period <br />
      of our legal app, sans any <br />
      pecuniary obligation. <br />
      </p>
      <p style={{ fontSize: '18px', lineHeight: '3' , textAlign:"center"}}>
      Subscription may be effectuated <br />
      subsequent to attainment of comfort <br />
      and assurance in its efficacy.
      <img src={doubleQuotes1}alt="Second Inverted Comma" width={25} height={20}style={{ marginTop: '-23px', marginLeft:"350px" }} />
    </p>
    <div className={styles.buttonContainer} style={{ width: '370px', height: '30px', backgroundColor: 'black', display: 'flex', justifyContent: 'center', marginTop:"100px", alignItems: 'center', borderRadius:"5px", fontFamily:"Open Sans",fontSize:"15px", fontWeight:"500" }}>
    <button className={styles.button} style={{ color: 'white', backgroundColor: 'black',fontSize:"14px",  border: 'none', textAlign: 'center', cursor: 'pointer' }} onClick={toggleFormVisibility2}>Get started with Nyayah - just contact us!</button>
    </div>
      {/* Add your pricing content here */}
      
    </div>
  </div>
) : showAboutUs ? (
  <div className={styles.aboutUsContainer} style={{ position:"absolute", width: '600px', height: 'auto', top: '120px', left: '120px' }}>
    <div className={styles.aboutUsContent}style={{textAlign:"left"}}>
    <h2 style={{ fontFamily: 'Open Sans', fontSize: '40px', fontWeight: 'bold' }}>About Nyayah</h2>
    <br></br>
    <p style={{ fontFamily: 'Open Sans', fontSize: '12px', lineHeight: '1.5', fontWeight:500 , color:"#323232"}}>
    <a href="https://www.narmtech.com" target="_blank" rel="noopener noreferrer">
  <u>NARM Tech</u>
</a>
, herein referred to as "the Company," is dedicated to the development<br/>
and implementation of cutting-edge AI and LLM applications, aimed at augmenting 
the capabilities of legal professionals and firms. 
Our vision is centered on equipping advocates and legal entities with 
advanced tools to enhance their efficiency and effectiveness in legal practice.<br/></p>
<br></br>
<p style={{ fontFamily: 'Open Sans', fontSize: '12px', lineHeight: '1.5', fontWeight:500 , color:"#323232"}}>
<b>Key Features:<br/>
1. Nyayah, our flagship AI-powered platform, revolutionizes legal drafting by
significantly accelerating the process while imbuing documents with a 
personalized touch through personification.<br/>
<br></br>

2. Leveraging Nyayah ensures a notable improvement in citation accuracy,
reducing the time required for thorough legal research to mere minutes.<br/>
<br></br>

3. By utilizing Nyayah for property document verifications, 
the Company facilitates a seamless and tranquil experience for clients, 
ensuring the integrity and authenticity of legal documentation.<br/></b></p>
<br></br>

<p style={{ fontFamily: 'Open Sans', fontSize: '12px', lineHeight: '1.5', fontWeight:500 , color:"#323232"}}>

The Company operates within the bounds of all relevant legal frameworks and 
regulations, prioritizing compliance and ethical conduct in all endeavors. 
Our commitment to excellence extends to safeguarding client confidentiality and  
upholding the highest standards of professionalism in every aspect of our operations. <br/></p>
<br></br>
<br></br>
<br></br>

<p style={{ fontFamily: 'Open Sans', fontSize: '12px', lineHeight: '1.5', fontWeight:600 , color:"#323232" , marginTop:"-45px"}}>
  <img src={mailIcon} alt="Mail Icon" width="16" height="17" style={{ display: "inline-block", verticalAlign: "middle",marginRight:"5px" }} />
  <u><a href="mailto:info@nyayah.in">info@nyayah.in</a></u>| 
  <u><a href="mailto:sales@nyayah.in">sales@nyayah.in</a></u>
</p>

    </div>
    <img src={verticalLine} alt="Vertical Line" style={{ position: 'absolute', left: '640px', top: '20px', height: '547px' }} />
    <div className={styles.contactUsContainer} style={{ position:"absolute", left: '687px', top: '0px', width: '370px', height: '547px' }}>
    <h2 style={{ fontFamily: 'Open Sans', fontSize: '40px', fontWeight: 'bold', marginLeft:"-60px" }}>Contact Us</h2>
    {/*  contact form */}
    <form className={styles.contactForm} style={{fontFamily:"Open Sans",fontSize:"15px", fontWeight:"600", marginLeft:"30px"}}>
      <div className={styles.formGroup} style={{textAlign:"left",marginLeft:"20px"}}>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name"  placeholder=""   style={{ width: '336px',height:'25px', border: '2px solid #B2B2B2', borderRadius: '5px' ,marginBottom: '15px' }} />
      </div>
      <div className={styles.formGroup} style={{textAlign:"left",marginLeft:"20px"}}>
        <label htmlFor="mobile">Mobile Number</label><br />
        <input type="text" id="mobile" name="mobile" placeholder="" style={{ width: '336px', height:'25px' , border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}/>
      </div>
      <div className={styles.formGroup} style={{textAlign:"left",marginLeft:"20px"}}>
        <label htmlFor="email">Email Address</label><br />
        <input type="email" id="email" name="email"  placeholder="" style={{ width: '336px' , height:'25px', border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}/>
      </div>
      <div className={styles.formGroup} style={{textAlign:"left",marginLeft:"20px"}}>
        <label htmlFor="message">Message</label><br />
        <textarea id="message" name="message" rows="4" placeholder="" style={{ width: '336px', height:'174px' , border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}></textarea>
      </div>
      <button type="submit" className={styles.sendMessageButton} style={{ backgroundColor: 'black', height: '30px', width: '335px', borderRadius: '5px', border: 'none', color: '#fff', fontFamily:"Open Sans", fontWeight:600 , marginLeft:"22px", marginTop:"8px"}}>Send Message</button>
    </form>
  </div>
  </div>
  ) : showLoginForm ? (
    <div className={styles.loginFormContainer} style={{ position: 'absolute', fontFamily: "Poppins", left: '814px', top: '300px', width: '399px', height: '170px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>

  <div style={{ marginBottom: '20px', position: 'relative' }}>
    <img src={userid} alt="User Icon" style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)', width: '19px', height: '15px' }} />
    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderBottom: '1px solid #B2B2B2', borderLeft: 'none', fontFamily: 'Poppins', borderTop: 'none', borderRight: 'none', outline: 'none', width: '258px', padding: '5px 0', fontSize: '16px' }} required />
    {formSubmitted && username === '' && <p style={{ color: 'black', fontSize: '10px', position: 'absolute', top: 'calc(100% + 5px)', left: '50px'}}>This field is required.</p>}
    <span className="required-symbol" style={{ color: '#B2B2B2', position: 'absolute', left: 'calc(100% - 55px)', top: '50%', transform: 'translateY(-50%)' }}>*</span>
  </div>

  <div style={{ marginBottom: '20px', position: 'relative' }}>
  <img src={password1} alt="Password Icon" style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)', width: '19px', height: '19px' }} />
  <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderBottom: '1px solid #B2B2B2', fontFamily: 'Poppins', borderLeft: 'none', borderTop: 'none', borderRight: 'none', outline: 'none', width: '258px', padding: '5px 0', fontSize: '16px' }} required />
  {formSubmitted && password === '' && <p style={{ color: 'black', fontSize: '10px', position: 'absolute', top: 'calc(100% + 5px)', left: '50px' }}>This field is required.</p>}
  
  <span className="required-symbol" style={{ color: '#B2B2B2', position: 'absolute', left: 'calc(100% - 55px)', top: '50%', transform: 'translateY(-50%)' }}>*</span>
  <div
    style={{ position: 'absolute', left: '270px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
    onClick={togglePasswordVisibility}
  >
    {showPassword ? <img src={visible} alt="Visible" width="17px" height="17px" /> : <img src={invisible} alt="Invisible" width="15px" height="15px" />}
  </div>



      
          <button
          onClick={handleSubmit}
          className={styles.loginButton}
        >
        
          <img src={loginImage} alt="Login Button" className={styles.defaultImage} />
          <img src={loginImageHover} alt="Login Button" className={styles.hoverImage} />
          <img src={loginImageActive} alt="Login Button" className={styles.activeImage} />
        </button>

      </div>
      
    <div style={{ marginBottom: '20px', position: 'relative' }}>
  <p style={{ textDecoration: 'underline', fontSize: '10px' , color:"#323232", marginLeft:"175px", marginTop:"-10px"}}>Forgot Password?</p>
</div>
{errorMessage && <p style={{ color: 'black', marginTop:"35px" }}>{errorMessage}</p>}
{/* {successMessage && <p style={{ color: 'green', marginTop:"35px" }}>{successMessage}</p>} */}
    </div>
    
) : (
  
  <div>
    
    <div className={styles.imageContainer} style={{ position: 'absolute', top: '185px', left: '888px', textAlign: "center" }}>
      <img src={drafting} alt="img" width={120} height={120} />
      <p style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 600, marginTop: "-75px" }}>Drafting</p>
      <div className={styles.hoverBox}>
          <p> Quick and efficient <br/>
            generation of <br/>
            Personified Legal <br/>
            Forms and Documents</p>
        </div>
    </div>
    <div className={styles.imageContainer} style={{ position: 'absolute', top: '260px', left: '1017px', textAlign: "center" }}>
      <img src={AIpowered} alt="img" width={153} height={153} />
    </div>
    <div className={styles.imageContainer} style={{ position: 'absolute', top: '454px', left: '966px', textAlign: "center" }}>
      <img src={andMore} alt="img" width={120} height={120} />
      <p style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 600, marginTop: "-95px" }}>...<br></br>And<br></br>More</p>
      <div className={styles.hoverBox1} style={{marginTop:"50px"}}>
    <p> Document Verification <br/>
 and Creating Insights <br/>
and Reports </p>
  </div>
    </div>
    <div className={styles.imageContainer} style={{ position: 'absolute', top: '531px', left: '800px', textAlign: "center" }}>
      <img src={docVerify} alt="img" width={120} height={120} />
      <p style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 600, marginTop: "-85px" }}>Documents<br></br>Verification</p>
      <div className={styles.hoverBox2} style={{marginTop:"50px"}} >
    <p> Summarization<br/>
    of Judgments,<br/> 
    Paraphrasing <br/>
    of Documents</p>
  </div>
    </div>
    <div className={styles.imageContainer} style={{ position: 'absolute', top: '286px', left: '802px', textAlign: "center" }}>
      <img src={intelligentCit} alt="img" width={120} height={120} />
      <p style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 600, marginTop: "-85px" }}>Intelligent<br></br>Citations</p>
      <div className={styles.hoverBox3} style={{marginTop:"50px"}} >
      <p> Accurate AI/LLP <br/>
     Powered Citations <br/>
     with Ranking and <br/>
     Highlights </p>
    </div>
    </div>
    <div className={styles.iconContainer} style={{ position: 'absolute', marginLeft: '880.27px', top: '299.58px' }}>
      <img src={line1} alt="Icon" width={68.8} height={43.84} />
    </div>
    <div className={styles.iconContainer} style={{ position: 'absolute', left: '923.27px', top: '343.5px'}}>
      <img src={line2} alt="Icon" width={94} height={20.96} />
    </div>
    <div className={styles.iconContainer} style={{ position: 'absolute', left: '860.38px', top: '343.32px' }}>
      <img src={line3} alt="Icon" width={158} height={238.29} />
    </div>
    <div className={styles.iconContainer} style={{ position: 'absolute', left: '970.38px', top: '343.96px' }}>
      <img src={line4} alt="Icon" width={45.24} height={108.58} />
    </div>
  </div>
)}

{showAboutUs ? null : (
  <>
  {!showLoginForm && !showPricing && (
    <div className={styles.buttonContainer} style={{ position: 'absolute', left: '805px', top: '680px', width: '370px', height: '30px', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius:"5px" }}>
      <button className={styles.button} style={{ color: 'white', backgroundColor: 'black', border: 'none', textAlign: 'center',fontSize:"14px", cursor: 'pointer' }} onClick={toggleFormVisibility}>Contact us to know more</button>
    </div>
  )}
    <div className={styles.textContainer} style={{ position: 'absolute', left: '730px', top: '786px', width: '563px', height: '46px', fontFamily: 'Open Sans', fontSize: '10px' }}>
      © 2024 NARM Tech - an AI Products Company | Visited by 0,0,000 User | All Rights Reserved
    </div>
    <div className={styles.formContainer} style={{ position: 'absolute', left: '800px',top: '183px' , bottom: showForm ? '0px' : '-479px', width: '379px', height: '479px', backgroundColor: 'white', borderRadius: '5px', transition: 'bottom 0.5s ease-in-out', display: showForm ? 'block' : 'none' }}>
         
            <form className={styles.contactForm} style={{fontFamily:"Open Sans",fontSize:"15px", fontWeight:"600", marginLeft:"18px"}}>
      <div className={styles.formGroup} style={{textAlign:"left"}}>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name"  placeholder=""   style={{ width: '336px',height:'30px', border: '2px solid #B2B2B2', borderRadius: '5px' ,marginBottom: '15px' }} />
      </div>
      
      <div className={styles.formGroup} style={{textAlign:"left"}}>
        <label htmlFor="mobile">Mobile Number</label><br />
        <input type="text" id="mobile" name="mobile" placeholder="" style={{ width: '336px', height:'30px' , border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}/>
      </div>
      <div className={styles.formGroup} style={{textAlign:"left"}}>
        <label htmlFor="email">Email Address</label><br />
        <input type="email" id="email" name="email"  placeholder="" style={{ width: '336px' , height:'30px', border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}/>
      </div>
      <div className={styles.formGroup} style={{textAlign:"left"}}>
        <label htmlFor="message">Message</label><br />
        <textarea id="message" name="message" rows="4" placeholder="" style={{ width: '336px', height:'174px' , border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}></textarea>
      </div>
      <button type="submit" className={styles.sendMessageButton} style={{ backgroundColor: '#7A7A7A', height: '30px', width: '335px', borderRadius: '5px', border: 'none', color: '#fff', fontFamily:"Open Sans", fontWeight:600 ,marginLeft:"-20px"}}>Send Message</button>
      {/* Error message */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

    </form>
          </div>
          {/* for pricing */}
          <div className="absolute left-[827px] top-[310px] transform -translate-y-1/2" style={{ bottom: showForm2 ? '0px' : '-479px', width: '379px', height: '479px', backgroundColor: 'white', borderRadius: '5px', transition: 'bottom 0.5s ease-in-out', display: showForm2 ? 'block' : 'none' }}>
         
         <form className={styles.contactForm} style={{fontFamily:"Open Sans",fontSize:"15px", fontWeight:"600", marginLeft:"18px"}}>
   <div className={styles.formGroup} style={{textAlign:"left"}}>
     <label htmlFor="name">Name</label><br />
     <input type="text" id="name" name="name"  placeholder=""   style={{ width: '336px',height:'30px', border: '2px solid #B2B2B2', borderRadius: '5px' ,marginBottom: '15px' }} />
   </div>
   
   <div className={styles.formGroup} style={{textAlign:"left"}}>
     <label htmlFor="mobile">Mobile Number</label><br />
     <input type="text" id="mobile" name="mobile" placeholder="" style={{ width: '336px', height:'30px' , border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}/>
   </div>
   <div className={styles.formGroup} style={{textAlign:"left"}}>
     <label htmlFor="email">Email Address</label><br />
     <input type="email" id="email" name="email"  placeholder="" style={{ width: '336px' , height:'30px', border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}/>
   </div>
   <div className={styles.formGroup} style={{textAlign:"left"}}>
     <label htmlFor="message">Message</label><br />
     <textarea id="message" name="message" rows="4" placeholder="" style={{ width: '336px', height:'174px' , border: '2px solid #B2B2B2', borderRadius: '5px',marginBottom: '15px' }}></textarea>
   </div>
   <button type="submit" className={styles.sendMessageButton} style={{ backgroundColor: '#7A7A7A', height: '30px', width: '335px', borderRadius: '5px', border: 'none', color: '#fff', fontFamily:"Open Sans", fontWeight:600 ,marginLeft:"-20px"}}>Send Message</button>
   {/* Error message */}
   {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

 </form>
       </div>
  </>
)}



</div>

  );
};

export default Home;
