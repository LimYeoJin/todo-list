import React,{Component} from 'react';
import TodoItem from './TodoItem';


class TodoItemList extends Component{
    //값이 다를 때만 렌더링함
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render(){
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(({id, text, checked})=>(
            <TodoItem id={id} text={text} checked={checked} 
            onToggle={onToggle} onRemove={onRemove} key={id}/>
        ));
        return(
            <div>
              {todoList}
            </div>
        );
    }
}

export default TodoItemList;