import React from 'react'

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen dark min-h-[100vh] bg-[#9F9F9F]">
        <div className=" w-2/5 bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-center font-bold text-gray-200 mb-4">Login</h2>

          <form className="flex flex-col items-center gap-2">
            <input
              type="email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%] "
              placeholder="Email"
            />
            <input
              type="password"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%] "
              placeholder="Password"
            />
           
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-fit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
