// Write your Character component here
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Character = (props) => {
  

    return (
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content. <a href={props.homeworld}>Homeworld API URL </a> </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      
      
          
        
        
      
    );
  }
  
  export default Character;
  