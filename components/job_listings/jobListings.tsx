import React from 'react'
import { JobListingProps } from './jobListing.type'
import Card from '../job_card/card'

const JobListings = ( { data }: JobListingProps ) => {
    console.log(data)
  return (
    <div className='grid grid-cols-3 gap-x-16 gap-y-10 w-full'>
        {data.map(job => (
            <Card key={job.jdUid} data={job}/>
        ))}
    </div>
  )
}

export default JobListings