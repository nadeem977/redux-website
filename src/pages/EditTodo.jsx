import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo } from '../states/TodoSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [edit, setEdit] = useState('');

  useEffect(() => {
    if (todos.length > 0 && index >= 0 && index < todos.length) {
      setEdit(todos[index]);
    }
  }, [todos, index]);

  const handleInputChange = (event) => {
    setEdit(event.target.value);
  };

  const handleEditTodo = () => {
    dispatch(editTodo({ index: parseInt(index), value: edit }));
    const updatedTodos = todos.map((todo, i) => (i === parseInt(index) ? edit : todo));
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    navigate('/TodoApp');
  };
  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleEditTodo();
    }
  };

  return (
    <div className="container mt-5 pt-5" style={{ minHeight: '90vh' }}>
      <h1 className="text-center m-5" style={{ textTransform: 'uppercase' }}>
        Edit Your Todos
      </h1>
      <div>
        <textarea
          type="text"
          placeholder="Edit your todos"
          name="value"
          value={edit}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={{
            width: '100%',
            minHeight: '100px',
            borderRadius: '10px',
            border: '2px solid #9c27b0',
            outline: 'none',
            padding: '10px',
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleEditTodo}
          style={{ width: '100%' }}
        >
          Edit Todo
        </Button>
      </div>
    </div>
  );
};

export default EditTodo;
