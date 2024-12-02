import React from 'react';
import Navbar1 from './test/components/navbar';
import { Menu } from './test/components/navigationMegaMenu';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className=''>
            <Navbar1 />
            <div className='bg-transparent fixed p-6 overflow-x-clip top-[4rem] w-full z-[5]'>
          <Menu/>
          
        </div>
            <main>{children}</main>
        </div>
    );
};

export default Layout;