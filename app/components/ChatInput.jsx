import React from 'react'

const ChatInput = () => {
  return (
    <div className="flex w-full flex-col max-w-2xl">
               <div className="flex items-end p-1 m-4 mb-10 bg-zinc-800 bg-opacity-60 border border-zinc-700 border-opacity-90 border-solid rounded-full appearance-none  ne bg-surface-elevation-1">
                 <div className="w-full  relative flex flex-col ml-2">
                   <textarea className="flex max-h-96 px-3 w-full border file:border-0 file:bg-transparent file:text-md file:font-medium placeholder:text-placeholder disabled:cursor-not-allowed disabled:opacity-50 resize-none bg-transparent border-input h-10 py-2 text-md placeholder:opacity-70 border-none outline-none bg-surface-elevation-1" inputmode="text" placeholder="Message Annie Affirmations..."></textarea>
                     <span className="flex flex-row px-3 gap-2 text-sm"></span>
                  </div>
                <button className="z-0 group relative inline-flex  text-zinc-800 items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 hover:bg-primary/90  text-sm gap-2 rounded-full px-0  bg-zinc-100  min-w-10 w-10 h-10" type="button">
                  <div className=" opacity-[1]" >
                    <svg viewBox="0 0 24 24" fill="none" className="h-[1.25em]">
                      <path d="M3.113 6.178C2.448 4.073 4.64 2.202 6.615 3.19l13.149 6.575c1.842.921 1.842 3.55 0 4.472l-13.15 6.575c-1.974.987-4.166-.884-3.501-2.99L4.635 13H9a1 1 0 1 0 0-2H4.635z" fill="currentColor">
                        </path>
                    </svg>
                  </div>
                </button>
               </div>
               <p className="absolute bottom-3 self-center text-zinc-400 tracking-tight text-[0.70rem] select-none">Remember: Everything Characters say is made up!</p>
               </div>
  )
}

export default ChatInput