import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  box1Container: {
    typography: 'body1',position: 'absolute',width: '330px',height: '224px',left: '20px',top: '500px'
  },
  box2Container: {
    borderBottom: 1, borderColor: 'divider'
  },
  tabPanelP: {
    fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '24px',letterSpacing: '0.005em',color: '#AAAAAA'
  },
  variantDiv: {
    flexDirection:'row',alignItems:'flex-start',display:'flex',padding:'8px 8px 8px 8px',gap:'8px',width:'359px',height:'84px'
  },
  variantDivH3: {
    fontStyle:'normal',fontWeight:'500',fontSize:'18px',lineHeight:'35px',letterSpacing:'0.005em',width:'126px',height:'21px',color:'#121212'
  },
  colorDiv:{
    flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '16px 18px 12px',width: '359px',background: '#FFFFFF',borderRadius: '8px'
  },
  colorDivP:{
    width: '95px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'
  },
  toogleButton: {
    margin:"10px",boxSizing:'border-box',border: '1px solid #2F5AC7',borderRadius: '4px'
  },
  sizeDiv: {
    flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '16px 18px 12px',width: '359px',background: '#FFFFFF',borderRadius: '8px'
  },
  sizeDivP: {
    width: '95px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'
  },
  intensityDiv: {
    flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '16px 18px 12px',width: '359px',background: '#FFFFFF',borderRadius: '8px'
  },
  intensityDivP: {
    width: '115px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'
  },
  bottomNavigationIcon:{
    position: 'absolute',
    left: '10px',
    bottom: '18px',
  },
  bottomNavigationButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '10px',
    gap: '10px',

    position: 'absolute',
    width: '283px',
    height: '40px',
    left: '90px',
    bottom: '8px',
    color: '#FFFFFF',
    background: '#142F75',
    borderRadius: '8px',
  }
});