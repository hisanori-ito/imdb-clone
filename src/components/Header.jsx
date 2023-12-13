import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'
import {AiFillHome} from "react-icons/ai"
import { AiFillInfoCircle } from "react-icons/ai";

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <MenuItem title="HOME" address="/" Icon={AiFillHome} />
            <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
        </div>
        <div className='flex items-center space-x-5'>
            <Link href="/">
                <h2 className='text-2xl'>
                    <span className='font-bold bg-amber-500 py-1 px-1 rounded-lg mr-1'>IMDb</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </h2>
            </Link>
        </div>
    </div>
  )
}
