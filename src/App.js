import React,{Component} from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import Form from './Components/Form';
import TodoItemList from './Components/TodoItemList';


let toDos = [];

class App extends Component {
  id=1;
  state={
    input :'',
    todos:toDos
  }

  handleChange= (e) => {
    this.setState({
      input:e.target.value
    });
  }


  handleCreate = () => {
    const { input, todos } = this.state;
    if(input !== ''){
      this.setState({
        input: '', // 인풋 비우고
        // concat 을 사용하여 배열에 추가
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false
        })
      });
    }
  
  }

  
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
      //눌러진 키 값이 Enter이면 handleCreate 호출
    }
  }

  handleToggle = (id) =>{
    const {todos} = this.state;
    //파라미터로 받은 아이디와 todoid를 확인해서 몇번째 아이템인지 확인
    const idx = todos.findIndex(todo => todo.id === id);
    const selected = todos[idx];
    const nextTodos = [...todos]; //배열 복사

    //기존의 아이템 checked 값을 바꾸기
    nextTodos[idx] = {
      ...selected,
      checked:!selected.checked
    };

    this.setState({
      todos:nextTodos
    });
  }

  handleRemove = (id) =>{
    const {todos} = this.state;
    this.setState({
      todos:todos.filter(todo => todo.id !== id)
      //파라미터 값으로 id를 받아와서 해당 id가 없는 배열을 새로 생성
    });
  }

  render(){
    const {input,todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
     
    } = this;

    return (
      <TodoListTemplate form={(
        <Form value={input} onKeyPress={handleKeyPress} onChange={handleChange}
        onCreate={handleCreate}/>
      )} > 
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove ={handleRemove}>
       
        </TodoItemList>
         
      </TodoListTemplate>
      
    );
  }
}

export default App;
