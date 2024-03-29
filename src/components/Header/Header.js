import React from 'react'

function Header(props) {
  return (
      <header
          className={
        props.nightMode
        ?
        "nightMode"
        :
        ""
      }
      >
          <h1>ArtFinder</h1>
      </header>
  );
}

export default Header