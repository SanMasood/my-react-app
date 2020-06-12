import React, { useState } from 'react';
import './styles.css'
const App = () => { //App being a component
  const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
    { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 }
];
 
  return (
    <>
    {contacts.map(contact => (
      <ContactCard
      avatar = "https://via.placeholder.com/150"
      name = {contact.name}
      email = {contact.email}
      age = {contact.age}
      />
    ))}
    </>
  );
}
const ContactCard = props => { //contactCard being another component
  //console.log(props.avatar);
  //console.log(props.name);
  //console.log(props.email);
  //console.log(props.age);

  const [showAge, setShowAge] = useState(false);//useState is a hook

  return ( 
  <div className="contact-card">
  <img src={props.avatar} alt="profile" />
  <div className="user-details">

    <p>Name: {props.name}</p>
    <p>Email: {props.email}</p>

    {showAge && <p>Age: {props.age}</p>}
    <button onClick={() => setShowAge(!showAge)}>
      Toggle Age!
    </button>

  </div>
</div>
)
}
export default App;

//JS variables are put in curly brackets like {message}
//Everything JS is put in curly brackets
//any markup in the return will get converted & rendered as HTML