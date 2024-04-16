import React from 'react'

const FilterCard = ({data}) => {
  return (
    <div className="snap-end px-1  w-auto" >
                            <button type="button" role="tab" aria-selected="true" data-state="active"  className="inline-flex items-center justify-center whitespace-nowrap font-medium  bg-zinc-800 hover:text-zinc-50 text-zinc-400 text-opacity-90 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-foreground data-[state=inactive]:border-b-transparent border-b-none rounded-xl my-0  text-sm p-3 data-[state=active]:text-primary-foreground data-[state=active]:bg-primary data-[state=inactive]:bg-surface-elevation-2" tabindex="-1" data-orientation="horizontal">{data}</button>
                            </div>
  )
}

export default FilterCard