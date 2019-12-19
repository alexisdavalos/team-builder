import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const MemberForm = ({addMember, memberToEdit, editMember}) =>{

    const [member, setMember] = useState({name:'',email:'', role:''})

    const submitForm = e =>{
      e.preventDefault();
      // (!member.name || !member.email || !member.role) ? alert('The Form Must Not Be Empty') : addMember(member);
      console.log(`The Member Added is: ${member}`)
      if(memberToEdit === null){
        addMember(member);
      }else{
        editMember(member);
      }
      setMember({name:'', email:'',role:''});
    }

    const handleChanges = e =>{
      setMember({
        ...member, [e.target.name]: e.target.value
      })
    }
    // console.log(`Current Member Name: ${member.name} Email: ${member.email} Role: ${member.role}`);
   
    useEffect(() =>{
      (memberToEdit !== null) ? setMember(memberToEdit) : console.log(`There are no members to Edit. The Member State is: ${memberToEdit}`)
    },[memberToEdit]) //to Watch end members are being edited

    return(
        <Form onSubmit={submitForm}>
        <Label htmlFor='name'>Name</Label>
        <Input  
          id='name' 
          type='text'
          name='name'
          onChange={handleChanges}
          value={member.name}
        />
        <Label htmlFor='email'>Email</Label>
        <Input  
          id='email' 
          type='email'
          name='email'
          onChange={handleChanges}
          value={member.email}
        />
        <Label htmlFor='role'>Role</Label>
        <Input
          id='role'
          type='text'
          name='role'
          onChange={handleChanges}
          value={member.role}
        />
        <Button type='submit'>Add Member</Button>
    </Form>
    )

}

export default MemberForm