import React from 'react'

const CharacterBio = () => {
  return (
    <div className="group relative max-w-3xl min-max-w-3xl m-auto w-full">
                      
                     <div className="opacity-90">
                      <div className="flex  flex-col items-center justify-center text-center gap-1 pt-12 lg:pt-32">
                      <button type="button" aria-haspopup="dialog">
                        <span className="relative flex h-auto w-full overflow-hidden rounded-full shrink-0 grow-0 min-w-16 min-h-16" title="Annie Affirmations">
                          <img alt="Annie Affirmations" loading="lazy" decoding="async" data-nimg="1" className="object-cover object-center w-16 min-h-16 shrink-0 grow-0 h-full bg-transparent" src="https://characterai.io/i/80/static/avatars/uploaded/2024/2/21/7Oa7WcFcz9Gp1oenHZ-IfcwNFbajpj6yeH74jUQAVv0.webp?webp=true&amp;anim=0" />
                          </span>
                      </button>
                       <p className="bold text-md  text-teal-50">Annie Affirmations</p>
                       <p className="font-light text-normal"></p>
                        <div className="text-xs truncate  font-light">
                          <a className="hover:text-zinc-50 text-zinc-400" href="/profile/MarieLovesMatcha">By @MarieLovesMatcha</a>
                        </div>
                      </div>
                    </div>
                    </div>
  )
}

export default CharacterBio