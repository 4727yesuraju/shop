import React,{useRef,useState} from 'react'
import {useDispatch} from 'react-redux'
import { changeImage } from '../imageSlice/ImageSlice';

const ChangeImage = () => {
    const dispatch = useDispatch();
    const handleSubmit = ()=>{
        input.current.files.length && dispatch(changeImage(URL.createObjectURL(input.current.files[0])));
    }
    const input = useRef();
  return (
    <div className="pb-3 border-b-4 px-4 flex flex-col gap-3">
        <p className="bold mb-3 ">change Image</p>
        <div className="flex justify-between">
            <input type="file" name="" id="" ref={input}/>
            <div className="border-4 py w-1/3"></div>
        </div>
        <button className="w-full bg-slate-800 text-white border rounded-lg py-1" onClick={handleSubmit}>upload</button>
    </div>
  )
}

export default ChangeImage