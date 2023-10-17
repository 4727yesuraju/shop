import React from 'react'
import {useSelector} from 'react-redux';
const Menu = () => {
    const images = useSelector(state=>state.images);
    console.log(images);
  return (
    <div className="border-4 col-span-1 md:col-span-2">
        <img src={images.image} alt="" className="object-cover w-screen"/>
    </div>
  )
}

export default Menu