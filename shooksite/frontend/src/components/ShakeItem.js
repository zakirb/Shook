import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';

const ShakeItem = data => {
  console.log('this is in the shake item', data)
  console.log('this is the user in the shake item', data.user)

  // var name = function()
  return (
    <CollapsibleItem className='shake-item' header={data.data.proposer + ' vs. ' + data.data.acceptor} icon='public'>
      <div>
        <p>The {data.data.type}:</p>
        <p>{data.data.proposal}</p>
      </div>
    </CollapsibleItem>
  )
}

export default ShakeItem;
