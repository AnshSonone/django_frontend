"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function upload() {

  const [video, setVideo] = useState("");
  const [videoName, setVideoName] = useState("");
  const [err, setErr] = useState("")

  const router = useRouter();

  const sendData = async () => {
    try {

      let formData = new FormData()

      formData.append("video", video)
      formData.append("videoName", videoName)

      let req = await axios.post(
        "http://127.0.0.1:8000/api/post/",
        formData,
      );

      setVideo("");
      setVideoName("");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  const updateData = async () => {
    try {
      let id = Number(7)
      let req = await axios.put(`http://127.0.0.1:8000/api/update/${id}`,
      videoName
    )
      console.log(req.data)
      setVideoName("")
    } catch (error) {
      console.log(error)
      setErr("Invalid input")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p>{err}</p>
      <p>Upload page</p>
      <div className="p-2 w-fit bg-gray-200">
        <input
          className="bg-gray-200 border-black border-1 rounded-lg outline-none px-2 text-sm"
          type="text"
          placeholder="video name"
          name="videoName"
          value={videoName}
          onChange={(e) => setVideoName(e.target.value)}
        />
      </div>

      <div className="p-2 bg-gray-200 w-fit my-2">
        <input
          className="bg-gray-200 border-black border-1 rounded-lg outline-none px-2 text-sm"
          type="text"
          name="video"
          placeholder="video URL"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
      </div>

      <div className="my-1 space-x-2">
        <button
          className="px-3 py-2 bg-blue-400 rounded-xl text-white font-bold hover:bg-blue-500"
          onClick={sendData}
        >
          Upload
        </button>

        <button
          className="px-3 py-2 bg-red-400 rounded-xl text-white font-bold hover:bg-red-500"
          onClick={updateData}
        >
          Update
        </button>
      </div>
    </div>
  );
}
