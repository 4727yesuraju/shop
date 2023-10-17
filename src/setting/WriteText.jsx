import React from 'react'

const WriteText = () => {
  return (
    <div>
        <p className="bold text-lg">Write Text</p>
        <div className="border-b-4 pt-3">
            <p>Upper Text</p>
            <input type="text" placeholder='upper Text' className="text-center w-full p-3"/>
        </div>
        <div className="border-b-4 pt-3">
            <p>Lowerer Text</p>
            <input type="text" placeholder='upper Text' className="text-center w-full p-3"/>
        </div>
        <div className="pt-3 flex gap-6">
            <div className="w-1/2">
                <p>Text size</p>
                <input type="range" placeholder='upper Text' className="text-center w-full p-3"/>
            </div>
            <div className="f">
                <p>Text color</p>
                {["black","red","yellow",'white'].map(color=>{
                       return <div key={color} className="pl-3"><input type="checkbox" name="" id="" className="px-4"/>{color}</div>
                })}
            </div>
        </div>
    </div>
  )
}

export default WriteText