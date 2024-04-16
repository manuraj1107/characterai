import React from 'react'

const Card_type1 = ({name, pic, author, comment,bio}) => {
  return (
    <div className='snap-end   bg-zinc-600 bg-opacity-15 hover:bg-opacity-40 rounded-2xl w-max'>
      <a aria-label="Vermeil" className="flex w-max group" href="/chat">
        <div className="group h-[146px] bg-surface-elevation-1 hover:cursor-pointer relative w-[312px]">
          <div className="w-full h-full p-4 flex flex-col gap-2">
            <div className="flex flex-row h-full space-x-3 w-full">
              <span className="relative flex h-auto w-max shrink-0 grow-0 min-w-[90px] min-h-[114px]" title={name}>
                <img   loading="lazy" className=" w-[90px] min-h-[114px] object-cover object-center rounded-2xl shrink-0 grow-0 h-full bg-transparent"  src={pic} /></span>
                 <div className="overflow-auto h-full flex flex-col justify-between w-full">
                   <div className=''>
                    <p className="mb-[2px]  font-normal text-sm line-clamp-1 text-ellipsis  break-words overflow-hidden whitespace-normal">{name}</p>
                   <div className=" font-normal text-xs text-zinc-300 opacity-70 truncate mb-[5px]">By {author}</div>
                    <p className=" font-normal line-clamp-3 text-xs text-ellipsis overflow-hidden whitespace-normal break-anywhere">{bio} </p>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-1 items-center">
                          <svg viewBox="0 0 24 24" fill="none" className=" text-zinc-400 h-[14px] w-[14px]">
                            <path d="M21.5 12c0-5-3.694-8-9.5-8s-9.5 3-9.5 8c0 1.294.894 3.49 1.037 3.83l.037.092c.098.266.49 1.66-1.074 3.722 2.111 1 4.353-.644 4.353-.644 1.551.815 3.397 1 5.147 1 5.806 0 9.5-3 9.5-8Z" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"></path></svg>
                            <p className="text-xs text-zinc-400">{comment}</p></div>
                            </div><div className=" opacity-100  bottom-0 right-0 transition-all">
                              <button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2  hover:bg-zinc-900 text-zinc-500 rounded-full hover:bg-surface-elevation-1 text-xs gap-unit-2  px-0  min-w-6 w-6 h-6" type="button" aria-label="More Options…" data-state="closed" aria-haspopup="menu" aria-expanded="false" name="More Options…">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className='h-[1em] w-[1em]'  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </a>
    </div>
  )
}

export default Card_type1