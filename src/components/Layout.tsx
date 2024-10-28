// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
