// Write your Character component here
import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

const Character = (props) => {
  

    return (
        <Card>
        {/* <CardImg top width="100%" src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1588363453210-U6FWTG404OT5NZT13BW0/ke17ZwdGBToddI8pDm48kAu1Kueb7vuAs3qufYnUUfF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmnhdptcuU1alwky_sWs380uGhOpA26fPpitnvRnWPhc0RBdpzh9ajq8mK84TG1Nji/new-star-wars-poster-for-the-skywalker-saga-and-disney-shares-concept-art-for-its-may-the-4th-takeover2?format=1500w" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.name}</CardTitle>          
          <CardText>Mass: {props.mass} </CardText>
          <Button color="danger" href={props.homeworld}>Homeworld API URL</Button>
        </CardBody>
      </Card>
      
      
          
        
        
      
    );
  }
  
  export default Character;
  