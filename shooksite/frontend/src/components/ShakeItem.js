import React from "react";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShakeDetail from './ShakeDetail';
// import './App.css';

const ShakeItem = data => {
  console.log('this is in the shake item', data)
  console.log('this is the user in the shake item', data.user)

  // let shakes = data.data.map( (item, index) => {
  //   return (<ShakeDetail data={item} key={index} user={data.user} />)
  // })

  // var name = function()
  return (
    <CollapsibleItem className='shake-item' header={data.data.proposer + ' vs. ' + data.data.acceptor} icon='public'>
      <div>
        <p>The {data.data.type}:</p>
        <p>{data.data.proposal}</p>
        <Link to='/shakedetail'>
          <Button waves='light'> View Details </Button>
        </Link>
      </div>
    </CollapsibleItem>
  )
}

export default ShakeItem;
