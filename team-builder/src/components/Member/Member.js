import React from 'react';
import styled from 'styled-components';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const NewCard = styled(Card)`
  margin: 1%;
  width:30%;
  background-image: linear-gradient(-90deg,#6f42c1,#4253c1)!important;
  box-shadow: 5px 5px 18px 4px #000000ad;
  color:white;

`
const Member = props =>{
  console.log(`Props inside of Member.js`, props)
    return(
       <>
      {props.searchResults.map(item => (
        <NewCard key={Math.random()}>
            <CardBody>
                <CardTitle>{`Name: ${item.name}`}</CardTitle>
                <CardSubtitle>{`Role: ${item.role}`}</CardSubtitle>
                <CardSubtitle>{`Email: ${item.email}`}</CardSubtitle>
            </CardBody>
            <Button onClick={() => props.editMode(item)}>Edit</Button>
        </NewCard>
       

      ))}
     </>
    )

}

export default Member