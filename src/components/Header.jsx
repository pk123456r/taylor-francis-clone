import { useState } from 'react'
import './Header.css'

// A React component is just a function that returns JSX (HTML-like code)
function Header() {
  // useState gives this component a "memory" — it remembers what the user typed
  // searchText = current value, setSearchText = function to update it
  const [searchText, setSearchText] = useState('')

  function handleSearch(event) {
    // Prevent the page from reloading when the form is submitted
    event.preventDefault()
    if (searchText.trim()) {
      alert(`Searching for: "${searchText}"`)
    }
  }

  return (
    <header className="header">
      {/* Top bar: logo + nav links */}
      <div className="header__top">
        <div className="header__logo">
          <span className="header__logo-tf">Taylor &amp; Francis</span>
          <span className="header__logo-group">Group</span>
        </div>

        <nav className="header__nav">
          <a href="#" className="header__nav-link">Journals</a>
          <a href="#" className="header__nav-link">Books</a>
          <a href="#" className="header__nav-link">Open Access</a>
          <a href="#" className="header__nav-link">Researchers</a>
          <a href="#" className="header__nav-link">Librarians</a>
        </nav>

        <div className="header__actions">
          <a href="#" className="header__action-link">Register</a>
          <a href="#" className="header__action-link header__action-link--login">Log in</a>
        </div>
      </div>

      {/* Search bar */}
      <div className="header__search-bar">
        <form className="header__search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="header__search-input"
            placeholder="Search journals, books and articles..."
            value={searchText}
            // Every keystroke updates searchText via setSearchText
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button type="submit" className="header__search-btn">
            Search
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
