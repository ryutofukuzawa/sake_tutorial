import React from 'react';

interface SakeProps {
  title: string,
  content: string,
  img: string,
  review: string
}


const SakePage = (props: SakeProps) => {
  return(
    <div>
      <h2> {props.title} </h2>
      <p> {props.content} </p>
      <p> {props.img} </p>
      <p> {props.review} </p>
    </div>
  )
}

export default SakePage