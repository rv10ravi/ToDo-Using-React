import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const handleToDo = () => {
    if(newTitle && newDescription){
      const newTodo = {
        title: newTitle,
        description: newDescription,
        isCompleted: false
      }
      setTodoList([...todoList, newTodo]);
      setNewTitle("");
      setNewDescription("");
    }
  }
  const deleteItem = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  const doneItem = (index) => {
    
  }

  return (
    <div className="App">
      <h1>My ToDo's</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-items">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Enter title" />
          </div>
          <div className="todo-input-items">
            <label>Description</label>
            <input type="text" value={newDescription}  onChange={(e)=>setNewDescription(e.target.value)} placeholder="Enter Your Description" />
          </div>
          <div className="todo-input-items">
            <button type="button" onClick={handleToDo} className="PrimaryBtn">Add</button>
          </div>
        </div>
        <div className="button-area">
            <button className={`secondaryBtn ${isCompleted===false && 'active'}`} onClick={()=>setIsCompleted(false)}>ToDo</button>
            <button className={`secondaryBtn ${isCompleted===true && 'active'}`} onClick={()=>setIsCompleted(true)}>Completed</button>
        </div>
        <div className="todo-list">
          {todoList.map((todo, index) => (
            <div className="todo-item" key={index}>
              <div className="todo-item-title">{todo.title}</div>
              <div className="todo-item-description">{todo.description}</div>
              <div className="todo-item-action">
                <button className='complete-btn' onClick={doneItem}>Done</button>
                <button className='delete-btn'onClick={deleteItem}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
