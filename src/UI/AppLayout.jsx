import React from 'react';
import Header from './Header';
import Cart from '../features/cart/Cart';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './loader';

export default function AppLayout() {
  const navigation  = useNavigation();

  const isLoading = navigation.state === 'loading';
  
  return (
    <div className='layout'>
    {
      isLoading && <Loader />
    }
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
