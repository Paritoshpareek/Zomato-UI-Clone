import React from 'react'
import "./topBrands.css"
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandsList=[
    {
        id:  1,
        time: "45 min  " ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/cdcfec38a53a7edd76e282bee953e44f_1664867311.png"
    },
    {
        id: 2 ,
        time: " 23 min  " ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6743c2bf4409654a14320694e6e2f88a_1617984416.png"
    },

    {
        id: 3 ,
        time: " 50 min  " ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/e6f2085a4ed0cd750cac265574748f3f_1601467978.png"
    },

    {
        id: 4 ,
        time: " 10 min  " ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2f03f8299adfedcc5b038433b948e11a_1584120081.png"
    },

    {
        id:  5,
        time: "13 min   " ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },

    {
        id:  6,
        time: " 27 min  " ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/68eabdf057856604e1d30aec29a424da_1661949139.png"
    },

    {
        id:  7,
        time: " 30 min  " ,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655799498.png"
    }



];

const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/> ,
    prevArrow: <PrevArrow/>
  };

const TopBrands = () => {
  return <div className='top-brands max-width'>
    <div className='collection-title'>Top brands for you</div>
    <Slider {...settings}>
        {topBrandsList.map((brands)=>{
            return <div>
                <div className='top-brands-cover'>
                    <img src={brands.cover} className='top-brands-image'alt={brands.time} />

                </div>
            </div>
        })}

    </Slider>

    </div>
}

export default TopBrands
