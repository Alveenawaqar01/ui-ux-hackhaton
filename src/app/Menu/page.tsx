import React from 'react'
import Homenavbar from '../component/homenavbar'
import Homehero from '../component/Homehero'
import Homefood from '../component/homefood'
import Homefooditem from '../component/homefooditem'
import Homechoose from '../component/homechoose'
import Homeitems from '../component/homeitems'
import Homereview from '../component/homereview'
import Homeblog from '../component/homeblog'
import Homefooter from '../component/homefooter'

const Menu= () => {
  return (
    <div>
      <Homenavbar/>
      <Homehero/>
      <Homefood/>
      <Homefooditem/>
      <Homechoose/>
      <Homeitems/>
      <Homereview/>
      <Homeblog/>
      <Homefooter/>
    </div>
  )
}

export default Menu
