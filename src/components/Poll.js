// Poll.js

import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Poll = () => {
  const navigate = useNavigate();
  const [hasVoted, setHasVoted] = useState(false);

  const hangleLogout=()=>{
    navigate('/login')
   }
   
  
  const tdpimg = "data:image/png;base64,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"
  const janaimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp_2RMy0dilKUHKdsB_BVC-ren8Ynf-RGQQ&usqp=CAU"
  const ysrimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQce6lH3G45yX-rT0zEPk2Lz3hPbDjEYyAsbg&usqp=CAU"
  const [selectedOption, setSelectedOption] = useState('');

  const handleVote = async () => {
    if (!selectedOption) {
      alert('Please select an option');
      return;
    }

    try {
      if (hasVoted) {
        alert('You have already voted!');
      } else {
        await axios.post('http://localhost:4000/studentRoute/vote', { option: selectedOption });

        // Update the local state to indicate that the user has voted
        setHasVoted(true);

        alert('Vote submitted!');
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  // Fetch the user's vote status when the component mounts
  useEffect(() => {
    const checkVoteStatus = async () => {
      try {
        const response = await axios.get('http://localhost:4000/studentRoute/checkVoteStatus');
        setHasVoted(response.data.hasVoted);
      } catch (error) {
        console.error('Error checking vote status:', error);
      }
    };

    checkVoteStatus();
  }, []);

  return (
    
    <div>
       <ul className="nav justify-content-end">
        <li className="nav-item">
        <button type="button" onClick={hangleLogout} class="btn btn-danger">Log Out</button>
        </li>
       
      </ul>
      <h1>WELCOME TO ONLINE VOTING PORTAL</h1>
      <div>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <div className="card" style={{width: '18rem',marginTop:"50px",marginBottom:"50px"}}>
        <img src={ysrimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">YSRCP</h5>
        
          <button type="button" class="btn btn-outline-success me-2" onClick={() => setSelectedOption('YSRCP')}>Vote</button>
        </div>
      </div>
    </div>
    <div class="col">
    
    <div className="card" style={{width: '18rem',marginTop:"50px",marginBottom:"10px"}}>
        <img src={tdpimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">TDP</h5>
        
          <button type="button" class="btn btn-outline-success me-2" onClick={() => setSelectedOption('TDP')}>Vote</button>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card" style={{width: '18rem',marginTop:"50px",marginBottom:"50px"}}>
        <img src={janaimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">JANASENA</h5>
        
          <button type="button" class="btn btn-outline-success me-2" onClick={() => setSelectedOption('JANASENA')}>Vote</button>
        </div>
      </div>
     
      </div>
    </div>
  </div>
</div>
     
      
      <br />
      <center>
      <button className="btn btn-primary" onClick={handleVote} disabled={hasVoted}>
          {hasVoted ? 'Already Voted' : 'Submit your Vote'}  </button></center>
    </div>
  );
};

export default Poll;
