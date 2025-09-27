import './App.css'
import ToDo from './Todo';
import FOOD from './Food';
import Actor from './Actors';
import Singer from './Singer';
import Counter from './count';
import BatsMan from './Batsman';



function FirstComponent(){
  const name = "Moin";
  const age = 23;
  const isStudent = true;
  const style = {color : "blue", backgroundColor : "lightgrey"};

  const actors = ['Salman Shah', 'Shahrukh Khan', 'Manna Vai', 'Dipjol', 'Sakib khan'];

  const singers = [
    {id: 1, name: 'Shail', age: 56},
    {id: 2, name: 'MangerPo', age: 36},
    {id: 3, name: 'Anuv jain', age: 26}
  ];

  return (
    <div>
      <h1>React Core Concepts</h1>

      {
        singers.map(singer => <Singer key={singer.id} singer = {singer}></Singer>)
      }

      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }

      <ToDo task="Learn React" isDone={true}></ToDo>
      <FOOD food="Kacchi Biriyani" isHungry={true}></FOOD>
      <FOOD food="Tehari" isHungry={false}></FOOD>
      <FOOD food="Borhani" isHungry={true}></FOOD>
      <h1 style={style}>Hello, {name} 🫰🏻</h1>
      <p>My age is {age}</p>
      <p>Status: {isStudent ? "Student" : "Not a Student"}</p>
      <p>2 + 2 = {2 + 2}</p>

      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
      <Greeting name="Charlie" age={35} />

      <Developer name="Alice" tech="Java"/>
      <Developer name="Kamal" tech="Python"/>
      <Developer name="Bamal" tech="JavaScript"/>
      <Salami event="Rojar Eid" Taka="200"></Salami>
      <Salami event="Korbanir Eid" Taka="400"></Salami>
      <Salami event="Eid Shopping" Taka="1000"></Salami>
      <UserGreeting isLoggedIn={true}></UserGreeting>
      <UserGreeting isLoggedIn={false}></UserGreeting>
      <Status isOnline={true}></Status>
      <Status isOnline={false}></Status>
      <Notification count = {3}></Notification>
      <Notification count = {6}></Notification>
      <Counter></Counter>
      <BatsMan></BatsMan>
    </div>

    
  )
}

function Greeting({name, age}){
  return <h2>Hello, {name}! You are {age} years old.</h2>
}

function Developer({name, tech}){
  return(
    <div style={{border: "2px solid black", margin: "10px", padding: "10px", backgroundColor: "lightblue", color: "darkblue"}}>
      <h3>Developer: {name}</h3>
      <p>Tech: {tech}</p>
    </div>
  )
}

function Salami({event, Taka}){
  return(
    <div style={{border:"2px dotted green", margin: "10px", padding:"10px", backgroundColor:"lightseagreen", color:"red"}}>
      <h2>Event: {event} </h2>
      <p>Taka: {Taka} </p>
    </div>
  )
}

function UserGreeting({isLoggedIn}){
  if(isLoggedIn){
    return <h1>Welcome Back!</h1>;
  } else{
    return <h1>Please Log In</h1>;
  }
}

function Status({isOnline}){
  return <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
}

function Notification({count}){
  return(
    <div>
      <h1>Dashboard</h1>
      {count > 0 && <p>You have {count} new notifications</p>}
    </div>
  )
}

export default FirstComponent

