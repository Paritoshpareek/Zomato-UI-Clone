import React from 'react'
import "./collection.css"
import Slider from 'react-slick'
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/> ,
    prevArrow: <PrevArrow/>
  };


const Collection = ({list}) => {
  return (
    <div className='collection-wrapper'>
        <div className='max-width collection'>
            <div className='collection-title'>Colletctions</div>
            <div className='collection-subtitle-row'>
                <div className='collection-subtitle-text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Jaipur, based on trends</div>
                <div className='collection-location'>
                    <div>All collections in Jaipur</div>
                    <i className='fi fi-rr-caret-right absolute-center'></i>
                </div>
            </div>
                <Slider {...settings}>
                 {list.map((item)=>(
                    <diV>
                        <div className='collection-cover'>
                            <img src={item.cover} alt='image' className='collection-image' />
                            <div className="gradient-bg"></div>
                                <div className="collection-card-title">{item.titel}</div>
                                <div className="collection-card-subtitle">
                                    <div>{item.places}</div>
                                    <i className="fa-solid fa-caret-right absolute-center"></i>
                                </div>
                        </div>
                    </diV>
                ))}
            </Slider>

        </div>
    </div>
  )
}

export default Collection
