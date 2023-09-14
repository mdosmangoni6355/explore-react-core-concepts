import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer';
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['Sakib', 'Atik', 'Khakon', 'Osman', 'Prodip'];

  const books = [
    {id: 1, name: "Physics", price: 100},
    {id: 2, name: "Chemistry", price: 120},
    {id: 3, name: "Math metics", price: 140},
    {id: 4, name: "Biology", price: 195},
    {id: 5, name: "Economics", price: 210}
  ]

  const singers = [
    {id: 1, name: "Asif", age: 65},
    {id: 2, name: "Imran", age: 32},
    {id: 3, name: "Tahsan", age: 43},
    {id: 4, name: "Minar Rahman", age: 31},
    {id: 5, name: "Samz vai", age: 26}
  ]

  return (
    <>
      
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {/* {
        singers.map(singer => <Singer singer={singer}></Singer>)
      } */}

      {/* <Actor name="Bappa Raj"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}

      {/* <Todo 
        task="Learn React" 
        isDone={true}></Todo>
      <Todo 
        task="Core Concepts" 
        isDone={false}></Todo>
      <Todo 
        task="Try jsx" 
        isDone={true}></Todo> */}

      {/* <Device name="Laptop" price="53"></Device>
      <Device name="Mobile" price="40"></Device>
      <Device name="Watch" price="5"></Device>
      <Person></Person>
      <Student grade="A+" score="85"></Student>
      <Student grade={'A-'} score="75"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 23;
  const money = 20;
  const me = {name: 'Osman Goni', age: 23};
  return <h3>I am {me.name} with age: {me.age + money}</h3>
}

// function Developer(){
//     const developerStyle = {
//     margin: '20px',
//     padding: '20px',
//     border: '2px solid red',
//     borderRadius: '10px'
//   }
//   return (
//     <div style={developerStyle}>
//       <h4>I am a Developer</h4>
//       <p>Coding</p>
//     </div>
//   )
// }

function Developer(){
return (
  <div style={{
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '10px'
  }}>
    <h4>I am a Developer</h4>
    <p>Coding</p>
  </div>
)
}

const {grade, score} = {grade: '7', score:99}

function Student({grade = 'F', score = 0}){
  // console.log(grade, score);
  return  (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default App
