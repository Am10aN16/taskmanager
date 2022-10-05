import React from 'react'
import Table from './Table'
import Linechart from './LineChart'
import Piechart from './PieChart'
import "./taskdashboard.css"

const TaskDashboard = () => {
  return (
    <div>
    <Table/>
    <div className='row'>
    <div className="col-6">
    <p className=" heading"> Pie Stats</p>
    <Piechart/>
    </div>
    <div className="col-6">
    <p className=" heading"> Line Stats</p>
    <Linechart/>
    </div>
    </div>
  
    </div>
  )
}

export default TaskDashboard