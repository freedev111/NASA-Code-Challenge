import React, { useState, useLayoutEffect } from 'react'
import { DateInput, ApodCard } from 'components'
import { randomDate } from 'utils'
import moment from 'moment'

const NasaContainer = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [apod, setApod] = useState({})
  const handleDate = (date) => setCurrentDate(date)
  const handleRandom = () => setCurrentDate(randomDate())

  useLayoutEffect(() => {
    const { REACT_APP_BASE_URL, REACT_APP_NASA_API_KEY } = process.env
    fetch(
      `${REACT_APP_BASE_URL}?api_key=${REACT_APP_NASA_API_KEY}&date=${new moment(
        currentDate,
      ).format('YYYY-MM-DD')}`,
    )
      .then((res) => {
        if (!res.ok) {
          throw Error('response.statusText')
        }
        return res.json()
      })
      .then((res) => setApod(res))
      .catch((error) => {
        setApod({})
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
        {Object.keys(apod).length > 0 && <ApodCard apod={apod} />}
      </div>
    </div>
  )
}

export default NasaContainer
