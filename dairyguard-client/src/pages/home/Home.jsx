import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import OtherProducts from './OtherProducts'
import CustomerReview from './CustomerReview'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <OtherProducts/>
      <CustomerReview/>
      <Services/>
    </div>
  )
}

export default Home