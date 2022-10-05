import React from "react";
import TaskIcon from "@mui/icons-material/Task";
import {Tooltip , IconButton} from "@mui/material";
const Progress = () => {
  return (
    <div className="col-4 taskbox">
      <p className="heading"> IN PROGRESS (10)</p>
      <div className="progresslist">
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1 rrrrrrrrrrrrrrrrrrrrrrr</p>
          </div>
          <div className="col-3">
            <Tooltip title="Mark as Completed" placement="right">
              <IconButton className="completebutton">
              <TaskIcon/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Mark as Completed" placement="right">
              <IconButton className="completebutton">
              <TaskIcon/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Mark as Completed" placement="right">
              <IconButton className="completebutton">
              <TaskIcon/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Mark as Completed" placement="right">
              <IconButton className="completebutton">
              <TaskIcon/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Mark as Completed" placement="right">
              <IconButton className="completebutton">
              <TaskIcon/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Mark as Completed" placement="right">
              <IconButton className="completebutton">
              <TaskIcon/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;