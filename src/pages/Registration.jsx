import React, { useState } from 'react'
import DropDown from '../components/DropDown'

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        number: "",
    })


    const handleChange = (e) => {
        let name = e.target.name;
        const allData = { ...formData };
        allData[name] = e.target.value;
        setFormData(allData);
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen dark min-h-[100vh] bg-[#9F9F9F]">
                <div className=" w-2/5 bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-200 mb-8 text-center">Registration Form</h2>

                    <form className="flex flex-col items-center gap-3">
                        <input
                            type="text"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%] "
                            placeholder="First Name"
                            value={formData.firstName}
                            name="firstName"
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="text"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%] "
                            placeholder="Last Name"
                            value={formData.lastName}
                            name="lastName"
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="email"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%]"
                            placeholder="Email"
                            value={formData.email}
                            name="email"
                            onChange={(e) => handleChange(e)}
                        />

                        <input
                            type="password"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%] "
                            placeholder="Password"
                            value={formData.password}
                            name="password"
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="tel"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%]"
                            placeholder="Phone Number"
                            value={formData.number}
                            name="number"
                            onChange={(e) => handleChange(e)}
                        />


                        <button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration
