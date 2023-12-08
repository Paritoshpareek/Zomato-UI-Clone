import React from 'react'
import Collection from "../common/collections"
import "./nightlife.css"
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'
import { nightLife } from "../../data/nightLife";

const nightFilter = [
  {
      id: 1,
      title: "Filters",
      icon: <i className="fa-solid fa-filter absolute-center"></i>,
     
  },

  {
      id: 2,        
      title: "Distance"
  },

  {
      id: 3,        
      title: "Rating: 4.0+"
  },

 
  {
      id: 4,        
      title: "Pub & Bars"
  },

  
]
const collectionList=[
  {
    id: 1 ,
    title: "24 Best Bars & Pubs" ,
    cover: "https://assets.architecturaldigest.in/photos/6213628131c71d2d24ac5edd/master/pass/Someplace%20Else%201.jpg",
    places: "25 Places ",
  },
  {
    id: 2 ,
    title: "9 Best Bars" ,
    cover: "https://static.india.com/wp-content/uploads/2018/08/Cafe-terra-625x470.jpg?impolicy=Medium_Resize&w=1200&h=800",
    places: "10 Places",
  }
]
const nightList= nightLife;
const NightLife = () => {
  return (<div>
    <Collection list={collectionList} />
    <div className='max-width'>
      <Filters filterList={nightFilter}/>
    </div>
    <ExploreSection list={nightList} collectionName='Nightlife Restaurants in Jaipur'/>

  </div>
)}

export default NightLife;
