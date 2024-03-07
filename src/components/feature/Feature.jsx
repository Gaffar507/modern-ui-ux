import React from 'react'
import './feature.css'

const Feature = ({title, description}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className="gpt3__features-container__feature-title">
          <div/>
          <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container_feature-text'>
          <p className=''>{description}</p>
      </div>
    </div>
  )
}

export default Feature
