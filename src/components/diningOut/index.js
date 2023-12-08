import React from 'react'
import "./diningOut.css"
import Collection from '../common/collections'
import { diningOut } from '../../data/diningOut'
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection'

const collectionList = [
  {
      id: 1,
      titel: "Picturesque Cafes",
      cover: "https://static.india.com/wp-content/uploads/2018/08/Cafe-terra-625x470.jpg?impolicy=Medium_Resize&w=1200&h=800",
      places: "12 places"
  },

  {
      id: 2,
      titel: "Live Cricket Screen",
      cover: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2019/06/28/Pictures/ht-pune_b4dea3cc-999f-11e9-823a-db6d52757f3f.jpg",
      places: "7 Places"
  },

  {
      id: 3,
      titel: "Legends of Japiur",
      cover: "https://im.hunt.in/cg/lucknow/City-Guide/Royal_cafe_in_lucknow.jpg",
      places: "24 places"
  },

  {
      id: 4,
      titel: "New in Town",
      cover: "https://assets.architecturaldigest.in/photos/6213628131c71d2d24ac5edd/master/pass/Someplace%20Else%201.jpg",
      places: "9 places"
  },

  {
      id: 5,
      titel: "Themed Dining",
      cover: "https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/Rooftop-seating-area-of-Asilo-facing-Arabian-Sea-in-Mumbai-SS02052017.jpg",
      places: "7 places"
  },

  {
      id: 6,
      titel: "Best Pubs & Bars",
      cover: "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/featureImage600x400-2-1280x720.jpg",
      places: "10 places"
  },

  {
      id: 7,
      titel: "Classic Biryani",
      cover: "https://assets.gqindia.com/photos/5ddcbe5e836a7f0008bf48a8/1:1/w_686,h_686,c_limit/paradise%20biryani.png"
      , places: "15 places"
  },

  {
      id: 8,
      titel: "Test od Andra",
      cover: "https://www.mistay.in/travel-blog/content/images/2020/06/andhra-cuisine-cover-2.jpg",
      places: "14 places"
  },

 
]
const diningFilters = [
  {
      id: 1,
      titel: "Filters",
      icon: <i className="fa-solid fa-filter absolute-center"></i>,
     
  },

  {
      id: 2,        
      titel: "Rating: 4.0+"
  },

  {
      id: 3,        
      titel: "Safe and Hygenic"
  },

 
  {
      id: 4,        
      titel: "Pure Veg"
  },

  {
      id: 5,
      titel: "Delivery Time",
      icon: <i className="fa-thin fa-arrow-up-arrow-down absolute-center"></i>,
      
  },

  {
      id: 6,        
      titel: "Great Offer",
  },
]
const diningList= diningOut;

const DiningOut = () => {
  return <div>
    <Collection list={collectionList}/>
    <div className='max-width'>
      <Filters filterList={diningFilters} />
    </div>
    <ExploreSection list={diningList}
    collectionName="Dine-Out Restaurants in Jaipur" />
  </div>
}

export default DiningOut
