import React from 'react'
import "./exploreSection.css"
import ExplaoreCard from './exploreCard';

const ExploreSection = ({list, collectionName}) => {
  return <div className='max-width explore-section'>
    <div className='collection-title'>
        {collectionName}
    </div>
    <div className='explore-grid'>
        {list.map ((restaurant)=>{
            return <ExplaoreCard restaurant={restaurant} />
        })}
    </div>
  </div>
}

export default ExploreSection
