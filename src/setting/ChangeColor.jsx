import React from 'react'
import {useDispatch} from 'react-redux';
import { changeImage } from '../imageSlice/ImageSlice';

const ChangeColor = () => {
    const dispatch = useDispatch();
  return (
    <div className="pb-4 border-b-4">
            <p className="bold mb-3">change T-shirt color</p>
            <div className="flex gap2 overflow-scroll">
                {[1,2,3,4,5].map((num,index)=>{
                    return <img key={index} src={`./images/shirt${num}.png`} alt="photo"  className="object-cover h-[80px]" onClick={()=>dispatch(changeImage(`./images/shirt${index+1}.png`))}/>
                })}
            </div>
        </div>
  )
}

export default ChangeColor