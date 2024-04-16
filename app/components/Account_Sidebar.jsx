import React from 'react'

const Account_Sidebar = () => {
  return (
    
    <div className='flex flex-col justify-end pb-2 px-5'>
    <div className='shrink-0 bg-divider h-[1px] w-full'></div>

    <div className='flex flex-col gap-3 py-3  h-max '>
    <button className="  group relative items-center  border border-solid border-zinc-700 bg-zinc-900 appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden  outline-none  focus:outline-2 focus:outline-focus focus:outline-offset-2 px-4 min-w-20 h-10 text-sm gap-2 rounded-full   flex w-full justify-center  py-3 " type="button">Try 
    <div className="flex items-center font-medium rounded-spacing-xs p-0 text-light bg-transparent">c.ai
    <div className="text-xs font-bold text-orange-400">+
    </div></div>
    </button>
    </div>
    <button id='premium' aria-expanded="false" type='button' aria-haspopup="menu" className='rounded-xl  h-full w-full py-2 px-2 flex-start hover:bg-zinc-700  outline-none'>
    <div className="flex w-full items-center gap-1 overflow-hidden">
        <div className="w-[36px] h-[36px] flex  items-center justify-center">
        <span className="relative flex text-xs h-auto w-full overflow-hidden rounded-full shrink-0 grow-0 bg-gradient-to-br from-indigo-900 to-slate-900  min-w-9 min-h-9" title="raju1212">
            <div className="flex  self-center mb-[0.5px] justify-center items-center w-full font-bold opacity-90 size-[14.4px]">r</div></span></div>
            <div className="text-sm flex flex-auto flex-col justify-center text-left ml-1 w-full">
                <div className="flex flex-row gap-1 items-center overflow-hidden w-full">
                    <p className="line-clamp-1 text-xs tracking-tight text-ellipsis break-anywhere overflow-hidden whitespace-normal">raju1212</p>
                    </div></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[17px] h-[16px]'  viewBox="0 0 17 16" fill="none">
                        <path d="M13.4232 6L8.56131 10.8619C8.30096 11.1223 7.87885 11.1223 7.6185 10.8619L2.75656 6" stroke="#A2A2AC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path></svg></div>
    </button>
</div>
  )
}

export default Account_Sidebar