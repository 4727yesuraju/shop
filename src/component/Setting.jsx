import React from 'react'
import ChangeColor from '../setting/ChangeColor'
import ChangeImage from '../setting/ChangeImage'
import WriteText from '../setting/WriteText'

const Setting = () => {
  return (
    <div className="border-4 px-2">
        <h1 className="text-2xl bold text-center w-full pb-2">Settings</h1>
        <ChangeColor />
        <ChangeImage />
        <WriteText />
    </div>
  )
}

export default Setting