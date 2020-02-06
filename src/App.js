import React from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import Form from './Components/Form';

function App() {
  return (
    <TodoListTemplate form={<Form/>}> 
      
    </TodoListTemplate>
  );
}

export default App;
