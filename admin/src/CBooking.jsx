import React from 'react';
import { useState,useEffect} from "react";
import './CBooking.css';

function Bookings() {
    const [data,setData]=useState([]);
    useEffect (()=>{
      fetch("http://localhost:5000/allbooking", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*", },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data); 
      });
    },[]);
  return (
    <div className='Rooms'>
    <div><h1 style={{textAlign:'center',marginTop:20,fontSize:60,fontFamily:'CerebriSans-Regular, -apple-system, BlinkMacSystemFont, Roboto'}}>All Bookings</h1></div>
    <div className='ROWIII'>
      <div className='COLII'></div>
    <div className='COLIII'>
    { data.map((i)=>{
            return (      
            <div className="card" style={{height:300,width:1000,marginLeft:0,marginTop:30,marginBottom:20}}>
            <div className='row'>
              <div className='col' style={{marginRight:100}}><img src={i.image} style={{margin:10,height:280,width:380}} alt="alt"/></div>
              <div className='col' style={{marginLeft:-100,marginTop:10}}>
                <h2>{i.name}</h2>
                <h2>{i.hname}</h2>
                <h3>Bookid : {i.bookid}</h3>
                <h3>Date : {i.rdate}</h3>
                <h3>No of Nights : <b>{i.nfdate}</b></h3>
              </div>
              <div className='col'><h2 style={{marginTop:'50%',marginLeft:'15%',fontSize:50}}><b>Rs:{i.amount}</b></h2>
                </div>
              </div>
          </div>);
            })
          }
</div></div>
    </div>
  )
}

export default Bookings