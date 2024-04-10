"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [input, setInput] = useState("")
  const [vid, setVid] = useState([])

  useEffect(() => {
 try {
     const getData = async () => {
       let res = await axios.get("http://127.0.0.1:8000/api/video/")
       setVid(res.data)  
     }
     getData()
 } catch (error) {
  console.log(error)
 }  
  }, [])

  const findVideo = async (e) => {
    e.preventDefault()
    try{
      let res = await axios.get(`http://127.0.0.1:8000/api/videos?q=${input}`)
      setVid(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="">
      <form onSubmit={findVideo}>
      <input
      className="outline-none text-sm px-2 py-1 text-black bg-gray-200 rounded-xl"
       name="q" 
       placeholder="Search" 
       type="text" 
       onChange={(e) => {setInput(e.target.value)}} value={input}
       />
       <button type="submit">Search</button>
       </form>
      <div className="sm:grid grid-cols-2 place-items-center text-center">
        {vid.map((item) => {
          return (
            <div className="" key={item.id}>
              <small className="font-bold">{item.videoName}</small>
              <iframe src={item.video} allowFullScreen></iframe>
            </div>
          );
        })}
      </div>
    </main>
  );
}
