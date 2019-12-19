import React from 'react';
import styled from 'styled-components';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const NewCard = styled(Card)`
  margin: 1%;
  width:30%;
  background-color:black !important;
  color:white;

`
const Member = props =>{
    console.log(props.members);
    return(
       <>
      {props.members.map(item => (
        <NewCard key={Math.random()}>
            <CardBody>
                <CardTitle>{`Name: ${item.name}`}</CardTitle>
                <CardSubtitle>{`Role: ${item.role}`}</CardSubtitle>
                <CardSubtitle>{`Email: ${item.email}`}</CardSubtitle>
            </CardBody>
            <Button>Edit</Button>
        </NewCard>
       

      ))}
     </>
    )

}

export default Member