import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
const Form=(props)=>{
   
    const handlechanges=(event)=>{
props.setinput(event.target.value);
    }
    
    const submitchanges=()=>{
        props.setid(props.id+1);
        props.setlist([...props.list,{text:props.input,completed:false,ids:props.id}])
    }
    return (
        <div>
        <Box display='flex'>
                <Box width="75%">
                    <TextField onChange={handlechanges} value={props.input} required id="standard-required" label="Enter what to do" />
        </Box>
           <Box>
                    <Button onClick={submitchanges}
                variant="contained"
                color="primary">
                Send
      </Button>
                </Box>
      </Box>
        </div>
    )
}

export default Form;
