import React from 'react'
import "../ArtItem/ArtItem.scss"

function ArtItem(props) {
  console.log(props.artObject)
  return (
      <li key={props.artObject.id} className="artItem">
          <img
              src={props.artObject.webImage.url}
              alt="{props.artObject.title}"
              />
          <h2>{props.artObject.title}</h2>
      </li>
  );
}

export default ArtItem