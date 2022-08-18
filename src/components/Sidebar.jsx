import React from 'react'

import { ReactComponent as Discount } from './icons/Coupon Discount.svg'
import { ReactComponent as Customer } from './icons/customer.svg'

import { ReactComponent as Orders } from './icons/orders.svg'
import { ReactComponent as Package } from './icons/Package.svg'

import { ReactComponent as User } from './icons/user.svg'

const Sidebar = () => {


  return (
    <div>

      <div className="bg-white h-screen w-24  fixed" >

        <div className="flex flex-col justify-items-center items-center align-center gap-8 p-2">


          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 p-1 hover:bg-my_dark_blue rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <Discount width="3rem" height="3rem" className="p-2  m-4 hover:bg-my_dark_blue rounded-lg " />
          <Orders width="3rem" height="3rem" className="p-2  m-4 hover:bg-my_dark_blue rounded-lg" />
          <Customer width="3rem" height="3rem" className="p-2  m-4 hover:bg-my_dark_blue rounded-lg" />
          <Package width="3rem" height="3rem" className="p-2  m-4 hover:bg-my_dark_blue rounded-lg" />
          <User width="3rem" height="3rem" className="p-2  m-4 hover:bg-my_dark_blue rounded-lg" />
        </div>


      </div>

    </div>
  )
}

export default Sidebar