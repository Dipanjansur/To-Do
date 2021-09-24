import react,{useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Form from './Components/Form';
import Todolist from './Components/Todolist';
import { Box } from '@material-ui/core';

function App() {
  const [input, setinput] = useState('');
  const [list, setlist] = useState([]);
  const [id, setid] = useState(0);
  return (
    <div className="App">
      <header>
        <h1 className="top_it">TO DO list</h1>
      </header>
      <Box p={4}>
     <Form setinput={setinput} input={input} setlist={setlist} list={list} setid={setid} id={id}/>
      </Box>
      <h2 className="hello_bro"> TO DO itmes</h2>
      <Box>
     <Todolist list ={list} setlist={setlist}/>
      </Box>
      <footer className="footer">
        <h2>This website is created using React.js and Material Ui</h2>
      </footer>
       </div>
  );
}

export default App;
