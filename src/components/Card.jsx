import React from 'react'
// layout colors
//'my_light_blue': '#F7F7FC',
//'my_grey': "#E2E2EA",
//'my_dark_blue': "#5541D7",
// text colors
// 'my_dark_grey': "#92929D",
//'my_green': "#42BDA1",
//'my_dark_slate': "#11142D"
const Card = ({name}) => {
  return (
    <div>
        <div className="bg-white flex flex-col justify-center gap-2  border-4 border-my_grey w-80 m-1 p-1 rounded-lg h-40">
            <div className="bg-my_grey w-full h-32 rounded-lg ">
                
            </div>

            <div className="text-xl font-Mulish text-left font-bold">{name}</div>

            <div className="text-my_green font-Mulish text-xl font-bold">
                $22
            </div>
        </div>
    </div>
  )
}

export default Card