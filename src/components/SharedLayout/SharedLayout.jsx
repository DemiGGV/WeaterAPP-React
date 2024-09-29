import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { MainLayoutContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <MainLayoutContainer>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainLayoutContainer>
  );
};
