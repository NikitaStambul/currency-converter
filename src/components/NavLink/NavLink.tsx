import React from 'react';
import { styled } from '@mui/material';
import { NavLink as Link } from 'react-router-dom';

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: 8,
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
  '&.active': {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
}));

export default NavLink;
