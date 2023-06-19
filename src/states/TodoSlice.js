import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
    editTodo: (state, action) => {
        const { index, value } = action.payload;
        state[index] = value;
    },
    deleteAllTodos: (state) => {
        state.splice(0, state.length);
      },
  },
});

export const { addTodo, deleteTodo, editTodo ,deleteAllTodos} = TodoSlice.actions;
export default TodoSlice.reducer;