import {useState} from "react";
import * as React from 'react';
import IconBack from "../assets/IconBack.png";
import IconShare from "../assets/IconShare.png";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import product1 from "../assets/Product1.png";
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router";
import redcircle from "../assets/redcircle.png";
import bluecircle from "../assets/bluecircle.png";
import whiteCircle from "../assets/whiteCircle.png"
import RR from "../assets/RR.png"
import Wishlist from "../assets/Wishlist.png"

import "../scss/_productDetail.scss";



const ProductDetail1 = () => {
  const products = [
    {
      image: product1,
      name: "Ivoclar Vivadent",
      price: "$599",
    }
  ];
  const navigate = useNavigate();
  const [color,setColor] = useState('Red');
  const [size,setSize] = useState('XL');
  const [intensity,setIntensity] = useState('40 cd');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('1');

  const [alignment1, setAlignment1] = useState('Red');
  const [alignment2, setAlignment2] = useState('XXL');
  const [alignment3, setAlignment3] = useState('40cd');

  const[counter,setCounter] = useState(0);

  const handleIncrement = () => {
   setCounter({ counter: counter + 1 });
  };
  const handleDecrement  = () => {
    setCounter({ counter: counter - 1 });
   };

  const handleButton1Change = (event, newAlignment) => {
    setAlignment1(newAlignment);
  };
  const handleButton2Change = (event, newAlignment) => {
    setAlignment2(newAlignment);
  };
  const handleButton3Change = (event, newAlignment) => {
    setAlignment3(newAlignment);
  };

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const displayCounter = counter > -1;
  return (
    <div className="productDetail1-container mx-3 py-3">
      <div className="container">
        <div className="products">
        <img src={IconBack} className="backicon" alt="search icon" onClick={() => navigate('/')}/>
        <img src={IconShare} className="shareicon" alt="search icon" />
          {products.map(({ image, name, price }, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={image} alt="Product" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="title-container">
          <h2 className="prodDetail">Ivoclar Vivadent BluePhase</h2>
          <h3 className="price">$599</h3>
        </div>
        <div>
          <h3 className="variant">Choose Variant</h3>
        </div>
        <div className="details">
          <span onClick={handleClickOpen}><span className="colorDetails">color: <span style={{color:"#2F5AC7"}}>{color}</span></span>&nbsp;<span className="sizeDetails">Size: <span style={{color:"#2F5AC7"}}>{size}</span></span>&nbsp;<span className="intensityDetails">Intensity: <span style={{color:"#2F5AC7"}}>{intensity}</span></span></span>
        </div>
        <Box sx={{ typography: 'body1',position: 'absolute',width: '330px',height: '224px',left: '20px',top: '500px'}}>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Description" value="1" />
            <Tab label="Materials" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><p style={{fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '24px',letterSpacing: '0.005em',color: '#AAAAAA'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit at massa vehicula, quis fringilla urna gravida.</p><br/>
        <p style={{fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '24px',letterSpacing: '0.005em',color: '#AAAAAA'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit at massa vehicula, quis fringilla urna gravida.</p></TabPanel>
        <TabPanel value="2"><p style={{fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '24px',letterSpacing: '0.005em',color: '#AAAAAA'}}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br/>
        <p style={{fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '24px',letterSpacing: '0.005em',color: '#AAAAAA'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit at massa vehicula, quis fringilla urna gravida.</p></TabPanel>
      </TabContext>
      </Box>

      </div>
      <Drawer
            anchor='bottom'
            open={open}
            onClose={handleClose}
      >
        <Box
          sx={{ width: 'auto'}}
        >
        <div style={{flexDirection:'row',alignItems:'flex-start',display:'flex',padding:'8px 8px 8px 8px',gap:'8px',width:'359px',height:'84px'}}>
          <h3 style={{fontStyle:'normal',fontWeight:'500',fontSize:'18px',lineHeight:'35px',letterSpacing:'0.005em',width:'126px',height:'21px',color:'#121212'}}>Select Variant</h3>
        </div>
        <div style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '16px 18px 12px',width: '359px',background: '#FFFFFF',borderRadius: '8px'}}>
          <p style={{width: '95px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'}}>Color: <span style={{color:'#2F5AC7'}}>{color}</span></p>
        </div>
      <ToggleButtonGroup
      color="primary"
      value={alignment1}
      exclusive
      onChange={handleButton1Change}
      aria-label="Platform"
      spacing={3}
    >
      <ToggleButton value="Red" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setColor('Red')}><img src={redcircle}  alt="redcircle" />&nbsp;Red</ToggleButton>
      <ToggleButton value="Blue" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setColor('Blue')}><img src={bluecircle} alt="bluecircle" />&nbsp;Blue</ToggleButton>
      <ToggleButton value="White" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setColor('White')}><img src={whiteCircle}  alt="whiteCircle" />&nbsp;White</ToggleButton>
    </ToggleButtonGroup>
    

    <div style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '16px 18px 12px',width: '359px',background: '#FFFFFF',borderRadius: '8px'}}>
          <p style={{width: '95px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'}}>Size: <span style={{color:'#2F5AC7'}}>{size}</span></p>
        </div>
      <ToggleButtonGroup
      color="primary"
      value={alignment2}
      exclusive
      onChange={handleButton2Change}
      aria-label="Platform"
      spacing={3}
    >
      <ToggleButton value="XXL" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setSize('XXL')}>XXL</ToggleButton>
      <ToggleButton value="XL" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setSize('XL')}>XL</ToggleButton>
      <ToggleButton value="L" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setSize('L')}>L</ToggleButton>
    </ToggleButtonGroup>


    <div style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '16px 18px 12px',width: '359px',background: '#FFFFFF',borderRadius: '8px'}}>
          <p style={{width: '115px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'}}>Intensity: <span style={{color:'#2F5AC7'}}>{intensity}</span></p>
        </div>
      <ToggleButtonGroup
      color="primary"
      value={alignment3}
      exclusive
      onChange={handleButton3Change}
      aria-label="Platform"
      spacing={3}
    >
      <ToggleButton value="40cd" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setIntensity('40 cd')}>40 cd</ToggleButton>
      <ToggleButton value="20cd" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setIntensity('20 cd')}>20 cd</ToggleButton>
      <ToggleButton value="10cd" style={{margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'}} onClick={() => setIntensity('10 cd')}>10 cd</ToggleButton>
    </ToggleButtonGroup>
      </Box>
      </Drawer>
      <div>
      <img src={RR} className="ratings" alt="ratings" />
      </div>
    </div>
  );
}

export default ProductDetail1;
