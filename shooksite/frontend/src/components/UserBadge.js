import React from "react";
import { Card, CardTitle } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';

const UserBadge = data => {
  return (
    <div className='user-badge'>
      <Card className='small'
        header={<CardTitle>{data.user.username}</CardTitle>}
        actions={[<a href='#'>This is a Link</a>]}>
        <div>

        </div>
      </Card>
    </div>
  )
}

export default UserBadge;
