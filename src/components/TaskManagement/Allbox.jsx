import React from 'react'
import Todo from "./Todo";
import Progress from "./Progress";
import Completed from "./Completed";

const Allbox = () => {
  return (
    <div className='row'>
        <Todo/>
        <Progress/>
        <Completed/>
    </div>
  )
}

export default Allbox