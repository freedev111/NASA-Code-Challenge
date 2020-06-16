import React from 'react'
import ReactPlayer from 'react-player'

const ApodCard = ({ apod }) => (
  <div className='apod-card card card-body'>
    <h4 className='apod-card__header'>{apod.title}</h4>
    <div className='apod-card__player'>
      {apod['media_type'] === 'video' ? (
        <ReactPlayer className='video-player' url={apod.url} />
      ) : (
        <img className='image-viewer' src={apod.url} alt={apod.url} />
      )}
    </div>
    <div className='apod-card__explanation'>{apod.explanation}</div>
  </div>
)

export default ApodCard
