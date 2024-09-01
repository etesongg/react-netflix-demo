import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'

// 배너 => popular movie의 첫번째 아이템
// popular movie
// top rated movie
// upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  )
}

export default Homepage
