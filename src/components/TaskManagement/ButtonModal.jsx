import * as React from 'react';
import {Box , Button , Modal} from '@mui/material';
import Date from './Date';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {md:400 , xs: 250},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const ButtonModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button className='taskbtn' sx={{marginBottom:"7px"}} onClick={handleOpen}><i class="fa-solid fa-file-circle-plus"></i>  Create Task</Button>
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
              placeholder="Write your Task!!"
            />
            <div className="row">
              <div className='col-6'>
                <Date/>
              </div>
              <div className='col-6'>
              <Button className="postbuton">ADD TO TASK</Button>
              </div>
            
            </div>
          </Box>
        </Modal>
      </div>
    );
}

export default ButtonModal