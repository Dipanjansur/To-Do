import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
const TodoCard = ({ item, items, setitems})=>{
  console.log(items);
 const ondonehandler=()=>{
setitems(items.map((thisit)=>{
if(thisit.ids===item.ids){
return{
    ...thisit, completed:!thisit.completed,
}
}
    return thisit;
}))
 }
    const onremovehandler=()=>{
setitems(items.filter((el)=>el.ids !==item.ids))
 }
 if(item.completed==false){
    return (
        <div>
        <Box display='flex' p={2} >
                <Box p={1}  width="60%">
            <TextField
                id="standard-read-only-input"
                        defaultValue={item.text}

                InputProps={{
                    readOnly: true,
                }}
            />
            </Box>
                <Box m={1}>
            <Button onClick={ondonehandler} variant="outlined" color="primary">
                Done
</Button>
            </Box>
                <Box m={1}>
            <Button onClick={onremovehandler} variant="outlined" color="secondary">
             Remove
</Button>
            </Box>
            </Box>
        </div>
    )
}
else{
     return (
         <div>
             <Box display='flex' p={2} m={2}>
                 <Box width="60%">
                     <TextField
                         error
                         id="standard-error-helper-text"
                         label="Done"
                         defaultValue={item.text}
                         />


                     
                 </Box>
                 <Box m={1}>
                     <Button onClick={ondonehandler} variant="outlined" color="primary">
                         Done
</Button>
                 </Box>
                 <Box m={1}>
                     <Button onClick={onremovehandler} variant="outlined" color="secondary">
                         Remove
</Button>
                 </Box>
             </Box>
         </div>
     )
}
}

export default TodoCard
