import React from 'react'




// layout colors
//'my_light_blue': '#F7F7FC',
//'my_grey': "#E2E2EA",
//'my_dark_blue': "#5541D7",
// text colors
// 'my_dark_grey': "#92929D",
//'my_green': "#42BDA1",
//'my_dark_slate': "#11142D"


const Navbar = () => {
    return (
        <div>


            <div className=" bg-white">

            
            <div className=" text-my_dark_grey flex flex-row justify-between align-center  p-4 px-10 border-2 border-sky-500" >

                <div className="flex flex-row gap-3 mt-2">
                    <div className="bg-my_grey rounded-lg h-9 w-9 ">

                    </div>

                    <div>
                        <p className="font-Mulish font-bold text-2xl mb-0 text-my_dark_slate">Dazzie</p>
                    </div>
                </div>

                <div className="flex flex-row align-center content-center justify-center gap-4 pr-10">

                    <div className="m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div>

                    <div className="bg-my_grey rounded-full h-8 w-8 m-auto">


                    </div>

                    <div className="flex flex-col ">
                        <p className="text-my_dark_slate font-bold ">Sumanto</p>
                        <p className="text-my_grey">Cashier</p>
                    </div>
                </div>

            </div>


            </div>




        </div>
    )
}

export default Navbar