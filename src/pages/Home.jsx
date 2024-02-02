import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const backendURL = 'http://localhost:4000';
// import axios from "axios";

const Home = () => {

  const navigate = useNavigate()
  let userData = JSON.parse(localStorage.getItem("currentUser"))


  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
  const [media, setMedia] = useState([]);


  useEffect(() => {
    fetchMedia();
  }, [])


  const fetchMedia = async () => {
    try {
      let result = await fetch(`${backendURL}/getMedia`)
      result = await result.json();
      setMedia(result?.data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteMedia = async (id) => {
    try {
      const payload = { mediaId: id }
      let result = await fetch(`${backendURL}/deleteMedia`, {
        method: "delete",
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      result = await result.json();
      if (result?.status === true) fetchMedia();
      // console.log(result?.message)
    } catch (error) {
      console.log(error);
    }
  }


  let isLogIn = JSON.parse(localStorage.getItem("isLoggedIn"))
  const [isLoggedIn, setisLoggedIn] = useState(isLogIn)
  const [currentUser, setCurrentUser] = useState(userData)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn])

  const submitForm = async (e) => {
    e.preventDefault();         //to prevent app frm reloading
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);
      let result = await fetch(`${backendURL}/uploads`, {
        method: "post",
        body: formData
      })
      result = await result.json();
      if (result?.status === true) {
        fetchMedia();
        setFile([]);
        setTitle("");
      };
      // console.log(result)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center h-screen dark min-h-[100vh] bg-[#9F9F9F]">
        <form
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          id="formDetails"
          className="w-2/5 bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
          onSubmit={submitForm}
        >
          <h1 className="text-xl mb-4">Upload your files here 👇</h1>
          <input
            className='className="bg-gray-700 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%]"'
            type="text"
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="file"
            className='className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%]"'
            name="files"
            accept=".pdf,.xls,.xlsx,.png,jpeg,.jpg"
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

        <div className="mt-[100px] flex items-center flex-wrap gap-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">

          {media?.map((item, index) => {
            return (
              <div key={index} className="relative">
                <div style={{ position: "absolute", right: '-10px', top: '-10px' }}
                  onClick={() => { deleteMedia(item['_id']) }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C15.53 0 20 4.47 20 10C20 15.53 15.53 20 10 20C4.47 20 0 15.53 0 10C0 4.47 4.47 0 10 0ZM13.59 5L10 8.59L6.41 5L5 6.41L8.59 10L5 13.59L6.41 15L10 11.41L13.59 15L15 13.59L11.41 10L15 6.41L13.59 5Z" fill="#F72C1D" />
                  </svg>
                </div>
                <img src={`${backendURL}${item.mediaPath}`} alt={item.mediaName}
                  className="w-[100px] h-[100px]" />
              </div>
            )
          })}

        </div>


      </div>
    </div>
  );
};

export default Home;
