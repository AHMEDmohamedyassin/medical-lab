import React from 'react'

const FooterContainer = ({children}) => {
  return (
    <div className='flex justify-start items-center flex-col relative -z-20'
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1204136301/photo/abstract-dotted-world-map.jpg?b=1&s=612x612&w=0&k=20&c=_kn-gUPoKzzjZhL4E56SoEm0-L-4tc2p7MDK79kF1Hw=')` ,
            backgroundPosition : 'center' ,
            backgroundSize: 'cover'
        }}
    >
        <div className='w-full h-full absolute top-0 left-0 bg-slate-100/90 -z-10'></div>
            {children}
    </div>
  )
}

export default FooterContainer