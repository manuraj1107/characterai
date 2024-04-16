import React from 'react'

const Card_type3 = () => {
  return (
    <div className="w-auto snax-end px-1  bg-zinc-800 bg-opacity-55 rounded-xl swiper-slide-visible swiper-slide-fully-visible swiper-slide-active">
                              <div className="w-full flex flex-col gap-2">
                                <div className="flex flex-col gap-2 p-4 items-start bg-surface-elevation-1 rounded-xl w-[412px]">
                                  <div className="flex flex-row gap-3 items-center">
                                    <span className="relative flex h-auto w-max  overflow-hidden rounded-full shrink-0 grow-0 min-w-[48px] min-h-[48px]" title="WhoWouldWin">
                                      <img alt="WhoWouldWin"  loading="lazy" className="w-[48px] min-h-[48px] object-cover object-center bg-card shrink-0 grow-0 h-full bg-transparent"  src="https://characterai.io/i/80/static/avatars/WhoWouldWin2.png?webp=true&amp;anim=0" /></span>
                                       <div><p className="text-sm">WhoWouldWin</p>
                                    <span className="flex flex-row gap-1 text-muted-foreground text-sm">
                                          <div className="text-muted-foreground text-zinc-400 text-xs truncate">
                                            <a className="hover:text-foreground" href="/profile/greg">@greg</a></div>
                                            <p className='text-zinc-400 text-xs'>•</p>
                                             <p className=" sm:text-sm whitespace-nowrap text-zinc-400 text-xs">25.7m chats</p>
                                              <p className='text-zinc-400 text-xs'>•</p>
                                                <p className=" sm:text-sm whitespace-nowrap text-zinc-400 text-xs">7,077 likes</p></span></div></div>
                                                 <div className="w-full flex flex-col gap-1">
                                                  <a className="w-full rounded-xl p-3 bg-zinc-800   hover:bg-zinc-700" href="/chat">
                                                    <p className="line-clamp-1 text-ellipsis text-primary text-sm">Batman vs. Superman</p></a>
                                                      <a className="w-full rounded-xl hover:bg-zinc-700 p-3 bg-zinc-800" href="/chat">
                                                        <p className="line-clamp-1 text-ellipsis  text-sm">Knight vs. Samurai</p></a>
                                                         <a className="w-full rounded-xl hover:bg-zinc-700 bg-zinc-800 p-3  " href="/chat">
                                                           <p className="line-clamp-1 text-ellipsis text-sm">Lebron James vs. Michael Jordan</p></a></div></div>
                                                           </div>
                             </div>
  )
}

export default Card_type3