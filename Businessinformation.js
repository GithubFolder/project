import React,{useState} from 'react';
import { GoLocation } from "react-icons/go";
import axios from 'axios';

function Businessinformation() {

  const [businessname,setBusinessname] = useState('');
  const [businesscategorydropdown,setBusinesscategorydropdown] = useState('');
  const [businesstypedropdown,setBusinesstypedropdown] = useState('');
  const [location,setLocation] = useState('');
  const [pincode,setPincode] = useState('');
  const [geotagginginfo,setGeotagginginfo] = useState('');

  const [list,setList] = useState('');

  const handleSave = () => {
    axios.post("http://localhost:3002/create",{
     businessname:businessname,
     businesscategorydropdown:businesscategorydropdown,
     businesstypedropdown:businesstypedropdown,
     location:location,
     pincode:pincode,
     geotagginginfo:geotagginginfo,
    }).then(() => {
    //  console.log("success");
 
     setList([
       ...list,
       {
        businessname:businessname,
        businesscategorydropdown:businesscategorydropdown,
        businesstypedropdown:businesstypedropdown,
        location:location,
        pincode:pincode,
        geotagginginfo:geotagginginfo,
       }
     ])
    });
   };
  return (

    <div className='businessclass'>
        <h2 style = {{textAlign:'center', color : 'blue'}}>Businessinformation</h2>

        <center>
            <form>
                <div>
                  <label>Business name:</label><br/>
                  <input style = {{width:"200px",height:"20px",marginTop:"10px"}}type = "text" name = "businessname" onChange={(e) => setBusinessname(e.target.value)}/><br/>
                </div>

                <div>
                <label>Business Category:</label><br/>
                  <select style = {{width:"210px",height:"26px",marginTop:"10px"}}type = "text" name = "businesscategorydropdown" onChange={(e) => setBusinesscategorydropdown(e.target.value)}>
                      <option></option>            
                      <option>Manufacturing</option>
                      <option>Services</option>
                      <option>Trading</option>
                    </select><br/>
                </div>

                <div>
                  <label>Business type:</label><br/>
                  <select style = {{width:"210px",height:"26px",marginTop:"10px"}} type = "text" name = "businesstypedropdown" onChange={(e) => setBusinesstypedropdown(e.target.value)}>
                      <option></option>            
                      <option>Stationary Shop</option>
                    </select><br/>
                </div>  

                <div>
                    <label>Location:</label><br/>
                    <input style = {{width:"210px",height:"21px",marginTop:"10px"}} type = "text" name = "location" onChange={(e) => setLocation(e.target.value)}/>
                </div>

                <div>
                    <label>Pincode Business:</label><br/>
                    <input style = {{width:"210px",height:"20px",marginTop:"10px"}} type = "text" name = "pincode" onChange={(e) => setPincode(e.target.value)}/>
                </div>

                <div>
                    <label style={{padding:"20px"}}>Geo Taggig Info:</label><br/>
                    <input style = {{width:"210px",height:"20px",marginTop:"10px"}}type = "text" name = "geotagginginfo" onChange={(e) => setGeotagginginfo(e.target.value)}/>
                </div><br/>

                <div>
                   <button onClick={handleSave} style = {{width:"50px",height:"30px"}}>Save</button>
                   <button style = {{height:"30px"}}><GoLocation></GoLocation>Location</button>
                   <button style = {{width:"70px",height:"28px"}}>Cancel</button>
                </div>

            </form>
        </center>
    </div>
  )
}

export default Businessinformation;
