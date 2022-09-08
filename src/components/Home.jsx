import React,{useState} from "react";
import search from "../assets/search.png";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import history from '../assets/history.png'


function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="home">
      <div className="container mx-3 search-bottom">
        <div className="title-container">
          <div className="input-container">
          <img src={search} alt="search icon" onClick={handleClickOpen}/>
          <input type="text" placeholder="Syringe,centrifuge,Ventilator"/> 
          </div>
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
      <div style={{display: 'flex',alignItems: 'center',flexDirection: 'row',boxSizing: 'border-box',gap: '8px',background: '#FFFFFF',padding: '11px',width: '100%',border: '1px solid #DAE4FF',borderRadius: '8px',marginTop:'15px'}}>
          <img src={search} alt="search icon" onClick={handleClickOpen}/>
          <input style={{border:'none',fontSize: '1rem',width: '70%',color: 'black'}} type="text" placeholder="Syringe,centrifuge,Ventilator"/> 
      </div>
       <DialogTitle>Previous Search</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <span><img src={history} alt="history"/>&nbsp;Surgical Tape</span><br/>
           <span><img src={history} alt="history"/>&nbsp;Dialyzer</span><br/>
           <span><img src={history} alt="history"/>&nbsp;Ryles Tube</span><br/>
          </DialogContentText>
        </DialogContent>
        <DialogTitle>Top Search</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <span>Surgical Tape</span><br/>
           <span>Dialyzer</span><br/>
           <span>Ryles Tube</span><br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Home;
