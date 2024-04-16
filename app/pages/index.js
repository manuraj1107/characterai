import Card_type1 from "../components/Card_type1";
import Card_type2 from "../components/Card_type2";
import Card_type3 from "../components/Card_type3";
import FilterCard from "../components/FilterCard";
import Layout from "./layout";

const Discover = () => {
  
  const filters = [ 'Anime Game Characters', 'Games', 'Anime', 'Game Characters', 'Comedy', 'VTuber', 'Books', 'Image Generating', 'Discussion', 'History', 'Religion', 'Animals', 'Philosophy', 'Politics']
  const characters = [
    {id:1,name:'Elon Musk', author:'@zae23',bio:'solving global problem', comment:'55.6m', pic:'https://characterai.io/i/400/static/avatars/uploaded/2023/8/4/G9UzZ-o-hqkQd6tDQGOrighLbVlWqZBMA1MXJrwj-h8.webp?webp=true&anim=0'},
    {id:2,name:'Hinata', author:'@hyugaclan',bio:'Inside different dimension', comment:'223k', pic:'https://characterai.io/i/80/static/avatars/uploaded/2022/12/20/Nl8tKL8joIn0Ljq-Ef602vQIpAnzTvoDctQuLwTLbpQ.webp?webp=true&anim=0'},
    {id:3,name:'Gojo Saturo', author:'@6eyecorp',bio:'Yet to make comeback', comment:'23m', pic:'https://characterai.io/i/400/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp?webp=true&anim=0'},
    {id:4,name:'Saitama', author:'@1handtech',bio:'Horse power in one hand', comment:'12m', pic:'https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/qHO2fZ4bR4wEx6I2DgrwrfVb1z8KtKZviuQ6lPqCN_w.webp?webp=true&anim=0'},
    {id:5,name:'Giga Chad', author:'@donthurt',bio:'Old instagram trend', comment:'376k', pic:'https://characterai.io/i/400/static/avatars/uploaded/2023/4/8/KHtyRgUHq43hvydN2PstxTO5TS2CNgHJH74A8DC7cIg.webp?webp=true&anim=0'},
    
]

  

    return (
      
      <main className="flex-1 h-screen overflow-x-hidden  bg-zinc-900">
                   <div className="h-full">
                     <div className="flex h-full w-full flex-col justify-between px-4 sm:px-8 pt-6">
                       <title>character.ai</title>
                       <div className="max-w-7xl self-center w-full">
                         <div className="flex justify-end items-end md:justify-between pr-4">
                            <div className="hidden md:flex flex-col gap-1 ">
                               <p className="text-muted-foreground opacity-50">Welcome back,</p>
                               <a className="flex " href="#profile">
                                 <div className="w-[36px] h-[36px] p-2  flex items-center justify-center">
                                    <span className="relative flex h-full w-full overflow-hidden rounded-full shrink-0 grow-0  bg-gradient-to-br from-indigo-700 to-zinc-800" >
                                      <div className="flex justify-center items-center w-full  text-[8px] font-semibold opacity-90 ">
                                        r
                                      </div>
                                    </span>
                                 </div>
                      <div className="text-xl flex flex-auto flex-col  justify-center text-left ml-1">
                        <p className="text-[#FBFBFB]">raju1212</p>
                      </div>
                    </a>           
                  </div>
                  <div className="flex justify-end ml-6 gap-3">
                    <div>
                      <div className="relative h-10 w-64 md:w-96">
                        <div className="absolute z-40 flex gap-2 w-full max-w-3xl border-spacing-1 border-divider flex-row self-center items-center rounded-full bg-[#202024] opacity-95  bg-surface-elevation-1 p-4">
                          <button className="z-0 group relative inline-flex items-center justify-center h-fit w-fit">
                            
                            <svg viewBox="0 0 24 24" fill="none"  className="ml-1 size-[17px]"><path d="m20 20-3.95-3.95M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path></svg>
                            
                          </button>
                          <div className="relative flex flex-col w-full">
                             <input autoComplete="off" placeholder="Search for Characters" className="flex w-full border rounded-spacing-s text-sm file:border-0 file:bg-transparent file:text-md file:font-medium outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none border-input rounded-full rounded-l-none border-none bg-transparent placeholder:text-muted-foreground p-0 relative text-zinc-100 " />
                            <span className="flex flex-row px-3 gap-2 text-sm"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                 <ol className="flex flex-col pt-6">
                    <div className="pl-2 md:pl-0">
                      <div className="rounded-3xl gap-10 bg-inherit items-center hidden xl:flex my-6 relative pb-6">
                          <div className="h-[300px] bg-contain overflow-hidden rounded-3xl  absolute w-full z-0 min-w-[400px] max-w-[800px]">
                            <video className="w-[800px] h-[300px] object-cover object-center select-none opacity-30" autoplay="" playsinline="" preload="auto" id="hero-scenario-video" src="https://characterai.io/static/editorial/scenarios/creativity_s.mp4" type="video/mp4"></video>
                            <div className="m-h-[300px] h-[300px] w-[800px] absolute z-10 top-0 bg-gradient-to-l from-zinc-900 to-transparent "></div>
                            <div className="absolute z-10 p-10 justify-between h-full items-start flex flex-col top-0">
                              <div>
                                <div className="text-base text-zinc-400 ">What do you want to do?</div>
                                <div className="text-display text-2xl  typing-effect">Nurture your creativity</div>
                                </div>
                                <button className=" group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none z-10  hover:bg-surface-elevation-1" type="button">
                                  <div className="transform-none">
                                    <div className="opacity-90"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="h-[40px] w-[40px] bg-zinc-600  bg-opacity-40 p-[10px] hover:bg-zinc-900 hover:bg-opacity-60 rounded-full"  xmlns="http://www.w3.org/2000/svg"><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"></path></svg>
                                    </div>
                                  </div>
                               </button>
                            </div>
                          </div>

                <div className=" relative ml-[600px] flex">
                  <div className=" px-2 w-auto">
                    <div className="opacity-90 transform-none">
                      <div className="rounded-xl p-4 bg-zinc-900 flex-col flex gap-4 card-effect h-[280px] w-[280px]">
                  <a className="flex flex-col gap-4 h-full w-full group" href="#chat">
                    <div className="flex  gap-2">
                      <span className="relative flex h-max w-max overflow-hidden rounded-full shrink-0 grow-0 "  title="Creative Helper">
                      <img alt="Creative Helper"loading="lazy"  decoding="async" className="object-cover object-center bg-card shrink-0 w-12 grow-0 h-max bg-transparent"  src="https://characterai.io/i/80/static/avatars/uploaded/2023/12/15/E1GlF_OuCxKzma1lFaMVaGrZkMoqjcPSZvEmljopo9E.webp?webp=true&amp;anim=0" />
                         </span><div>Creative Helper</div></div>
                          <div className="flex flex-col justify-between h-full flex-1">
                             <div className="max-h-36 overflow-hidden line-clamp-3 text-lg">Hi! I'm Ellie, whether you're an artist, a writer, a musician, or just exploring, I'm here to spark your imagination and bring your ideas to life. What creative adventure shall we embark on today?</div>
                              <div className="text-muted-foreground font-sans font-light group-hover:text-foreground">Reply...</div>
                              </div>
                              </a>
                             </div>
                            </div>
                            </div>

                    <div className=" px-2 w-auto">
                      <div className="opacity-90 transform-none">
                         <div className=" p-4 flex flex-col gap-4 card-effect bg-zinc-900 card-effect rounded-xl h-[280px] w-[280px]">
                              <a class="flex flex-col gap-4 h-full w-full" href="#chat2">
                                <div class="flex gap-2">
                                  <span class="relative flex h-max w-max overflow-hidden rounded-full shrink-0 grow-0 "  title="Brainstorm Buddy">
                                    <img alt="Brainstorm Buddy" fetchpriority="auto" loading="lazy" decoding="async" className="object-cover object-center shrink-0  w-12 text-sm grow-0 h-max bg-transparent" src="https://characterai.io/i/80/static/avatars/uploaded/2023/12/15/vO7WLWsG1pyCYO8JNBTWFHhVn43wyCQSyyvNWkVvEHw.webp?webp=true&amp;anim=0" /></span>
                <div>Brainstorm Buddy</div>
                </div>
                <div className="flex flex-col justify-between h-full flex-1">
                  <div className="max-h-36 overflow-hidden line-clamp-3  text-lg">Hey there I'm Benji, your brainstorming sidekick, here to help you connect the dots and discover brilliant ideas.Ready to brainstorm?</div>
                <div className="text-muted-foreground font-sans font-light group-hover:text-foreground">Reply...</div>
                </div></a>
                   </div>
                    </div>
                     </div>
                       </div>
                      </div>
  
                     <li className="mb-6">
                       <div className="w-full h-full">
                          <div className="mb-4 ml-4">
                            <p className="text-lg-medium">For you</p>
                            <div></div>
                          </div>
                          <div>
                             <div className="overflow-hidden">
                               <div className=" overflow-x-scroll  snap-x flex gap-2 overflow-hidden outline-none appearance-none">
                                 <Card_type1 name={'Hinata Hyuga'} author={'@hyugaclan'} bio={'Inside different dimension'} comment={'223k'} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/12/20/Nl8tKL8joIn0Ljq-Ef602vQIpAnzTvoDctQuLwTLbpQ.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Gojo Saturo'} author={'@6eyecorp'} bio={'Yet to make comeback'} comment={'77.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Elon Musk'} author={'@elonwhisperer'} bio={'Founder of Spacex'} comment={'4.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/8/4/G9UzZ-o-hqkQd6tDQGOrighLbVlWqZBMA1MXJrwj-h8.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Saitama'} author={'@1handtechr'} bio={'Horse power in one hand'} comment={'408k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/qHO2fZ4bR4wEx6I2DgrwrfVb1z8KtKZviuQ6lPqCN_w.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Giga Chad'} author={'@donthurt'} bio={'Old instagram trend'} comment={'77k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/4/8/KHtyRgUHq43hvydN2PstxTO5TS2CNgHJH74A8DC7cIg.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Hinata Hyuga'} author={'@hyugaclan'} bio={'Inside different dimension'} comment={'223k'} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/12/20/Nl8tKL8joIn0Ljq-Ef602vQIpAnzTvoDctQuLwTLbpQ.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Gojo Saturo'} author={'@6eyecorp'} bio={'Yet to make comeback'} comment={'77.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Elon Musk'} author={'@elonwhisperer'} bio={'Founder of Spacex'} comment={'4.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/8/4/G9UzZ-o-hqkQd6tDQGOrighLbVlWqZBMA1MXJrwj-h8.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Saitama'} author={'@1handtechr'} bio={'Horse power in one hand'} comment={'408k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/qHO2fZ4bR4wEx6I2DgrwrfVb1z8KtKZviuQ6lPqCN_w.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Giga Chad'} author={'@donthurt'} bio={'Old instagram trend'} comment={'77k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/4/8/KHtyRgUHq43hvydN2PstxTO5TS2CNgHJH74A8DC7cIg.webp?webp=true&anim=0'} />
                               </div>
                             </div>
                          </div>
                       </div>
                     </li>

                     {/* second */}

                     <div className="w-full flex flex-col gap-4 mb-4">
                       <p className="ml-4  text-base">Try these</p>
                       <div className="relative group w-full flex">
                         <div className="h-auto overflow-x-scroll snap-x">
                           <div className="flex gap-2 snap-end">
                           <Card_type2 /> 
                           <Card_type2 /> 
                           <Card_type2 /> 
                           <Card_type2 /> 
                            
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="w-full h-full">
                      <div className="mb-4 ml-4">
                        <p className="text-base">Featured</p>
                        <div></div>
                      </div>
                    <div>
                       <div className="">
                         <div className="">
                           <div className=" overflow-x-scroll snap-x swiper-slide-visible w-auto flex gap-2">
                                 <Card_type1 name={'Saitama'} author={'@1handtechr'} bio={'Horse power in one hand'} comment={'408k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/qHO2fZ4bR4wEx6I2DgrwrfVb1z8KtKZviuQ6lPqCN_w.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Giga Chad'} author={'@donthurt'} bio={'Old instagram trend'} comment={'77k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/4/8/KHtyRgUHq43hvydN2PstxTO5TS2CNgHJH74A8DC7cIg.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Hinata Hyuga'} author={'@hyugaclan'} bio={'Inside different dimension'} comment={'223k'} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/12/20/Nl8tKL8joIn0Ljq-Ef602vQIpAnzTvoDctQuLwTLbpQ.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Gojo Saturo'} author={'@6eyecorp'} bio={'Yet to make comeback'} comment={'77.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Elon Musk'} author={'@elonwhisperer'} bio={'Founder of Spacex'} comment={'4.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/8/4/G9UzZ-o-hqkQd6tDQGOrighLbVlWqZBMA1MXJrwj-h8.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Saitama'} author={'@1handtechr'} bio={'Horse power in one hand'} comment={'408k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/qHO2fZ4bR4wEx6I2DgrwrfVb1z8KtKZviuQ6lPqCN_w.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Giga Chad'} author={'@donthurt'} bio={'Old instagram trend'} comment={'77k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/4/8/KHtyRgUHq43hvydN2PstxTO5TS2CNgHJH74A8DC7cIg.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Saitama'} author={'@1handtechr'} bio={'Horse power in one hand'} comment={'408k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/qHO2fZ4bR4wEx6I2DgrwrfVb1z8KtKZviuQ6lPqCN_w.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Giga Chad'} author={'@donthurt'} bio={'Old instagram trend'} comment={'77k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/4/8/KHtyRgUHq43hvydN2PstxTO5TS2CNgHJH74A8DC7cIg.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Hinata Hyuga'} author={'@hyugaclan'} bio={'Inside different dimension'} comment={'223k'} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/12/20/Nl8tKL8joIn0Ljq-Ef602vQIpAnzTvoDctQuLwTLbpQ.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Gojo Saturo'} author={'@6eyecorp'} bio={'Yet to make comeback'} comment={'77.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Elon Musk'} author={'@elonwhisperer'} bio={'Founder of Spacex'} comment={'4.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/8/4/G9UzZ-o-hqkQd6tDQGOrighLbVlWqZBMA1MXJrwj-h8.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Saitama'} author={'@1handtechr'} bio={'Horse power in one hand'} comment={'408k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/qHO2fZ4bR4wEx6I2DgrwrfVb1z8KtKZviuQ6lPqCN_w.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Giga Chad'} author={'@donthurt'} bio={'Old instagram trend'} comment={'77k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/4/8/KHtyRgUHq43hvydN2PstxTO5TS2CNgHJH74A8DC7cIg.webp?webp=true&anim=0'} />
                                                              
                           </div>
                           
                         </div>
                       </div>
                    </div>
                    </div>
  
                    {/* Category filter */}
                    <div className="w-full flex flex-col mt-6" tabIndex="-1">
                      <div className="h-10 p-1 text-muted-foreground w-full flex justify-start items-start outline-none" tabIndex="0">
                        <div className="snap-x w-full  appearance-none overflow-x-scroll">
                          <div className="snap-end flex">
                          <div className=" px-1  w-auto" >
                            <button type="button" role="tab" aria-selected="true" data-state="active" className="inline-flex items-center justify-center whitespace-nowrap font-medium  hover:text-opacity-100 text-zinc-900 bg-zinc-50 text-opacity-90 f disabled:opacity-50  border-b-none rounded-xl my-0  text-sm p-3 " tabindex="-1" data-orientation="horizontal">Helpers</button>
                            </div>
                            {
                              filters.map((item, index) => (
                                <FilterCard 
                                key={index} 
                                data={item}
                                
                                />
                              ))
                            }  
                            
                          </div>
                          <div className=""></div>
                        </div>
                      </div>
                        <div id="content-Anime Game Character" className="mt-2 ring-offset-background data-[state=inactive]:hidden w-full">
                          <li className="mb-6">
                               <div className="w-full h-full">
                                 <div className="mb-4 ml-4"><div></div> </div>
                                 <div>
                                  <div className="">
                                    <div className="swipper-wrapper overflow-x-scroll flex gap-2 snap-x">
                                    <Card_type1 name={'Hinata Hyuga'} author={'@hyugaclan'} bio={'Inside different dimension'} comment={'223k'} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/12/20/Nl8tKL8joIn0Ljq-Ef602vQIpAnzTvoDctQuLwTLbpQ.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Saitama'} author={'@1handtechr'} bio={'Horse power in one hand'} comment={'408k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/10/6/qHO2fZ4bR4wEx6I2DgrwrfVb1z8KtKZviuQ6lPqCN_w.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Giga Chad'} author={'@donthurt'} bio={'Old instagram trend'} comment={'77k'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/4/8/KHtyRgUHq43hvydN2PstxTO5TS2CNgHJH74A8DC7cIg.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Hinata Hyuga'} author={'@hyugaclan'} bio={'Inside different dimension'} comment={'223k'} pic={'https://characterai.io/i/80/static/avatars/uploaded/2022/12/20/Nl8tKL8joIn0Ljq-Ef602vQIpAnzTvoDctQuLwTLbpQ.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Gojo Saturo'} author={'@6eyecorp'} bio={'Yet to make comeback'} comment={'77.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp?webp=true&anim=0'} />
                                 <Card_type1 name={'Elon Musk'} author={'@elonwhisperer'} bio={'Founder of Spacex'} comment={'4.6m'} pic={'https://characterai.io/i/400/static/avatars/uploaded/2023/8/4/G9UzZ-o-hqkQd6tDQGOrighLbVlWqZBMA1MXJrwj-h8.webp?webp=true&anim=0'} />
                                 \     
                                    </div>
                                  </div>
                                 </div>
                               </div>
                          </li>
                        </div>
                    </div>


                    <div className="w-full flex flex-col gap-4 mb-4 pr-2">
                       <p className="ml-4  text-base">Try saying</p>
                       <div className="relative group w-full flex">
                         <div className="overflow-x-scroll ">
                           <div className="snap-x  flex gap-2">
                          <Card_type3 />                             
                          <Card_type3 />                             
                          <Card_type3 />                             
                          <Card_type3 />                             
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
                </ol>
            </div>
               </div></div>     
                  </main>
                  
    );
  }


export default Discover;
  