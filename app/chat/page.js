
import dynamic from "next/dynamic"
import { Sidebar_Right } from "../components/Sidebar_Right"
import Message_AI from "../components/Message_AI"
import Message_Me from "../components/Message_Me"
import CharacterBio from "../components/CharacterBio"
import ChatInput from "../components/ChatInput"
import Layout from "../pages/layout"

const ChatCharacter = () => {
    return(
      <Layout>
      <main className="h-[100dvh] flex-1 overflow-x-hidden">
        <div className="h-full">
          <div className="size-full flex overflow-x-hidden">
             <div className="flex flex-col w-full items-center flex-1 h-screen">
  
             
              {/* Medium and Small size */}
  
               <div className="w-full justify-between 2xl:hidden p-6 pl-16 md:px-12 h-20 flex">
                 <div className="flex gap-3">
                   <button key="img" type="button" aria-haspopup="dialog">
                     <span className="relative flex h-auto w-full overflow-hidden rounded-full shrink-0 grow-0 min-w-[40px] min-h-[40px]" title="Libra">
                      <img className="object-cover object-center shrink-0 grow-0 h-full w-[40px]  bg-transparent" alt="Annie Affirmations" loading="lazy" src="https://characterai.io/i/80/static/avatars/uploaded/2024/2/21/7Oa7WcFcz9Gp1oenHZ-IfcwNFbajpj6yeH74jUQAVv0.webp?webp=true&amp;anim=0" />
                     </span>
                   </button>
                   <div>
                     <p className="  font-normal line-clamp-1 text-ellipsis  break-normal  overflow-hidden whitespace-normal">Annie Affirmations</p>
                     <div className=" text-zinc-300 hover:text-zinc-100 font-normal text-xs truncate">
                        <a className="hover:text-foreground" href="/profile/noam">By @MarieLovesMatcha</a>
                     </div>
                   </div>
                 </div>
                 <div className="flex gap-2">
                   <button key="r-1232" className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 border border-zinc-700 hover:bg-zinc-700 text-small gap-2 rounded-full px-0   bg-outline border-border-outline   min-w-10 w-10 h-10 ">
                   <svg viewBox="0 0 24 24" fill="none" className="size-4"><path d="M9 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0zm8 2a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-4 2a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm-8 2a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0zm13.5 4a1 1 0 1 0-2 0v2.5H14a1 1 0 1 0 0 2h2.5V21a1 1 0 1 0 2 0v-2.5H21a1 1 0 1 0 0-2h-2.5z" fill="currentColor" ></path></svg>
                   </button>
                   <div className="2xl:hidden">
                   <button key='r-123' className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 border border-zinc-700 text-small gap-2 hover:bg-zinc-700 rounded-full px-0   bg-outline border-border-outline   min-w-10 w-10 h-10" type="button">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"  className="h-[1em] w-[1em]" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg></button>
                   </div>
                 </div>
               </div>
  
          {/* Main Chat */}
  
               <div className="flex w-full flex-col justify-start h-full overflow-y-scroll overflow-x-hidden align-middle">
                   <div className="overflow-x-hidden overflow-y-scroll px-1 flex flex-col-reverse min-w-full appearance-none ">
                      
                      {/* My message */}
                      <Message_Me />
                      {/* AI message */}
                      <Message_AI />
                       {/* Top Side Bio */}
                     <CharacterBio />  
                  </div>
               </div>
               {/* Input textarea */}
             <ChatInput />
          </div>

          {/* Right Side */}
          <Sidebar_Right /> 
          </div>
        </div>
      </main>
    </Layout>
    )
  }


  export default dynamic (() => Promise.resolve(ChatCharacter), {ssr: false});
  