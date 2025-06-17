import React, { use, useState } from 'react';
import axios from "axios";

const url = "http://20.244.56.144/evaluation-service";

function App() {

  const[token,setToken] = useState(""); 
  const[numberid,setNumberid] = useState("p");
  const[result,setResult] = useState(null);


  const register = async () => {
    const res = await axios.post(`${url}/register`, {
      email : "e0322031@sret.edu.in",
      name : "Naresh RB",
      mobileNo : "8248981654",
      githubUsername : "Naresh0348",
      rollNo : "E0322031",
      collegeName : "Sri Ramachandra Institute of Higher Education and Research",
      accessCode : "xgAsNC",
    });
    alert(`Registered! ClientID: ${res.data.clientID}`);
    localStorage.setItem("clientID", res.data.clientID);
    localStorage.setItem("clientSecret", res.data.clientSecret);
  };

  const authenticate = async () => {
    const res = await axios.post(`${url}/auth`, {
      email : "e0322031@sret.edu.in",
      name : "Naresh RB",
      rollNo : "E0322031",
      accessCode : "xgAsNC",
      clientID : localStorage.getItem("clientID"),
      clientSecret : localStorage.getItem("clientSecret"),
    });
    setToken(res.data.access_token);
    alert("Authenticated!");
  };

  const fetchNumbers = async ()=> {
    try{
      const res = await axios.get(`${url}/numbers/${numberid}`,{
      headers : {
        Authorization :`Bearer ${token}`,
      },
    });
    setNumberid(res.data);
  }
  catch (err){
    alert("Failed to fetch");
  }

  };
    

  return (
    <>
    <h1>Authentication</h1>
    <button onClick={register}>Register</button>
    <button onClick={authenticate}>Authenticate</button>

    <select value={numberid} onChange={(e) => setNumberid(e.target.value)} 
      style={{
      padding: '8px 12px',
      borderRadius: '5px',
      backgroundColor: 'black',
      fontSize: '16px',
  }}>
        <option value="p">Prime (p)</option>
        <option value="f">Fibonacci (f)</option>
        <option value="e">Even (e)</option>
        <option value="r">Random (r)</option>
      </select>

    <button onClick={fetchNumbers} >Get Numbers</button>

    {result && (
      <div>
        <p><strong>Window Previous State:</strong> {JSON.stringify(result.windowPrevState)}</p>
          <p><strong>Window Current State:</strong> {JSON.stringify(result.windowCurrState)}</p>
          <p><strong>Numbers Fetched:</strong> {JSON.stringify(result.numbers)}</p>
          <p><strong>Average:</strong> {result.avg.toFixed(2)}</p>
      </div>
    )}
    </>

  )
}

export default App;
