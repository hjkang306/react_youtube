import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch()
    }
  }
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
    }
    setSearchTerm('')
  }

  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label className="glass" htmlFor="searchInput">
        <GoSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="동물 유튜브를 검색해 주세요"
        title="검색"
        value={searchTerm || ''}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default Searchbar
