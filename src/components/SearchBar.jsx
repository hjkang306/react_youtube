import React from 'react'
import { GoSearch } from 'react-icons/go'

const Searchbar = () => {
  return (
    <div className="search">
      <label className="glass" htmlFor="searchInput">
        <GoSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="동물 유튜브를 검색해 주세요"
        title="검색"
      />
    </div>
  )
}

export default Searchbar
