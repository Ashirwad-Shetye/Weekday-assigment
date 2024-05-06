import React from 'react'
import Dropdown from '../ui_components/dropdown'

const FilterSection = () => {

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
    <div className="text-blue-500 w-full mb-10">
        <div>
          <Dropdown options={names}/>
        </div>
    </div>
  )
}

export default FilterSection