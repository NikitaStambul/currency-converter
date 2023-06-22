import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCurrency } from '../../store/slices/currencySlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const { currency } = useAppSelector(state => state.currencyState)

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return <div>{currency}</div>;
};

export default Header;
