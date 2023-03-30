import React from 'react'

function ArtItem(props) {
  return (
      <li key={props.artObject.id}>
          {props.artObject.title}
      </li>
  );
}

export default ArtItem