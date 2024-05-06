import React from 'react'
import { CardProps } from './card.type'
import Image from 'next/image'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { Icons } from '../ui_components/Icons'

const Card = ( { data }: CardProps ) => {
    console.log(data)
  return (
		<div className='w-full h-full border p-4 flex flex-col space-y-2 overflow-clip rounded-2xl hover:scale-105 duration-300'>
			<div className='border rounded-xl flex space-x-1 w-fit px-2 py-0.5 items-center justify-center'>
				<Image
					width='48'
					height='48'
					src='https://img.icons8.com/color/48/hourglass.png'
					alt='hourglass'
					className='w-3 h-3'
					unoptimized
				/>
				<p className='text-[0.7rem] font-light'>Posted 8 days ago</p>
			</div>
			<div className='flex space-x-2 items-center'>
				<Image
					src={data.logoUrl}
					alt='logo'
					width={200}
					height={200}
					className='w-12 h-12 flex-shrink-0 rounded-lg'
					unoptimized
				/>
				<div className='text-[0.8rem]'>
					<h1 className='text-gray-500 font-semibold'>{data.companyName}</h1>
					<h1 className='font-light'>{capitalizeFirstLetter(data.jobRole)}</h1>
					<h1 className='text-[0.7rem]'>
						{capitalizeFirstLetter(data.location)}
					</h1>
				</div>
			</div>
			<div className=''>
				<h1 className='text-[0.8rem] text-gray-600'>
					Estimated Salary: ₹{data.minJdSalary ?? "-"} - ₹
					{data.maxJdSalary ?? "-"} LPA
				</h1>
			</div>
			<div>
				<h1 className=''>About Company:</h1>
				<div className='max-h-52 overflow-clip relative'>
					<h2 className='text-sm font-semibold'>About us</h2>
					<p className='text-sm font-light'>{data.jobDetailsFromCompany}</p>
					<div className='absolute top-0 left-0 h-full bg-gradient-to-b from-transparent to-white w-full'></div>
					<div className='absolute bottom-0 w-full flex items-center justify-center'>
						<button className='text-blue-500 text-sm'>view Job</button>
					</div>
				</div>
			</div>
			<div className='text-sm'>
				<h1 className='font-semibold text-gray-500'>Minimum Experience</h1>
				<h1 className='font-light'>{data.minExp ?? 0} years</h1>
			</div>
			<button className='flex items-center justify-center bg-[#55efc4] h-10 rounded-lg text-sm'>
				<Icons.flash className='text-xl' />
				<h1 className='font-semibold'>Easy Apply</h1>
			</button>
			<button className='flex items-center justify-center space-x-1.5 bg-[#4943da] h-10 rounded-lg text-sm'>
				<div className='blur-[1px] relative w-fit h-fit'>
					<Image
						src={"/profile2.jpg"}
						alt='profile 1'
						width={100}
						height={100}
						className='w-6 h-6 rounded-full border border-white'
						unoptimized
					/>
					<div className='bg-green-500 w-1 h-1 rounded-full absolute bottom-0.5 right-0.5'></div>
				</div>
				<div className='blur-[1px] relative w-fit h-fit'>
					<Image
						src={"/profile1.jpg"}
						alt='profile 1'
						width={100}
						height={100}
						className='w-6 h-6 rounded-full border border-white'
						unoptimized
					/>
					<div className='bg-green-500 w-1 h-1 rounded-full absolute bottom-0.5 right-0.5'></div>
				</div>
				<h1 className='text-white font-light'>Unlock referal asks</h1>
			</button>
		</div>
	);
}

export default Card