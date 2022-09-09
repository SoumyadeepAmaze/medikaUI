import React,{useState} from "react";
import search from "../assets/search.png";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import history from '../assets/history.png'
import { useStyles } from './Home.styles';
import IconBack from "../assets/IconBack.png";
import { useNavigate } from "react-router";

function Home() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
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
      <div className={classes.backDiv}>
      <img src={IconBack} className="backicon" alt="search icon" onClick={() => setOpen(false)}/>
      </div>
      <div className={classes.searchDiv}>
          
          <img src={search} alt="search icon" onClick={handleClickOpen}/>
          <input className={classes.searchInput} type="text" placeholder="Syringe,centrifuge,Ventilator"/> 
      </div>
       <DialogTitle>Previous Search</DialogTitle>
        <DialogContent className={classes.dialogContent}>
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
