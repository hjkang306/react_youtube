import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'
import { Videos, Loader } from './'

const ChennelConts = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`)

      setChannelDetail(data?.items[0])
      console.log(data?.items[0])

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      )
      setVideos(videosData?.items)
    }
    fetchResults()
  }, [id])

  if (!videos?.length) return <Loader />
  return (
    <section id="channelConts">
      <div
        className="channel__header"
        style={{
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        }}
      ></div>
      <div className="channel__info">
        <img
          src={channelDetail?.snippet?.thumbnails?.medium?.url}
          alt={channelDetail?.snippet?.title}
          className="channel__img"
        />
        <h3 className="channel__id">{channelDetail?.snippet?.title}</h3>
        <div>
          <span>구독자 수 : {channelDetail?.statistics?.subscriberCount}</span>
          <span>영상 총 갯수 : {channelDetail?.statistics?.videoCount}</span>
          <span>총 시청 수 : {channelDetail?.statistics?.viewCount}</span>
        </div>
      </div>
      <div className="channel__videos">
        <Videos videos={videos} />
      </div>
    </section>
  )
}

export default ChennelConts
