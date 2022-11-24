import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Loader } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}&type=video`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  if (!videos?.length) return <Loader />
  return (
    <main id="main" className="searchConts">
      <section id="contents">
        <h2 className="result">
          <em>{searchTerm}</em> 검색 결과
        </h2>
        <div>
          <Videos videos={videos} />
        </div>
      </section>
    </main>
  )
}

export default SearchConts
