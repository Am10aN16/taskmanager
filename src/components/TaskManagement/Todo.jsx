import React from "react";
import{ Tooltip, IconButton } from "@mui/material";
const Todo = () => {
  return (
    <div className="col-4 taskbox">
      <p className="heading"> TO DO (18)</p>
      <div className="tasklist">
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Start Task" placement="right">
              <IconButton className="progressbutton">
              <i class="fa-solid fa-hourglass-start"></i>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Start Task" placement="right">
             <IconButton className="progressbutton">
              <i class="fa-solid fa-hourglass-start"></i>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Start Task" placement="right">
             <IconButton className="progressbutton">
              <i class="fa-solid fa-hourglass-start"></i>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Start Task" placement="right">
             <IconButton className="progressbutton">
              <i class="fa-solid fa-hourglass-start"></i>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Start Task" placement="right">
             <IconButton className="progressbutton">
              <i class="fa-solid fa-hourglass-start"></i>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Start Task" placement="right">
             <IconButton className="progressbutton">
              <i class="fa-solid fa-hourglass-start"></i>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;