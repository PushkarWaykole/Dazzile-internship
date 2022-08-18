import React from 'react'
import Card from './Card'
import { ReactComponent as Search } from './icons/SEARCH.svg'



const Homepage = () => {


  const Foods=[
    "Sashimi","Unagi - Grilled Eel","Saba - Buckwheat Noodles","Onigiri - Rice Balls","Yokitori - Grilled Chicken","Miso soup"
  ]
  return (
    <div>

      <div className=" w-full h-screen fixed border-2 border-sky-500 ml-24 ">



        <div className="bg-white w-11/12 h-5/6 border-2 border-sky-500 mx-6 my-6">
          <label class="bg-my_light_blue relative text-my_grey focus-within:text-my_grey block m-6">

            <Search className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />

            <input type="email" name="email" id="email" placeholder="Search" class=" font-Mulish form-input   rounded-lg py-2 px-4 bg-my_light_blue placeholder-my_dark_grey text-my_dark_grey appearance-none w-full block pl-14 focus:outline-none" />
          </label>



          <div className="flex flex-row justify-around items-center font-Mulish text-my_dark_grey font-bold cursor-pointer border-b-4 border-my_dark_blue gap-4 p-2">
            <p>All</p>
            <p>Food</p>
            <p>Drinks</p>
            <p>Snack</p>
            <p>Packages</p>
          </div>

         
         <div className="text-3xl text-my_dark_slate font-bold my-6 mx-5">Food</div>


          <div className="grid grid-rows-3 grid-cols-3 gap-x-1 justify-around mx-9">
          {Foods.map((name)=>{
            return <Card name={name} />
          })}
          </div>
          
          
        </div>





      </div>

    </div>
  )
}

export default Homepage