import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx"

function Freebook() {
  // This function is used to filter data from the local database(list.json from public folder )
    const filterData = list.filter((data) => data.category ==="Free");
    console.log(filterData);
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
  <div>
  <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses</h1>
  <p>
   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate fugiat quibusdam incidunt autem earum rem nostrum tenetur recusandae nobis corrupti, qui consequuntur suscipit vel sit voluptate, sapiente cumque impedit!
  </p>
  </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>

    </div>
    </div>
    </>
  )
}

export default Freebook
