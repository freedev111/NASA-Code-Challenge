import React, { useState, useLayoutEffect } from 'react'
import { DateInput, ImageCard, VideoCard } from 'components'
import { isImageorVideo, randomDate } from 'utils'
import moment from 'moment'

const NasaContainer = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [apod, setApod] = useState({})
  const handleDate = (date) => setCurrentDate(date)
  const handleRandom = () => setCurrentDate(randomDate())

  useLayoutEffect(() => {
    const { REACT_APP_BASE_URL, REACT_APP_NASA_API_KEY } = process.env
    console.log(REACT_APP_BASE_URL, REACT_APP_NASA_API_KEY)
    fetch(
      `${REACT_APP_BASE_URL}?api_key=${REACT_APP_NASA_API_KEY}&&date=${new moment(
        currentDate,
      ).format('YYYY-MM-DD')}`,
    )
      .then((res) => res.json())
      .then((res) => setApod(res))
      .catch((error) => {
        console.log('Fetch API fails!', error)
      })
  }, [currentDate])

  return (
    <div className='container'>
      <div className='card card-body'>
        <h2 className='header'>NASA's Picture of the Day</h2>
        <DateInput
          currentDate={currentDate}
          handleDate={handleDate}
          handleRandom={handleRandom}
        />
        {apod && isImageorVideo(apod.url) ? <ImageCard /> : <VideoCard />}
      </div>
    </div>
  )
}

export default NasaContainer
