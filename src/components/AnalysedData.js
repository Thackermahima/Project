import React,{useState, useEffect} from 'react'
import '../App.css';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

 const AnalysedData = () => {
  const[category, setCategory] = useState("");
  const[semester, setSemester] = useState("");
  function randerInputs(){
    if(category == "grade"){
      return(
<div>
          <input type="text" style={{marginTop:"10px", padding:"10px 10px", borderRadius:"5px", marginBottom:"10px"}} placeholder="Enter Grade"/>
        </div>
              )
    }
    if(category == "Semester"){
      return(
<select
              style={{marginTop:"10px", padding:"10px 10px", borderRadius:"5px", marginLeft:"5px"}}
              value={category}
              name="semester"
              onChange={(e) => setSemester(e.target.value)}
              className="select-field"
            >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>

      </select>
      )

    }
    if(category == "spi" ){
      return(
        <input type="number" placeholder="Enter SPI above 5" style={{marginTop:"10px", padding:"10px 10px", borderRadius:"5px", marginBottom:"10px",marginLeft:"10px"}}/>
      )
    }
    console.log(semester,"Semester");
  }
  function onFormSubmit(e){
   e.preventDefault();
  }
  useEffect(() => {
    console.log(category,"Category");
  })
  return (
    <div
    style={{ backgroundColor: "#faf7f8", marginTop: "10%" }}
    className="col"
  >
    <div className="form-style-2 offset-4 row-8">
    <Typography fontSize={33} fontWeight='bold'  align="center" mt={25} textAlign='center'> 
     Analised your result here!
    </Typography>
     
    <form onSubmit={onFormSubmit}>
        
          <label for="field4">
            <span style={{fontSize:"23px"}}>Choose category for analysis</span><br />
            <select
              style={{marginTop:"10px", padding:"10px 10px", borderRadius:"5px"}}
              value={category}
              name="field4"
              onChange={(e) => setCategory(e.target.value)}
              className="select-field"
            >
            
            <option defaultChecked>Select category</option>
              <option value="grade">Grade</option>
              <option value="Semester">Semester</option>
              <option value="TopTen">Top-10</option>
              <option value="spi">SPI</option>
              <option value="fail">Fail</option>

{console.log(category,"Category")}
              {/* {
              category != "grade" ? ("") : (<input type="text" value = "Enter grade" />)
            } */}

            </select>
            { randerInputs()}
          </label>
            <span>   </span>
            <input
              type="submit"
              value="Search"
              style={{ backgroundColor: "#419f89", padding:"8px 8px", paddingLeft:"20px", paddingRight:"20px", color:"white", fontWeight:"bold", border:"1px solid black", borderRadius:"5px", fontSize:"15px"}}
            />
        </form>
      </div>
    </div>

    )
}
export default AnalysedData;
