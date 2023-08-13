'use client'
// import { PropagateLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className="w-full mt-12 flex flex-col gap-y-20 justify-start items-center">
      {/* <PropagateLoader color="#333" /> */}
      <h1>جار التحميل</h1>
    </div>
  )
}

export default loading