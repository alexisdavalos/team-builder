import React, {useState} from 'react';
import './App.css';
import MemberForm from './components/MemberForm/MemberForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding:5%;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`

function App() {
  const [members, setMembers] = useState([
    {
      name: 'Alexis',
      email: 'alexisdavalos.tech@gmail.com',
      role: 'Software Engineer: React'
    }
  ])
  const addMember = members =>{
      const newMember = {
        name: members.name,
        email: members.email,
        role: members.role
      };
      setMembers([...members, newMember]);
  }
  // console.log('This is the member State in App.js', member);
  return (
    <Wrapper>
        <h1>Team Roster</h1>
       <MemberForm addMember={addMember} members={members} setMembers={setMembers}/>
    </Wrapper>
  );
}

export default App;
