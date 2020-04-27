import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
  <video width="320" height="240" controls>
    <source src={videoSrcURL} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
  </div>
)
export default Video
