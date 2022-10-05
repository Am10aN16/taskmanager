import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {Tooltip , IconButton } from "@mui/material";

const Completed = () => {
  return (
    <div className="col-4  taskbox">
      <p className="heading"> Completed (12 )</p>
      <div className="successlist">
        <div className="row taskname">
          <div className="col-9">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad iure numquam adipisci illum natus id ab veritatis officiis corporis. Adipisci, accusamus officia! Ipsum eos ad esse possimus. Et, atque?</p>
          </div>
          <div className="col-3">
            <Tooltip title="Shift to Progress" placement="right">
              <IconButton className="progressbutton">
                <RestartAltIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Shift to Progress" placement="right">
              <IconButton className="progressbutton">
                <RestartAltIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Shift to Progress" placement="right">
              <IconButton className="progressbutton">
                <RestartAltIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Shift to Progress" placement="right">
              <IconButton className="progressbutton">
                <RestartAltIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Shift to Progress" placement="right">
              <IconButton className="progressbutton">
                <RestartAltIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="row taskname">
          <div className="col-9">
            <p>Task 1</p>
          </div>
          <div className="col-3">
            <Tooltip title="Shift to Progress" placement="right">
              <IconButton className="progressbutton">
                <RestartAltIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;