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
      name: 'Alexis Davalos',
      email: 'alexisdavalos.tech@gmail.com',
      role: 'Software Engineer'
    },
    {
      name: 'John Ramos',
      email: 'johnramos.dev@gmail.com',
      role: 'Front End Engineer'
    },
    {
      name: 'Oswald Newberg',
      email: 'OswaldNewberg@gmail.com',
      role: 'Data Scientist'
    }
  ]);
  const [memberToEdit, setMemberToEdit] = useState(null);
  const [isEditing, setEditMode] = useState(false);
  const addMember = member =>{
      const newMember = {
        name: member.name,
        email: member.email,
        role: member.role
      };
      setMembers([...members, newMember]);
  }
  const editMember = item =>{
    setMemberToEdit(item);
    setEditMode(true);
  }
  console.log(`Edit Mode: ${isEditing} \nWe will be editing:`, memberToEdit);
  if(isEditing === false){
    return (
      <Wrapper>
          <h1>Add A Member</h1>
          <FormWrapper>
            <MemberForm memberToEdit={memberToEdit} addMember={addMember}/>
            </FormWrapper>
         <h2>The Team Roster:</h2>
          <CardWrapper>
            <Member editMember={editMember} members={members}/>
          </CardWrapper>
      </Wrapper>
    );
  }else{
    return (
      <Wrapper>
          <h1>Edit A Member</h1>
          <FormWrapper>
            <MemberForm memberToEdit={memberToEdit} addMember={addMember}/>
            </FormWrapper>
         <h2>The Team Roster:</h2>
          <CardWrapper>
            <Member editMember={editMember} members={members}/>
          </CardWrapper>
      </Wrapper>
    );
  }
  
}

export default App;
