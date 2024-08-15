import React from 'react'
import {assets} from '../assets/assets';

function AppDownload() {
  return (
    <div id='mobile-app' className='m-auto mt-24 text-center font-medium text-[3vw]'>
        <p>
            For better Experience Download <br/> Tomato App
        </p>
        <div className='flex justify-center gap-6 mt-10 '>
            <img src={assets.play_store} alt=""
            className=' transition duration-500 cursor-pointer hover:scale-105' />
            <img src={assets.app_store} alt=""
            className='transition duration-500 cursor-pointer hover:scale-105' />
        </div>
    </div>
  )
}

export default AppDownload