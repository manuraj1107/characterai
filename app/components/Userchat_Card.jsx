import React from 'react'

const Userchat_Card = ({name, pic}) => {
  return (
    <a role="option"  href='/chat' id={name} className="flex gap-2 items-center flex-row  h-auto justify-between relative px-2 py-[1.5] hover:bg-zinc-800  box-border  subpixel-antialiased cursor-pointer outline-none focus:z-10 focus:outline-2 rounded-lg focus:outline-focus focus:outline-offset-2 w-full mt-1 select-none">
                                <span className="relative flex h-auto w-full overflow-hidden rounded-full shrink-0 grow-0 min-w-8 min-h-8  py-1" >
                                    <img alt={name}  loading="lazy" className="object-cover min-h-8 w-8 h-max  rounded-full object-center  shrink-0 grow-0  bg-transparent"  src={pic} />
                                </span>
                                <span id={name} className="absolute  align-bottom  w-[77%] h-max ml-9  flex-1 text-sm font-normal ">
                                    <div className="w-full flex flex-row  justify-between gap-1  items-center">
                                     <p className="text-md truncate px-1">{name}</p>
                                        <button className="z-0 opacity-0  relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap  font-normal subpixel-antialiased overflow-hidden  outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 text-xs gap-2  px-0 min-w-6 h-6 bg-transparent rounded-full hover:bg-zinc-900 hover:opacity-100 focus:opacity-100 " type="button" >
                                        <svg stroke="currentColor" fill="currentColor" className="h-3 w-3" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                                                </svg>
                                       </button>
                                       </div>
                                </span>
                                </a>
  )
}

export default Userchat_Card