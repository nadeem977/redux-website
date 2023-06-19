import React,{useState,useEffect} from 'react'
import {Button,Input} from '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo,deleteTodo,deleteAllTodos} from '../states/TodoSlice';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';



const TodoApp = () => {

const navigate = useNavigate();
const dispatch = useDispatch();
const todos = useSelector((state) => state.todo);
const [data, setData] = useState({ value: '' });
const [search ,setSearch] = useState('')




useEffect(() => {
  const storedData = localStorage.getItem('todos');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    dispatch(deleteAllTodos())
    parsedData.forEach((todo) => dispatch(addTodo(todo)));
  }
}, [dispatch]);

const handelfunc = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleData();
    }
  };

  const handleData = () => {
    const storedData = localStorage.getItem('todos');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const updatedData = [...parsedData, data.value];
    localStorage.setItem('todos', JSON.stringify(updatedData));
    dispatch(addTodo(data.value));
    setData({ value: '' });
  };


  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
    const storedData = localStorage.getItem('todos');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const updatedData = parsedData.filter((_, i) => i !== index);
      localStorage.setItem('todos', JSON.stringify(updatedData));
    }
  };

  const handelEdit = (index) => {
      navigate(`/EditTodo/${index}`)
  };
  

  const filterTodos = todos.filter((todo) => {
    return todo.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <>
      <div className="container mt-5 pt-5" style={{ minHeight: '90vh' }}>
        <h1 className="text-center m-5" style={{textTransform:'uppercase'}}>This site will make your day</h1>
        <div>
          <textarea
            type="text"
            placeholder="Add your todos"
            name="value"
            onChange={handelfunc}
            onKeyPress={handleKeyPress}
            value={data.value}
            style={{width:'100%',minHeight:'100px',borderRadius:'10px',border:'2px solid #9c27b0',outline:'none',padding:'10px'}}
          />
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleData}
            style={{width:'100%'}}
          >
            ADD TODO
          </Button>
        </div>


       <div className='mt-2'> 
       <Input placeholder='search...' onChange={(e)=>setSearch(e.target.value)} />
       <Button><SearchIcon/></Button><br />
       <p>    Result: {filterTodos.length}</p>
       </div>


        {filterTodos.map((item, index) => (
          <div className="todos" key={index}>
            <div style={{textTransform:"capitalize"}}><span style={{color:'#1976d2',fontWeight:'600'}}>TODO:</span> {item}</div>
            <span>
              <Button
                variant="contained"
                className="m-1 "
                onClick={() => handelEdit(index)}
              >
                <ModeEditOutlineIcon /> EDIT
              </Button>
              <Button
                variant="contained"
                onClick={() => handleDelete(index)}
              >
                <DeleteForeverIcon /> DELETE
              </Button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoApp;
