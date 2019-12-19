import React, {useState} from 'react';
import './App.css';
import MemberForm from './components/MemberForm/MemberForm';
import Member from './components/Member/Member';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin:5%;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`
const CardWrapper = styled.div`
  margin:2%;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  width:100%;
`
const FormWrapper = styled.div`
  margin:3%;

`

function App() {
  const [members, setMembers] = useState([
    {
      name: 'Alexis',
      email: 'alexisdavalos.tech@gmail.com',
      role: 'Software Engineer'
    },
    {
      name: 'Alexis',
      email: 'alexisdavalos.tech@gmail.com',
      role: 'Software Engineer'
    },
    {
      name: 'Alexis',
      email: 'alexisdavalos.tech@gmail.com',
      role: 'Software Engineer'
    }
  ]);
  const addMember = member =>{
      const newMember = {
        name: member.name,
        email: member.email,
        role: member.role
      };
      setMembers([...members, newMember]);
  }
  // console.log('This is the member State in App.js', member);
  return (
    <Wrapper>
        <h1>Add A Member</h1>
        <FormWrapper>
          <MemberForm addMember={addMember}/>
          </FormWrapper>
       <h2>The Team Roster:</h2>
        <CardWrapper>
          <Member members={members}/>
        </CardWrapper>
    </Wrapper>
  );
}

export default App;
