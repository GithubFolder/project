import React,{useState} from 'react'
import axios from 'axios';
import {BiCalendar} from "react-icons/bi";
import './Leadinformation.css';



function Leadinformation() {

    const [title,setTitle] = useState();
    const [firstname,setFirstName] = useState();
    const [middlename,setMiddlename] = useState();
    const [lastname,setLastname] = useState('');
    const [dateofbirth,setDateofbirth] = useState('');
    const [gender,setGender] = useState('');
    console.log(gender);
    const [phonenumber,setPhonenumber] = useState('');
    const [emailid,setEmailid] = useState('');
    const [languages,setLanguages] = useState('');
    const [currentloan,setCurrentloan] = useState('');
    const [purposeofloan,setPurposeofloan] = useState('');
    const [loanamount,setLoanamount] = useState('');
    const [customerproperty,setCustomerproperty] = useState('');
    const [propertyowner,setPropertyowner] = useState('');
    const [propertytype,setPropertytype] = useState('');
    const [propertyoccupancy,setPropertyoccupancy] = useState('');
    const [rooftype,setRooftype] = useState('');
    const [pincode,setPincode] = useState('');
    const [address,setAddress] = useState('');
    const [propertynature,setPropertynature] = useState('');
    const [loanagainst,setLoanagainst] = useState('');
    const [pincodecollateral,setPincodecollateral] = useState('');
    const [leadgen,setLeadgen] = useState('');
    
    

    const [list1,setList1] = useState('');

  const handleSave = () => {
    alert("data is submitted");
    // if(list1.values !== setList1){
    //   console.log("details are not submitted");
    // }else{
    //  console.log("form is submitted");
    // }

    axios.post("http://localhost:3002/create1",{
    title:title,
    firstname:firstname,
    middlename:middlename,
    lastname:lastname,
    dateofbirth:dateofbirth,
    gender:gender,
    phonenumber:phonenumber,
    emailid:emailid,
    languages:languages,
    currentloan:currentloan,
    purposeofloan:purposeofloan,
    loanamount:loanamount,
    customerproperty:customerproperty,
    propertyowner:propertyowner,
    propertytype:propertytype,
    propertyoccupancy:propertyoccupancy,
    rooftype:rooftype,
    pincode:pincode,
    address:address,
    propertynature:propertynature,
    loanagainst:loanagainst,
    pincodecollateral:pincodecollateral,
    leadgen:leadgen, 
    }).then(() => {
    //  console.log("success");
 
     setList1([
       ...list1,
       {
        title:title,
        firstname:firstname,
        middlename:middlename,
        lastname:lastname,
        dateofbirth:dateofbirth,
        gender:gender,
        phonenumber:phonenumber,
        emailid:emailid,
       languages:languages,
       currentloan:currentloan,
       purposeofloan:purposeofloan,
       loanamount:loanamount,
       customerproperty:customerproperty,
       propertyowner:propertyowner,
       propertytype:propertytype,
       propertyoccupancy:propertyoccupancy,
       rooftype:rooftype,
       pincode:pincode,
       address:address,
       propertynature:propertynature,
       loanagainst:loanagainst,
       pincodecollateral:pincodecollateral,
       leadgen:leadgen, 
       }
     ])
    });
   };


    //  const [data,setData] = useState({
    //     title:'',
    //     firstname:'',
    //     middlename:'', 
    //     lastname:'',
    //     dateofbirth:'', 
    //     gender:'',
    //     phonenumber:'',
    //     emailid:'',
    //     language:'',
    //     loanrequired:'',
    //     purposeofloan:'',
    //     loanamount:'',


    // })

    // const saveAlert = () => {

    // }

  return (
    <div>
        <h2 style = {{textAlign:"center", color: "green"}}>Leadinformation</h2>
        <center>
            {/* <form style = {{border:"solid",height : "auto", width : "auto"}} >  */}

            <form>
                <div>
                 <label className='aligntstyle1'>Title:</label>
                 <input style={{width:"40px"}} type = "radio" value = "mr" name = "text" onChange={e=>setTitle(e.target.value)}/>Mr
                 <input type = "radio" value = "miss" name = "text"  onChange={e=>setTitle(e.target.value)}/>Miss
                 <input type = "radio" value = "mrs" name = "text" onChange={e=>setTitle(e.target.value)}/>Mrs
                </div> <br/>
                
                <div>
                  <label className='aligntstyle1'>First Name:</label>
                  <input style = {{width:"210px",height:"20px"}} className="align1" type = "text" name = "firstname" onChange={e=>setFirstName(e.target.value)}/>
                </div><br/>

                <div>
                  <label className='aligntstyle1'>Middle Name</label>
                  <input  style = {{width:"210px",height:"20px",marginLeft:"-10px"}} type = "text" name = "middlename" onChange={e=>setMiddlename(e.target.value)}/>
                </div> <br/>

                <div>
                  <label className='aligntstyle1'>Last Name</label>
                  <input  style = {{width:"210px",height:"20px",marginLeft:"5px"}} type = "text" name = "lastname" onChange={e=>setLastname(e.target.value)}/>
                </div><br/>

                <div>
                  <label className='aligntstyle1'><BiCalendar></BiCalendar>Date of Birth</label>
                  <input style={{width:"210px",height:"20px",marginLeft:"-20px"}} type = "text" name = "dateofbirth" onChange={e=>setDateofbirth(e.target.value)}/>
                </div><br/>
               

                <div>
                 <label style={{marginRight:"150px"}} className='aligntstyle1'>Gender:</label>
                 <input style={{width:"20px"}} type = "radio" value = "male" name = "gender" onChange={e=>setGender(e.target.value)}/>Male
                 <input style={{width:"20px"}} type = "radio" value = "female" name = "gender" onChange={e=>setGender(e.target.value)}/>Female
                </div><br/>

                <div>
                 <label className='aligntstyle1'>Phone Number</label>
                 <input style={{width:"220px",height:"20px",marginLeft:"-30px"}} type = "text" name="phonenumber" onChange={e=>setPhonenumber(e.target.value)}/>
                </div><br/>
            
                <div>
                 <label className='aligntstyle1'>Email Id:</label>
                 <input style={{width:"220px",height:"20px",marginLeft:"10px"}} type = "text" name="emailid" onChange={e=>setEmailid(e.target.value)}/>
                </div><br/>

                <div>
                    <label className='aligntstyle1'>Languages:</label>
                      <select style={{width:"230px",height:"25px",marginLeft:"5px"}} type = "text" name = "languages" onChange={e=>setLanguages(e.target.value)}>
                        <option></option>            
                         <option>Telugu</option>
                         <option>Hindi</option>
                         <option>English</option>
                        <option>Tamil</option>
                    </select>
                </div><br/>

        
                <div>
                 <label style={{width:"220px",height:"40px",marginLeft:"10px"}} className='aligntstyle1'>Current Loan Required:</label>
                 <input style={{width:"150px",height:"20px",marginLeft:"-10px"}} type = "text" name="currentloan" onChange={e=>setCurrentloan(e.target.value)}/>
                </div><br/>

                <div>
                 <label className='aligntstyle1'>Purpose Of Loan:</label>
                 <input style={{width:"210px",marginLeft:"-20px",height:"20px"}} type = "text" name="purposeofloan" onChange={e=>setPurposeofloan(e.target.value)}/>
                </div><br/>

                <div>
                 <label className='aligntstyle1'>Loan Amount:</label>
                 <input style={{width:"210px",height:"20px",marginLeft:"10px",display:"felx"}} type = "text" name="loanamount" onChange={e=>setLoanamount(e.target.value)}/>
                </div><br/>
              
                <div>
                  <label style={{width:"210px",height:"20px",marginLeft:"10px",display:"felx"}}>Does customer or A family member own A property</label>
                  <input type = "radio" name = "customerproperty" value = "yes" onChange={e=>setCustomerproperty(e.target.value)}/>yes
                  <input type = "radio" name = "customerproperty"  value = "no" onChange={e=>setCustomerproperty(e.target.value)}/>No
                </div><br/>

                 
                <div>
                 <label  className='aligntstyle1'>Owner of the property:</label>
                 <input style={{width:"210px", height:"20px",marginLeft:"-30px"}} type = "text" name="propertyowner"onChange={e=>setPropertyowner(e.target.value)}/>
                </div><br/>

                <div>
                 <label className='aligntstyle1'>Property type:</label>
                 <input style={{width:"220px",height:"20px",marginLeft:"20px"}} type = "text" name="propertytype" onChange={e=>setPropertytype(e.target.value)}/>
                </div><br/>

                <div>
                 <label className='aligntstyle1'>Property occupancy:</label>
                 <input style={{width:"220px", height:"20px",marginLeft:"-20px"}} type = "text" name="propertyoccupancy" onChange={e=>setPropertyoccupancy(e.target.value)}/>
                </div><br/>

                <div>
                <label className='aligntstyle1'>Roof type:</label>
                <input style={{width:"230px",height:"20px",marginLeft:"40px"}} type = "text" name="rooftype" onChange={e=>setRooftype(e.target.value)}/>
                </div><br/>

                <div>
                <label className='aligntstyle1'>Pincode Residence:</label>
                <input style={{width:"220px",height:"20px",marginLeft:"-10px"}} type = "text" name="pincode" onChange={e=>setPincode(e.target.value)}/>
                </div><br/>

                <div> 
                <label className='aligntstyle1'>Address:</label>
                <input style={{width:"240px", height:"20px", marginLeft:"30px",marginRight:"-10px"}} type = "text" name="address" onChange={e=>setAddress(e.target.value)}/>
                </div><br/>
  
                <div>
                 <label className='aligntstyle1'>Nature of property:</label>
                 <input style={{width:"240px",height:"22px",marginLeft:"35x",marginRight:"30px"}} type = "text" name="propertynature" onChange={e=>setPropertynature(e.target.value)}/>
                </div><br/>

                <div>
                 <label className='aligntstyle1'>Outstanding loan against this property:</label>
                 <input style={{width:"100px",height:"20px",marginLeft:"-20px"}} type = "text" name="loanagainst" onChange={e=>setLoanagainst(e.target.value)}/>
                </div><br/>
    
                <div>
                 <label className='aligntstyle1'>Pincode collateral:</label>
                 <input style={{width:"200px",height:"25px",marginLeft:"10px"}} type = "text" name="Pincodecollateral" onChange={e => setPincodecollateral(e.target.value)}/>
                </div><br/>
 
                <div>
                    <label className='aligntstyle1'>Leadgen status:</label>
                    <select style={{width:"280px", height:"30px", marginLeft:"-10px"}} type = "text" name = "leadgen" onChange={e => setLeadgen(e.target.value)}>
                      <option></option>            
                      <option>Eligible</option>
                      <option>Gropped</option>
                      <option>New</option>
                    </select>
                </div><br/> 
                
                <div>
                   <button style={{width:"200px",height:"30px",marginLeft:"10px"}}>Eligibility</button>
                   <button style={{width:"200px",height:"30px",marginLeft:"10px"}} onClick={handleSave}>Save</button>
                </div><br/>
            </form>
        </center>
    </div>
  )
}

export default Leadinformation;
