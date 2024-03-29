import React from 'react'

function Footer(props) {
  return (
      <footer className={props.nightMode ? "nightMode" : ""}>
          <p>An app made by Kaitlyn Wickson</p>
          <p>With art supplied by the Rijksmuseum API</p>
      </footer>
  );
}

export default Footer