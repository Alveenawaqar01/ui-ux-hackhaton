
import React from 'react'
import Hero from './component/hero'
import Food from './component/food'
import Fooditem from './component/fooditem'
import Menu from './component/menu'
import Burger from './component/burger'
import Chef from './component/chef'
import Review from './component/review'
import Foodimage from './component/foodimage'
import Blog from './component/blog'
import Navbar from "@/app/component/navbar";
import Topbar from './component/topbar'
import Footer from './component/footer'

const page = () => {
  return (
    <div>
      
          <Topbar/>
     <Navbar/>
      <Hero/> 
      <Food/>
      <Fooditem/>
      <Menu/>
      <Burger/>
      <Chef/>
      <Review/>
      <Foodimage/>
      <Blog/>
    
      <Footer/>
    </div>
  )
}

export default page
