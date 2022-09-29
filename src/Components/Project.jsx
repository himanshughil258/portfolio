import React from 'react'
import Myportfolio from "../projectimage/portfoliomy.png"

const Project = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noreferrer');
  };
  const projects = [
    {
      id: 1,
      src: Myportfolio,
      url: "https://github.com/himanshughil258/portfolio"
    },
  ]
  return (
    <div 
     name="project"
     className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="py-40">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className='py-6'>Check out some of my projects here</p>
        </div>
        <div className='pb-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px=0'>
        {
          projects.map(({id, src, url}) => (
            
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-centre justify-center'>
              <button onClick={() => openInNewTab(url)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Project
