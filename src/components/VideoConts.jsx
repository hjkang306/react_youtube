import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Loader } from './'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videos?.length) return <Loader />
  return (
    <div className="videoConts">
      <div className="container">
        <div className="left">
          <div className="video">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </div>
          <div className="video__under">
            <Link to={`/channel/${videoDetail.snippet.channelId}`}>
              <span className="channelName">
                {videoDetail.snippet.channelTitle}
              </span>
            </Link>
            <div className="count">
              <div className="view">
                조회수 : {videoDetail?.statistics.viewCount}
              </div>
              <div className="like">
                좋아요 : {videoDetail?.statistics.likeCount}
              </div>
            </div>
          </div>
          <div className="info">
            <div className="title">{videoDetail?.snippet.title}</div>
            <div className="desc">{videoDetail?.snippet.description}</div>
          </div>
        </div>
        <div className="right">
          <Videos videos={videos} layout="column" />
        </div>
      </div>
    </div>
  )
}

export default VideoConts
