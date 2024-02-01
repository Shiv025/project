import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {uuid} from 'uuid';

const Home = () => {

  const navigate = useNavigate()
  let userData = JSON.parse(localStorage.getItem("currentUser"))


  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  let isLogIn = JSON.parse(localStorage.getItem("isLoggedIn"))
  const [isLoggedIn, setisLoggedIn] = useState(isLogIn)
  const [currentUser, setCurrentUser] = useState(userData)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn])

  const submitForm = async (e) => {
    e.preventDefault();         //to prevent app frm reloading
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
    const result = await fetch('http://localhost:4000/upload-file', {
      method: 'post',
     header: {"Content-type": "multipart/form-data"},
     body: formData

    })
    // const result = await axios.post('http://localhost:4000/upload-file', formData,
    // {
    //   header: {"Content-type": "multipart/form-data"}
    // })
    console.log(result)
    // let obj ={
    //   title : title ,
    //   file: file, 
    //   id: uuid()
    //   }
  }

  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center h-screen dark min-h-[100vh] bg-[#9F9F9F]">
        <form
        id="formDetails"
          className="w-2/5 bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
          onSubmit={submitForm}
        >
          <h1 className="text-xl mb-4">Upload your files here 👇</h1>
          <input
            className='className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%]"'
            type="text"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="file"
            className='className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%]"'
            multiple
            required
            onChange={(e) => setFile(e.target.files[0])} //here it will accept 1st file as we'hv given[0]
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 ml-6 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-fit"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
