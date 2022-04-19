import { useState } from 'react'
import Todo from "../../../components/todos/Todo"
import Footer from "../../../components/layout/Footer"


const MyTodos = () => {
  const todos = [
    'Learn React',
    'Master React',
    'Explore the full React course',
  ]
  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/react', caption: 'React Refresher'},    
    {link: '/react/MyTodos', caption: 'My Todos'}
  ]
    
  return(
    <div>
      <h1>My Todos</h1>

      {todos.map(
        (todo, index) => 
          <Todo key={index} title={todo} />
      )}
      
      <Footer crumbs={crumbs} />
    
    </div>
  ) 
}
export default MyTodos