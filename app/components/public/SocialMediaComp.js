import React from 'react'

const SocialMediaComp = () => {
  return (
      <div className="flex justify-start items-center gap-x-4 px-1">
          <a href={'/'}  className='rounded-full bg-white p-2 ' style={{boxShadow:'0 0 5px 1px #ddd'}}>
              <img src="/icon/instegram.svg" className="w-4 h-4" />
          </a>
          <a href={'/'}  className='rounded-full bg-white p-2 ' style={{boxShadow:'0 0 5px 1px #ddd'}}>
              <img src="/icon/instegram.svg" className="w-4 h-4" />
          </a>
          <a href={'/'}  className='rounded-full bg-white p-2 ' style={{boxShadow:'0 0 5px 1px #ddd'}}>
              <img src="/icon/instegram.svg" className="w-4 h-4" />
          </a>
          <a href={'/'}  className='rounded-full bg-white p-2 ' style={{boxShadow:'0 0 5px 1px #ddd'}}>
              <img src="/icon/instegram.svg" className="w-4 h-4" />
          </a>
      </div>
  )
}

export default SocialMediaComp