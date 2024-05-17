import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  box1Container: {
    typography: 'body1',position: 'absolute',width: '330px',height: '224px',left: '20px',top: '500px'
  },
  box2Container: {
    borderBottom: 1, borderColor: 'divider'
  },
  tabPanel:{
    paddingTop: '10px !important',
    textAlign: 'left'
  },
  tabPanelP: {
    fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '24px',letterSpacing: '0.005em',color: '#AAAAAA'
  },
  variantDiv: {
    flexDirection:'row',alignItems:'flex-start',display:'flex',padding:'8px 8px 8px 8px',gap:'8px',width:'359px',height:'44px'
  },
  variantDivH3: {
    fontStyle:'normal',fontWeight:'500',fontSize:'18px',lineHeight:'35px',letterSpacing:'0.005em',width:'126px',height:'21px',color:'#121212'
  },
  colorDiv:{
    flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '15px 9px 3px',width: '359px',background: '#FFFFFF',borderRadius: '8px'
  },
  colorDivP:{
    width: '95px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'
  },
  tabButton:{
    background: '#DDEBFF',
    borderRadius: '8px',
  },
  colorDivPSpan:{
    width: '130px',
    height: '15px',
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '150%',
    /* identical to box height, or 15px */

    textAlign: 'right',
    top: '50px',
    position: 'absolute',
    right: '13px',
    color: 'rgba(42, 70, 137, 0.5)',
  },
  toogleButton: {
    marginRight:"14px !important",boxSizing:'border-box !important',border: '1px solid #EBEBEB !important',borderRadius: '4px !important',width:'100px !important'
  },
  sizeDiv: {
    flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '25px 11px 10px',width: '359px',background: '#FFFFFF',borderRadius: '8px'
  },
  sizeDivP: {
    width: '95px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'
  },
  sizeDivPSpan:{
    width: '130px',
    height: '15px',
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '150%',
    /* identical to box height, or 15px */

    textAlign: 'right',
    top: '151px',
    position: 'absolute',
    right: '13px',
    color: 'rgba(42, 70, 137, 0.5)',
  },
  intensityDiv: {
    flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '23px 9px 6px',width: '359px',background: '#FFFFFF',borderRadius: '8px'
  },
  intensityDivP: {
    width: '115px',height: '25px',fontStyle: 'normal',fontWeight: '500',fontSize: '15px',lineHeight: '0%',color: '#444444'
  },
  intensityDivPSpan:{
    width: '130px',
    height: '15px',
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '150%',
    /* identical to box height, or 15px */

    textAlign: 'right',
    top: '257px',
    position: 'absolute',
    right: '13px',
    color: 'rgba(42, 70, 137, 0.5)',
  },
  bottomNavigationIcon:{
    position: 'absolute',
    left: '24px',
    bottom: '10px',
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
  },
  bottomNavigationButtonSpan:{
    width: '263px',
    height: '20px',
    marginTop: '-3px',  
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '20px',
    /* identical to box height, or 143% */
    textAlign: 'center',
    letterSpacing: '0.005em',
  },
  contentContainer: {
    height: '550px',
    borderRadius: '20px 20px 0px 0px',
    boxShadow: '0px -4px 17px rgb(0 0 0 / 8%)'
  }
});