'use client'
import dynamic from "next/dynamic";

import {React, useState } from "react";
import Layout from "../pages/layout";



 const CreateCharacter = () => {

 const [nameCount, SetNameCount] = useState('')
 const [taglineCount, SetTaglineCount] = useState('')
 const [descriptionCount, SetDescriptionCount] = useState('')
 const [greetCount, SetGreetCount] = useState('')

 const handleNameChange = (event) => {
  SetNameCount(event.target.value);
};
 const handleTaglineChange = (event) => {
  SetTaglineCount(event.target.value);
};
 const handleDescriptionChange = (event) => {
  SetDescriptionCount(event.target.value);
};
 const handleGreetChange = (event) => {
  SetGreetCount(event.target.value);
};




    return (
<Layout>
     <main className="h-[100dvh] flex-1 overflow-x-hidden">
         <div className="h-full">
           <div className="py-3 px-6 h-full w-full flex flex-col items-center">
             <div className="w-full flex flex-col gap-4 mb-4 items-center">
                <div className="w-full flex justify-between">
                  <button className="z-0 group relative inline-flex items-center justify-center box-border w-[40px] h-[40px]  appearance-none select-none whitespace-nowrap  subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none outline-offset-2 hover:bg-surface-elevation-1 text-small  rounded-full hover:bg-[#1f1f23] hover:transition delay-200 duration-200 ease-in-out">
                 <svg className="size-8" viewBox="0 0 24 24" fill="none"> <path d="m14 16-4-4 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                 </button>
                 <a className="tap-highlight-transparent no-underline hover:opacity-85  active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center gap-2 align-middle box-border appearance-none select-none whitespace-nowrap  subpixel-antialiased font-normal  hover:subpixel-antialiased overflow-hidden outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 hover:bg-surface-elevation-1 min-w-t-20 h-10 text-sm rounded-lg w-max px-4   text-primary hover:bg-[#1f1f23] hover:transition delay-200 duration-200 ease-in-out" target="_blank" role="button" href="https://book.character.ai/character-book/how-to-quick-creation">
                 <svg viewBox="0 0 24 24" fill="none" className="text-muted-foreground opacity-60 h-[16px] w-[16px]" aria-hidden="true" focusable="false" tabindex="-1"><path d="M9 6a1 1 0 0 0 0 2zm6 2a1 1 0 1 0 0-2zm-6 2a1 1 0 1 0 0 2zm3 2a1 1 0 1 0 0-2zM7 4h9V2H7zm11 2v12h2V6zm-2 14H7v2h9zM6 19V5H4v14zm1 1a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3zm11-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM16 4a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM7 2a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1zm11 10v2h2v-2zm-2 4H7v2h9zm-9 6h3v-2H7zm0-6a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1zm11-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM9 8h6V6H9zm0 4h3v-2H9z" fill="currentColor"></path>
                 </svg>
                 View Character Book
                 </a>
                </div>
             </div>
 
             <form className="h-full flex w-full flex-col gap-4 justify-between items-center">
                <div className="flex flex-col flex-auto gap-4 w-full max-w-2xl">
                  <div className="space-y-2 w-[86px] h-[86px]">
                    <button id="0001" className="opacity-100" type="button" aria-haspopup="menu" aria-expanded="false">
                      <div className="relative w-full h-full flex justify-center items-center cursor-pointer">
                         <span className="relative flex h-auto w-full overflow-hidden rounded-full shrink-0 grow-0 bg-gradient-to-br from-orange-500 to-zinc-900 opacity-95 min-h-[86px] min-w-[86px]">
                            <div className="flex justify-center self-center items-center w-full text-4xl font-bold opacity-90 size-[34.4px]">{nameCount.charAt(0)}</div>
                         </span>
                       <div className="absolute -bottom-1 p-1.5 rounded-full -right-1 bg-surface-elevation-2 bg-zinc-800">
                       <svg viewBox="0 0 24 24" fill="none" className="h-[21px]"><path d="M14 21h7M19.879 4.379l-.258-.258a3 3 0 0 0-4.242 0l-11.5 11.5A3 3 0 0 0 3 17.743V21h3.257a3 3 0 0 0 2.122-.879l11.5-11.5a3 3 0 0 0 0-4.242" stroke="currentColor"  stroke-width="2"></path></svg></div>  
                      </div>
                    </button>
                  </div>
 
                  <div className="space-y-2 w-full">
                    <div className="relative flex flex-col w-full">
                      <label className="text-sm antialiased font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 decoration-dotted decoration-placeholder hover:decoration-foreground underline-offset-4 text-primary hover:no-underline">
                        Character name</label>
                      <input id="name"  className="flex w-full border border-solid border-zinc-700 rounded-xl px-3 text-md file:text-sm file:font-medium placeholder:text-placeholder placeholder:text-zinc-500 outline-none focus-visible:outline-none  disabled:opacity-50 appearance-none border-input placeholder:text-sm py-3 mt-2 focus-visible:border-primary bg-transparent h-14" 
                       type="text" value={nameCount} onChange={handleNameChange} maxLength="20" autoComplete="off" placeholder="e.g. Albert Einstein"
                       aria-invalid="false" />
                       <span className="flex flex-row px-3 gap-2 text-xs justify-end mt-1">
                         <p className="text-placeholder text-zinc-500 ">{nameCount.length}/20</p>
                       </span>
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="relative flex flex-col w-full">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 decoration-dotted decoration-placeholder hover:decoration-foreground underline-offset-4 text-primary underline">
                       Tagline
                      </label>
                      <input id="tagline" value={taglineCount} onChange={handleTaglineChange} className="flex w-full border border-solid border-zinc-700 rounded-xl px-3 text-md file:text-sm file:font-medium placeholder:text-placeholder placeholder:text-zinc-500 outline-none focus-visible:outline-none  disabled:opacity-50 appearance-none border-input placeholder:text-sm py-3 mt-2 focus-visible:border-primary bg-transparent h-14" type="text" maxLength="50" autoComplete="off" placeholder="Add a short tagline of your Character" aria-invalid="false" /> 
                      <span className="flex flex-row px-3 gap-2 text-xs justify-end mt-1">
                         <p className="text-placeholder text-zinc-500 ">{taglineCount.length}/50</p>
                       </span>
                    </div>
                  </div>
 
                  <div className="relative">
                    <div className="space-y-2">
                      <div className="w-full relative flex flex-col">
                        <span className="h-fit leading-none">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 decoration-dotted decoration-placeholder hover:decoration-foreground underline-offset-4 text-primary underline">
                       Description
                      </label>
                        </span>
                        <textarea id="description" value={descriptionCount} onChange={handleDescriptionChange} className="flex max-h-96 px-3 w-full border border-solid rounded-xl border-zinc-700 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-placeholder placeholder:text-zinc-500  disabled:opacity-50 resize-none focus-visible:outline-none border-input rounded-spacing-s placeholder:text-md py-3 mt-2 focus-visible:border-primary h-32 bg-transparent" type="text"
                        placeholder="How would your Character describe themselves?" aria-invalid="false" maxLength="500" autoComplete="off"></textarea>
                        <span className="flex flex-row px-3 gap-2 text-xs justify-end mt-1">
                         <p className="text-placeholder text-zinc-500 ">{descriptionCount.length}/500</p>
                       </span>
                      </div>
                    </div>
                  </div>
 
                  <div className="relative">
                    <div className="space-y-2">
                      <div className="w-full relative flex flex-col">
                        <span className="h-fit leading-none">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 decoration-dotted decoration-placeholder hover:decoration-foreground underline-offset-4 text-primary underline">
                        Greeting
                      </label>
                        </span>
                        <textarea value={greetCount} onChange={handleGreetChange} className="flex max-h-96 px-3 w-full border border-solid rounded-xl border-zinc-700 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-placeholder placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none focus-visible:outline-none border-input rounded-spacing-s placeholder:text-md py-3 mt-2 focus-visible:border-primary pr-4 bg-transparent min-h-20" maxLength="2048" aria-invalid="false" placeholder="e.g. Hello, I am Albert. Ask me anything about my scientific contributions."></textarea>
                        <span className="flex flex-row px-3 gap-2 text-xs justify-end mt-1">
                         <p className="text-placeholder text-zinc-500 ">{greetCount.length}/2048</p>
                       </span>
                      </div>
                    </div>
                  </div>
 
                  <div className="space-y-2 w-full">
                    <button className="z-0 group relative bg-zinc-800 opacity-80 px-4 justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 hover:bg-surface-elevation-1 px-unit-4 min-w-unit-20 text-small gap-unit-2 rounded-xl   text-primary  w-full h-max mb-4 py-2 rounded-spacing-s flex flex-start bg-surface-elevation-1 items-center" type="button">
                      <div className="flex flex-col gap-1 h-full w-full items-start">
                        <p className="text-xs font-medium">Voice</p>
                         <div className="flex flex-start w-full text-muted-foreground line-clamp-1 text-sm text-ellipsis break-anywhere overflow-hidden text-zinc-400 whitespace-normal">
                           Add
                         </div>
                      </div>
                       <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24"><path d="m20 9-7.293 7.293a1 1 0 0 1-1.414 0L4 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </button>
                     <div>
                       <p className="mb-2 text-sm font-medium">Visibility</p>
                       <div className="space-y-2 w-full mb-2">
                          <button id="visibility" className="border border-zinc-700 rounded-lg"  type="button" aria-haspopup="menu" aria-expanded="false"  >
                            <div className="text-sm flex flex-row gap-1 items-center  p-2 rounded-lg border-surface-elevation-3">
                             <svg fill="none" className="size-4" viewBox="0 0 24 24">
                             <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c-2.21 0-4-4.03-4-9s1.79-9 4-9m0 18c2.21 0 4-4.03 4-9s-1.79-9-4-9m-9 9a9 9 0 0 1 9-9" stroke="currentColor" stroke-linecap="square" stroke-width="2"></path>
                             </svg>
                             Public
                             <svg className="size-4 ml-1 h-[1em] w-[1em]  " stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                             <path d="m7 15 5 5 5-5"></path>
                             <path d="m7 9 5-5 5 5"></path>
                             </svg>
                            </div>
                          </button>
                       </div>
                     </div>
                  </div>
 
                </div>
 
                <div className="w-full flex mb-1 justify-end">
                    <button type="submit" className="z-0 group relative inline-flex bg-slate-50 text-zinc-900 px-4 py-2 rounded-full items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 hover:bg-primary/90  min-w-20 h-10 text-sm gap-unit-2 opacity-disabled  transition-none  hover:opacity-hover">
                      Create Character
                    </button>
                </div>
             </form>
           </div>
         </div>
     </main>
     </Layout>
    );
 }

 export default dynamic (() => Promise.resolve(CreateCharacter), {ssr: false});