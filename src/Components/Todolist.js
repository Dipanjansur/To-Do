import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import TodoCard from './TodoCard';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const Todolist = ({ list, setlist})=>{
    return (
        <div>
<ul>
    {list.map(sinlist=>(
        <TodoCard items={list} key={sinlist.ids} item={sinlist} setitems={setlist}/>
    ))}
</ul>

        </div>
    )
}

export default Todolist
