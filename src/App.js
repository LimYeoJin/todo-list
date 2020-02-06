import React from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import Form from './Components/Form';
import TodoItemList from './Components/TodoItemList';

function App() {
  return (
    <TodoListTemplate form={<Form/>} children={<TodoItemList/>}> 
      
    </TodoListTemplate>
  );
}

export default App;
