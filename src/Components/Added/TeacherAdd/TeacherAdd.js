import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import './Teacher.css';

const TeacherAdd = () => {
    const [image, setImage] = useState(null);


    const [currency, setCurrency] = React.useState('EUR');


    const currencies = [
        {
          value: 'principal',
          label: 'principal',
        },
        {
          value: 'Vice Principal',
          label: 'Vice Principal',
        },
        {
          value: 'student coordinator',
          label: 'student coordinator',
        },
        {
          value: 'Teacher',
          label: 'Teacher',
        },
      ];
      const handleChange = (event) => {
        setCurrency(event.target.value);
      };
    return (
                
<section className="contact container" id="contact">

<h1 className="heading"><span>ADD</span> TEACHER</h1>

<div className="row"


component="form"
sx={{
  '& .MuiTextField-root': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"

>



 <form  action="">
        <h3>get in touch</h3>
        <input  
        required
        type="text" placeholder="your name" className="box"/>


        <input
         required
         type="email" placeholder="your email" className="box"/>


<div
    
      sx={{
        '& .MuiTextField-root': { m: '10px', width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
   
      <div>

        <TextField
        style={{width:'100%',fontSize:'2rem',padding:'5px'}}
        className="box"
       
          id="standard-select-currency-native"
          select
          label="Teacher catagory select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
         
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </div>







        <input 
         required
        type="tel" placeholder="subject" className="box"/>
        <textarea placeholder="more information" className="box" cols="30" rows="10"></textarea>
        <input type="submit" value="add teacher" className="btn"/>
    </form>


</div>

</section>
    );
};

export default TeacherAdd;