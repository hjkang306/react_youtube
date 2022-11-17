import React from 'react'

import { Link } from 'react-router-dom'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="box">
      <Link to={`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
      </Link>
      <Link to={`/video/${videoId}`}>
        <div className="box__info">
          <div className="tit">{snippet?.title}</div>
          <div className="desc">{snippet?.description}</div>
        </div>
      </Link>
      <Link to={`/channel/${snippet.channelId}`}>
        <span className="channelName">{snippet.channelTitle}</span>
      </Link>
    </div>
  )
}

export default VideoCard
