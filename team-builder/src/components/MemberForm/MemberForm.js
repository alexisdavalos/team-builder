import React, {useState} from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const MemberForm = ({addMember, members, setMembers}) =>{

    const [member, setMember] = useState({name:'',emai:'', role:''})
    const submitForm = e =>{
      e.preventDefault();
      setMembers({name:'', email:'',role:''});
    }
    console.log('This is the member State in MemberForm', members);
    return(
        <Form onSubmit={submitForm}>
        <Label htmlFor='name'>Name</Label>
        <Input  
          id='name' 
          type='text'
          name='name'
          value={member.name}
        />
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='text'
          name='email'
          value={member.email}
        />
        <Label htmlFor='role'>Role</Label>
        <Input
          id='role'
          type='text'
          name='role'
          value={member.role}
        />
        <Button type='submit'>Add Member</Button>
    </Form>
    )

}

export default MemberForm