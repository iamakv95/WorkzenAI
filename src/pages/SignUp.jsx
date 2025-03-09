import React from 'react'
import {
    PiGoogleLogoFill, PiGithubLogoFill, PiFacebookLogoFill,
    PiAsteriskSimpleFill,
    PiArrowLeft,
    PiArrowRight,
    PiShootingStarThin
} from "react-icons/pi";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex bg-black items-center justify-center py-16'>
            <div className="container flex items-center justify-center py-4">
                <div className='w-4/5 flex items-center justify-between gap-28'>
                    <div className='w-1/2'>
                        <h3 className='text-2xl text-white/80 mb-8'>Cteate a new account</h3>
                        <form action="" className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-white/70'>Name</label>
                            <input type="text" name="name" id="name" placeholder='John Dear' className='border-white/20 border placeholder:text-offwhite/40 text-white p-3 rounded-xl outline-none bg-transparent' />
                            <label htmlFor='email' className='text-white/70 mt-4'>Email</label>
                            <input type="email" name="email" id="email" placeholder='example@email.com' className='border-white/20 text-white placeholder:text-offwhite/40 border p-3 rounded-xl outline-none bg-transparent' />
                            <label htmlFor="password" className='text-white/70 mt-4'>Password</label>
                            <input type="password" name="password" id="password" placeholder='*********' className='border-white/20 text-white placeholder:text-offwhite/40 border p-3 rounded-xl outline-none bg-transparent' />

                            <input type="button" value="Register" className='mt-8 bg-white p-3 rounded-xl text-xl font-medium' />
                        </form>
                        <div className='flex items-center justify-center gap-6 mt-10 '>
                            <PiGoogleLogoFill className='text-white/50 hover:text-white transition-all duration-300 w-10 h-10 cursor-pointer' onClick={() => { }} />
                            <PiGithubLogoFill className='text-white/50 hover:text-white transition-all duration-300 w-10 h-10 cursor-pointer' onClick={() => { }} />
                            <PiFacebookLogoFill className='text-white/50 hover:text-white transition-all duration-300 w-10 h-10 cursor-pointer' onClick={() => { }} />
                        </div>
                    </div>
                    <div className='w-1/2 relative'>
                        <PiShootingStarThin className='absolute top-[30%] right-[14%] opacity-5 text-white w-[200px] h-[200px]' />
                        <div className='bg-white/30 rounded-xl p-8 inverted-radius'>
                            <h3 className='text-white/80 text-4xl font-medium mt-6  w-4/5'>What's our joobseekers said.</h3>
                            <div className='mt-6'>
                                <p className='text-white/80 text-sm  w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit laboriosam est facilis!</p>
                                <h5 className='text-white/60 mb-1 mt-4'>Username</h5>
                                <p className='text-white/60 text-sm'>User Role</p>
                                <div className='flex items-center gap-6 mt-6'>
                                    <div className='bg-black py-4 px-6 rounded-md cursor-pointer'>
                                        <PiArrowLeft className='text-white' />
                                    </div>
                                    <div className='bg-black py-4 px-6 rounded-md cursor-pointer'>
                                        <PiArrowRight className='text-white' />
                                    </div>
                                </div>
                            </div>
                            <div className='relative mt-16'>
                                <div className='bg-white/60 rounded-xl p-5 inverted-radius'>
                                    <h5 className='text-black/80 text-lg font-medium mb-2 w-[80%]'>Get your right job at right place, apply now</h5>
                                    <p className='text-sm text-black/70 w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui at! Consectetur sit nemo provident.</p>
                                </div>
                                <div className='absolute right-1 top-1 bg-white/60 rounded-full p-2'>
                                    <PiAsteriskSimpleFill className='text-black w-8 h-8' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp