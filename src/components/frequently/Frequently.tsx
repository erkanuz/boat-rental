import React from 'react'
import { FreqContent } from '../../data/data'

export const Frequently: React.FC = () => {
  return (
    <div className='mx-auto'>
        <div className='grid place-items-center gap-5'>
            {
                FreqContent.map((item, id) => (
                    <div key={id}
                    className='relative max-w-full overflow-hidden'>
                        <input 
                        type="checkbox"
                        className='absolute bg-base-white top-0 inset-x-0 w-full h-12 z-10 opacity-0 cursor-pointer peer' 
                        />

                        <div className='h-12 w-full flex items-center border-b-2 peer-hover:bg-base-freqHover transition-colors'>
                            <h3 className='md:text-md_paragraph text-sm_paragraph'>{item.title}</h3>
                        </div>

                        <div className='absolute top-3 right-3 text-base-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                            <item.icon size={24} />
                        </div>

                        <div className='max-h-0 peer-checked:max-h-80 overflow-hidden transition-all duration-500'>
                            <div className='py-4 text-base-black text-sm_paragraph'>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
