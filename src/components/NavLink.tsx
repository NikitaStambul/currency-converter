import { styled } from '@mui/material';
import { NavLink as Link } from 'react-router-dom';

const NavLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  padding: '8px 16px',
  lineHeight: '1rem',
  textDecoration: 'none',
  color: theme.palette.text.secondary,

  '&::after': {
    content: '""',
    position: 'absolute',
    width: 'calc(100% - 32px)',
    height: '4px',
    borderRadius: 10,
    left: 16,
    bottom: -16,
    transition: theme.transitions.create('all'),
    opacity: 0,
  },

  '&.active': {
    color: theme.palette.primary.main,

    '&::after': {
      opacity: 1,
      background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    },
  },

  '&:hover': {
    color: theme.palette.primary.main,
    background: theme.palette.background.secondary,
    transition: theme.transitions.create('all'),
  },
}));

export default NavLink;
