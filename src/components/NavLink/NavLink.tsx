import { styled } from '@mui/material';
import { NavLink as Link } from 'react-router-dom';

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: 16,
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  '&.active': {
    color: theme.palette.primary.main,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    paddingBottom: '12px',

    '&:hover': {
      color: 'white',
    },
  },
}));

export default NavLink;
