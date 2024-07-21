import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

import List from "./components/List";
import Input from "./components/Input";
import Container from "./components/Container";
import tasks from './dummy-tasks.json';


function App() {
  const [list, setList] = useState(tasks);

  function addToList(text) {
    const item = {
      id: list[list.length-1].id+1,
      description:  text,
      completed:  false
    }

    setList([...list, item]);
  }

  function deleteFromList(id) {
    let temp = [];

    for(let i of list) {
      if(i.id === id)
        continue;

      temp.push(i);
    }

    setList(temp);
  }

  function checkTask(id) {
    let temp = [];
    
    for(let i of list){
      if(i.id === id){
        i.completed = !i.completed;
      
        console.log(i);
      }
    
    temp.push(i);
    }

    setList(temp);
  }
  
  return <Container title='To Do List'>
    <h1><FontAwesomeIcon icon="fa-brands fa-youtube" /></h1>
      <Input onSubmit={addToList}/>
      <List items={list} onDelete={deleteFromList} onCheck={checkTask}/>
  </Container> 
}

export default App;