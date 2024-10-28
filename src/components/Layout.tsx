// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
    children: ReactNode; // Define the type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Header />
            <div className="">{children}</div>
        </div>
    );
};

export default Layout;
