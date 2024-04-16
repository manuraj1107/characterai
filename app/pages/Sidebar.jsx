'use client'
import Account_Sidebar from '../components/Account_Sidebar';
import Chats from '../components/Chats';
import Navbar from '../components/Navbar';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

 const Sidebar = () => {
  
    const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
    <aside className=" h-[100dvh] overflow-hidden ">
      <div className='w-full h-full flex mr-7 '>
        <div className={`overflow-hidden transition-all ease-out ${isVisible?'lg:block hidden':'block'}   duration-300 max-w-64 translate-x-0`}>
          <div className='h-full border-r border-zinc-800 border-solid w-64'>
            <div className='flex h-full flex-col overflow-hidden bg-[#131316]   w-full'>
              <Navbar setVisible={setIsVisible} />
               <div className='flex grow flex-col overflow-hidden mt-4'>
                 <div className='w-full px-4'>
                  <button key="nav"  type="button" aria-haspopup="dialog" aria-expanded="false"  >
                  <Link href="/create">
                           <button  className="z-0 group relative inline-flex items-center box-border  text-white appearance-none bg-zinc-800 bg-opacity-70 text-opacity-80 hover:text-opacity-100 select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 px-4 min-w--20 h-10 text-sm gap-2 rounded-full  text-foreground  border-[0.5px]  min-h-12 w-32 justify-start   border-solid border-zinc-700" type="button">
                            <svg viewBox="0 0 24 24" fill="none" className='h-[2em] text-zinc-300 '  aria-hidden="true" focusable="false" tabindex="-1">
                                <path d="M12 4v8m0 0v8m0-8H4m8 0h8" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path></svg>
                                Create
                            </button>
                  </Link>
                        
                  </button>
                        <a className="tap-highlight-transparent no-underline hover:opacity-80 active:opacity-disabled transition-opacity z-0 group hover:bg-zinc-800 hover:text-opacity-100 text-opacity-80 bg-opacity-70 relative inline-flex items-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden  outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 hover:bg-surface-elevation-1 px-4 min-w-20 h-10 text-sm text-white gap-2  bg-ghost text-primary min-h-12 justify-start mt-2 w-full rounded-md border-solid border-zinc-700" tabindex="0" role="button" href="/">
                            <svg viewBox="0 0 24 24" fill="none"  className="mr-1 h-[2em]" aria-hidden="true" focusable="false" tabindex="-1">
                                <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m12.524-3.753a1 1 0 0 1 1.228 1.228l-1.12 4.105a1.5 1.5 0 0 1-1.052 1.052l-4.105 1.12a1 1 0 0 1-1.228-1.228l1.12-4.105a1.5 1.5 0 0 1 1.052-1.052z" fill="currentColor" fill-rule="evenodd"></path>
                            </svg>Discover
                        </a>
                 </div>

          {/*  Recent Chats */}
              <Chats />
             </div>
          {/* Account and c.ai + */}
              <Account_Sidebar />
            </div>
          </div>
        </div>
            <div className={`m-5 ml-0 items-center absolute z-50 ${isVisible?'lg:hidden sm:block opacity-100':'lg:block block opacity-0'}  `}>
              <button key="close" onClick={toggleVisibility} className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 hover:bg-surface-elevation-1 px-4 min-w-20 h-10 text-sm gap-2 rounded-md  bg-ghost text-primary" type="button">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 text-zinc-400">
                <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM2 18C2 17.4477 2.44772 17 3 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H3C2.44772 19 2 18.5523 2 18Z"></path></svg>
              </button>
            </div>
        <div className='mx-2 hidden sm:visible'></div>
      </div>
  </aside>
    );
};

export default Sidebar;
