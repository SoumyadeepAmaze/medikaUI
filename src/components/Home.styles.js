import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  searchDiv: {
    display: 'flex',alignItems: 'center',flexDirection: 'row',boxSizing: 'border-box',gap: '8px',background: '#FFFFFF',padding: '11px',width: '88%',border: '1px solid #DAE4FF',borderRadius: '8px',marginTop:'15px',marginLeft:"24px"
  },
  searchInput:{
    border:'none',fontSize: '1rem',width: '70%',color: 'black'
  },
  dialogContent: {
    maxHeight:"100px"
  }
});