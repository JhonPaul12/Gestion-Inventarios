import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from "../../assets/logo.svg"

export const AuthLayout = () => {
  return (
    <>
        <section className='auth__layout'>
            <div className='flex items-center mb-4'>
                <img className="max-w-[70px] " src={Logo} alt="Gesty" />
                <div className='leading-[.5]'>
                    <h1 className='text-2xl fond-bold'>Gesty</h1>
                    <p>gestiona tu inventario</p>

                </div>
            </div>
            <Outlet/>

        </section>
    </>
  )
}
