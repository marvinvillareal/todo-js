import { createSlice } from '@reduxjs/toolkit';
import TodoItem  from "../../models/TodoItem";
import type { PayloadAction } from '@reduxjs/toolkit';


const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as TodoItem[],
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.push(action.payload)
    }
  }
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer