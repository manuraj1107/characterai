import React from 'react'

const Card_type2 = () => {
  return (
    <div className="snap-end  w-max">
     <div className="w-full flex flex-col gap-2">
         <a className="w-[313px] min-w-[200px] flex flex-row gap-2 p-3 items-center bg-zinc-800 hover:bg-opacity-100 bg-opacity-60 rounded-2xl" href="/chat/2T3Xhqf5B_b9Wrn8Bg0FeCYR7BPx2LtJQJJCIB4Qe18">
            <span className="relative flex h-auto w-max overflow-hidden rounded-full shrink-0 grow-0 min-w-[54px] min-h-[54px]" title="HyperGlot">
            <img alt="HyperGlot" loading="lazy" className="w-[54px] min-h-[54px] object-cover object-center shrink-0 grow-0 h-full bg-transparent" src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&amp;anim=0" />
            </span>
        <div className="flex flex-col">
            <p className="line-clamp-2  text-base text-ellipsis">Practice a new language</p>
            <p className="line-clamp-1 text-ellipsis text-sm text-zinc-400">with HyperGlot</p>
            </div></a>
            <a className="min-[313px]  min-w-[200px] flex flex-row gap-2 p-3 items-center bg-zinc-800 hover:bg-opacity-100 bg-opacity-60 rounded-2xl" href="/chat/uD71krOYYFjVkYwspviH_8tYTybsf5eAGdwhNlFJAls">
                <span className="relative flex h-auto w-max overflow-hidden rounded-full shrink-0 grow-0 min-w-[54px] min-h-[54px]"  title="Trip Planner">
            <img alt="Trip Planner" fetchpriority="auto" loading="lazy" className="w-[54px] min-h-[54px] object-cover object-center bg-card shrink-0 grow-0 h-full bg-transparent" src="https://characterai.io/i/80/static/avatars/uploaded/2022/11/1/8vQT3XDnPkEHhafVac-ldiQCljC3kImrE9TiEXcIjKQ.webp?webp=true&amp;anim=0" /></span>
            <div className="flex flex-col">
            <p className="line-clamp-2 text-base text-ellipsis">Plan a trip</p>
            <p className="line-clamp-1 text-sm text-zinc-400 text-ellipsis text-muted-foreground text-md">with Trip Planner</p></div></a></div>
                            </div>
  )
}

export default Card_type2