import React, {useState, useEffect} from 'react';
import './App.css';
import MemberForm from './components/MemberForm/MemberForm';
import Member from './components/Member/Member';
import styled from 'styled-components';
import {Badge, Input, Label} from 'reactstrap';

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
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //useEffect to watch changes in members
  // console.log(members);
  // console.log(members.filter(item => item.name == 'Alexis Davalos'))
  useEffect(() =>{
    const results = members.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);

  },[query])
  console.log(`The Search Results Array`, searchResults);
  console.log(`The Members Array`, members);
  //Handle Changes in search form
  const changeHandler = e => {
    setQuery(e.target.value);
    console.log('The Query Is:', e.target.value)
  };
  //Function that adds new Member Cards
  const addMember = member =>{
      const newMember = { //creates new member
        name: member.name,
        email: member.email,
        role: member.role
      };
      setMembers([...members, newMember]); //adds new member to members array
  }
  //Function that edits members
  const editMember = member =>{
    const memberIndex = members.findIndex(obj => obj.name === member.name) //find the index of the members data where the obj.name matches the member being edited
    // console.log('The is the INDEX OF THE MEMBER BEING EDITED', members[memberIndex])
    // const newMembers = [...members.splice(memberIndex, 1)];
    // console.log('The is the NEW MEMBERS ARRAY', newMembers)
    // console.log('The Item BEFORE Being Edited After Click:', members[memberIndex])
    members[memberIndex] = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, members[memberIndex]]) //How to manipulate
    console.log('The Item After Being Edited After Click:', members[memberIndex])

    setEditMode(false);
  }
  //function that sets edit mode
  const editMode = member =>{
    setMemberToEdit(member); //selects which member to edit
    setEditMode(true); //sets edit mode to true
    const memberIndex = members.findIndex(obj => obj.name === member.name)
    console.log(`This is the index member ${member.name}`,members[memberIndex]);
  }
  console.log(`Edit Mode: ${isEditing} \nWe will be editing:`, memberToEdit);
  if(isEditing === false){
    return (
      <Wrapper>
          <h1>Add A Member</h1>
          <FormWrapper>
            <MemberForm editMember={editMember} memberToEdit={memberToEdit} addMember={addMember}/>
            <Label htmlFor="name">Search:</Label>
            <Input
              id="name"
              type="text"
              name="textfield"
              placeholder="Search By Name"
              value={query}
              onChange={changeHandler}
            />
            </FormWrapper>
         <h2>The Team Roster:</h2>
          <CardWrapper>
            <Member editMode={editMode} members={members} searchResults={searchResults}/>
          </CardWrapper>
      </Wrapper>
    );
  }else{
    return (
        <Wrapper>
        <h1>Edit A Member <Badge color="danger">Mode</Badge></h1>
        <FormWrapper>
          <MemberForm editMember={editMember} memberToEdit={memberToEdit} addMember={addMember}/>
          </FormWrapper>
      <h2>The Team Roster:</h2>
        <CardWrapper>
          <Member editMode={editMode} members={members} searchResults={searchResults}/>
        </CardWrapper>
    </Wrapper>
    );
  }
  
}

export default App;
