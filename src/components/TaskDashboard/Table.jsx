import React from 'react'

const Table = () => {
  return (
    <div className='mb-5' style={{border:'2px solid black', paddingLeft:15,paddingRight:15}}>
 <div class="row taskrow">
          <h1 className="heading"> YOUR TASK DASHBOARD</h1>
          <div class="col leftcolumn">Total Tasks</div>
          <div class="col rightcolumn">30</div>
          <div class="w-100"></div>
          <div class="col leftcolumn">Tasks in Progress</div>
          <div class="col rightcolumn">10</div>
          <div class="w-100"></div>
          <div class="col leftcolumn">Tasks Completed</div>
          <div class="col rightcolumn">30</div>
        </div>
    </div>
  )
}

export default Table