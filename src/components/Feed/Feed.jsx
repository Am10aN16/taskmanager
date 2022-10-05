import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import "./Feed.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {md:400 , xs: 250},
  bgcolor: "background.paper",
  border: "5px double #1976d2 !important",
  boxShadow: 24,
  p: 4,
};

const Feed = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="mt-4">
      <div onClick={handleOpen}>
        <textarea
          disabled
          placeholder="Write Something..."
          className="postsection"
          type="text"
        ></textarea>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <textarea
            type="text"
            className="postbox"
            placeholder="Write your Feelings!!"
          />

          <div className="row">
            <div className="col-6">
            <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" sx={{ marginTop:'10px'}}>
        Upload  <PhotoCamera sx={{color:'white'}}/>
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" /> 
      </IconButton>
    </Stack>
            </div>
            <div className="col-6">
            <Button className="postbuton">POST</Button>
            </div>
          </div>
          
         
          
        </Box>
      </Modal>
    </div>
  );
};

export default Feed;
