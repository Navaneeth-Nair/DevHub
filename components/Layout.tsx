import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

import Sidebar from './Layout/Sidebar';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-screen bg-black'>
      <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
        <div className='grid grid-cols-4 h-full'>
          <Sidebar/>
          <div className='col-span lg:col-span-2 border-x-[1px] border-neutral-800'>
            {children}  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout