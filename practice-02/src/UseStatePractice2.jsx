import { useState } from "react";

const student = {
  name: 'Toby',
  title: 'Student',
  age: 18,
  gender: 'male'
}
const UseStateWithObject = () => {
  const [Person, setPerson] = useState(student);
  return (
    <>
      <h3 className='title' style={{ color: "#D781E3" }}>A practice of useState hook with object:</h3 >
      <div className='main'>
        <h3 style={{ color: "#D781E3" }}>{Person.name}</h3>
        <h3 style={{ color: "#D781E3" }}>{Person.title}</h3>
        <h3 style={{ color: "#D781E3" }}>{Person.age}</h3>
        <h3 style={{ color: "#D781E3" }}>{Person.gender}</h3>
        <button type='button' onClick={() => {
          setPerson({ ...Person, name: 'Bob' });
        }}>Change name</button>
        <button type='button' onClick={() => {
          setPerson({
            name: 'Eva',
            title: 'Teacher',
            age: 28,
            gender: 'female'
          });
        }}>Change User</button>
      </div >
    </>
  );
}

export default UseStateWithObject;
