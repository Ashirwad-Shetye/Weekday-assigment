import React from 'react'
import Dropdown from '../ui_components/dropdown'
import { setExperience, setJobRole } from '@/redux/reducers/filtersSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux_hooks';

const FilterSection = () => {

  const dispatch = useAppDispatch()

  const filters = useAppSelector( ( state ) => state.filters );
  console.log("Redux Store State:", filters);

	const handleJobRoleChange = (value: string[]) => {
		dispatch(setJobRole(value));
	};

  const names = [
		"Oliver Hansen",
		"Van Henry",
		"April Tucker",
		"Ralph Hubbard",
		"Omar Alexander",
		"Carlos Abbott",
		"Miriam Wagner",
		"Bradley Wilkerson",
		"Virginia Andrews",
		"Kelly Snyder",
	];


  return (
    <div className="text-blue-500 w-full mb-10 gap-2 flex items-center flex-wrap">
        <div>
          {filters.jobRole.length > 0 && (
            <h1 className='text-sm text-gray-500'>Role</h1>
          )}
          <Dropdown options={names} placeholder='Role' onChange={handleJobRoleChange}/>
        </div>
    </div>
  )
}

export default FilterSection