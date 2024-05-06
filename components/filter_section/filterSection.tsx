import React from 'react'
import Dropdown from '../ui_components/dropdown'
import { setExperience, setJobRole, setlocation, setMinBasePay, setRemote } from '@/redux/reducers/filtersSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux_hooks';
import {roles, experience, remote, minSalary} from "@/constants/filters.constants"

const FilterSection = () => {

  const dispatch = useAppDispatch()

  const filters = useAppSelector( ( state ) => state.filters );
  console.log("Redux Store State:", filters);

	const handleJobRoleChange = (value: string[]) => {
		dispatch(setJobRole(value));
  };
  
	const handleExpChange = (value: string[]) => {
		dispatch(setExperience(value));
	};
  
	const handleLocationChange = (value: string[]) => {
		dispatch(setlocation(value));
	};
  
	const handleRemoteChange = (value: string[]) => {
		dispatch(setRemote(value));
	};
  
	const handleminBasePayChange = (value: string[]) => {
		dispatch(setMinBasePay(value));
	};

  return (
		<div className='text-blue-500 w-full mb-10 gap-2 flex items-end flex-wrap'>
			<div>
				{filters.jobRole.length > 0 && (
					<h1 className='text-sm text-gray-500'>Role</h1>
				)}
				<Dropdown
					options={roles}
					placeholder='Role'
					onChange={handleJobRoleChange}
				/>
			</div>
			<div>
				{filters.exp.length > 0 && (
					<h1 className='text-sm text-gray-500'>Experience</h1>
				)}
				<Dropdown
					options={experience}
					placeholder='Experience'
					onChange={handleExpChange}
				/>
			</div>
			<div>
				{filters.remote.length > 0 && (
					<h1 className='text-sm text-gray-500'>Remote</h1>
				)}
				<Dropdown
					options={remote}
					placeholder='Remote'
					onChange={handleRemoteChange}
				/>
			</div>
			<div>
				{filters.minBasePay.length > 0 && (
					<h1 className='text-sm text-gray-500'>Minimum Base Pay Salary</h1>
				)}
				<Dropdown
					options={minSalary}
					placeholder='Minimum Base Pay Salary'
					onChange={handleminBasePayChange}
					width={"12rem"}
				/>
			</div>
			<div className='relative flex-1 border px-1.5 py-1 rounded-md border-gray-300'>
				<input
					type='text'
					placeholder='Search Company Name'
					className='text-gray-700 font-light px-1 focus:outline-none outline-none text-[0.8rem]'
				/>
			</div>
		</div>
	);
}

export default FilterSection