import React from 'react'
import { ReactComponent as Search } from './icons/SEARCH.svg'
import { ReactComponent as Filter } from './icons/filter.svg'
import { ReactComponent as Threedots } from './icons/threedots.svg'
const CustomerPage = () => {
    return (
        <div>
            <div className="w-full h-screen fixed  ml-24 ">

                <div className="bg-white w-11/12 h-5/6  mx-6 my-6 rounded-lg ">

                    <div className="flex flex-row justify-center gap-3 content-center items-center border-2 mt-8">
                        <Search />
                        <input type="text" placeholder="Search" className="bg-my_light_blue w-5/6 p-2 outline-none" />
                        <Filter />
                        <Threedots />
                    </div>

                    <table class="
                    table-fixed ml-20 text-my_dark_slate m-2 align-center font-Mulish   border-separate border-spacing-8 text-left">
                        <thead className="bg-my_light_blue">
                            <tr >
                                <th className="bg-my_light_blue px-8 py-2">ID</th>
                                <th className="bg-my_light_blue px-8 py-2">Name</th>
                                <th>Join Date</th>
                                <th className="bg-my_light_blue px-8 py-2">Total Visit</th>
                                <th className="bg-my_light_blue px-8 py-2">Purchased Items</th>
                                <th className="bg-my_light_blue px-8 py-2">Total Spend</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            
                            <tr>
                                <td className="">XXX1</td>
                                <td className="">Ariene McCay</td>
                                <td className="">1 February</td>
                                <td className="">2</td>
                                <td className="">americano(10);latte(8);cappuccino(14);machhiato(1):vanilla latte(5) <br />
                                <p className="text-Mulish text-my_dark_blue cursor-pointer">See Details</p></td>
                                <td className="">$490.15</td>
                            </tr>

                            <tr>
                                <td className="">XXX1</td>
                                <td className="">Ariene McCay</td>
                                <td className="">1 February</td>
                                <td className="">2</td>
                                <td className="">americano(10);latte(8);cappuccino(14);machhiato(1):vanilla latte(5) <br />
                                <p className="text-Mulish text-my_dark_blue cursor-pointer">See Details</p></td>
                                <td className="">$490.15</td>
                            </tr>

                            <tr>
                                <td className="">XXX1</td>
                                <td className="">Ariene McCay</td>
                                <td className="">1 February</td>
                                <td className="">2</td>
                                <td className="">americano(10);latte(8);cappuccino(14);machhiato(1):vanilla latte(5) <br />
                                <p className="text-Mulish text-my_dark_blue cursor-pointer">See Details</p></td>
                                <td className="">$490.15</td>
                            </tr>

                            

                            

                            

                            <tr>
                                <td className="">XXX1</td>
                                <td className="">Ariene McCay</td>
                                <td className="">1 February</td>
                                <td className="">2</td>
                                <td className="">americano(10);latte(8);cappuccino(14);machhiato(1):vanilla latte(5) <br />
                                <p className="text-Mulish text-my_dark_blue cursor-pointer">See Details</p></td>
                                <td className="">$490.15</td>
                            </tr>

                            <tr>
                                <td className="">XXX1</td>
                                <td className="">Ariene McCay</td>
                                <td className="">1 February</td>
                                <td className="">2</td>
                                <td className="">americano(10);latte(8);cappuccino(14);machhiato(1):vanilla latte(5) <br />
                                <p className="text-Mulish text-my_dark_blue cursor-pointer">See Details</p></td>
                                <td className="">$490.15</td>
                            </tr>

                            <tr>
                                <td className="">XXX1</td>
                                <td className="">Ariene McCay</td>
                                <td className="">1 February</td>
                                <td className="">2</td>
                                <td className="">americano(10);latte(8);cappuccino(14);machhiato(1):vanilla latte(5) <br />
                                <p className="text-Mulish text-my_dark_blue cursor-pointer">See Details</p></td>
                                <td className="">$490.15</td>
                            </tr>

                           

                           

                            
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

export default CustomerPage