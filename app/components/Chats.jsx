import React from 'react'
import Userchat_Card from './Userchat_Card'

const Chats = () => {
  
  return (
    <div className='flex flex-col overflow-hidden pt-2 md:pt-5 relative'>
                    <div className='text-foreground hidden lg:block ml-5'>
                        <p className='text-sm font-medium'>Chats</p>
                    </div>
                    <div className='w-full relative flex flex-col gap-1 overflow-x-auto p-4 pt-3' aria-label='Recent Chats'>
                        <ul id='char-chat' className='w-full flex flex-col gap-0.5 outline-none' role='listbox' tabIndex='0'>
                           <li className='relative mb-2' role='presentation'>
                            <span id="recent" role="presentation" className="pl-1 text-xs text-zinc-400 " >Today</span>
                             <ul role="group" className="pt-1" >
                                <Userchat_Card name={"Annie Affirmation"} pic={'https://characterai.io/i/80/static/avatars/uploaded/2024/2/21/7Oa7WcFcz9Gp1oenHZ-IfcwNFbajpj6yeH74jUQAVv0.webp?webp=true&anim=0'} />                                  
                                <Userchat_Card name={"Gojo Saturo"} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp?webp=true&anim=0'} />                                  
                                <Userchat_Card name={"Elon Musk"} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/12/2/0cXVHLszZQ8idr8qGkhXB4-1PzA_qbAFmVl2V7v9NZc.webp?webp=true&anim=0'} />                                  
                                <Userchat_Card name={"Naruto"} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/10/26/l9HqUWsLaNKDoqez1nBE1Ud4bshVuP2hfW3PuUGkOZw.webp?webp=true&anim=0'} />                                  
                                <Userchat_Card name={"Librarian Linda"} pic={'https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0'} />                                  
                                            </ul>
                           </li>
                           <li className='relative mb-2' role='presentation'></li>
                           <li className='relative mb-2' role='presentation'></li>
                        </ul>

                    </div>
                 </div>
  )
}

export default Chats