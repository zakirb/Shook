import React from "react";
import { Card, CardTitle } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';

const UserBadge = props => {
  return (
    <div className='user-badge'>
      <Card className='small'
        header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
        actions={[<a href='#'>This is a Link</a>]}>
        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
      </Card>
    </div>
  )
}

export default UserBadge;
