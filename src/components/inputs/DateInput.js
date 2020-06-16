import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateInput = ({ currentDate, handleDate, handleRandom }) => (
  <div className='text-center'>
    <p>
      <em>Pick a Date</em>
    </p>
    <DatePicker
      className='form-control'
      selected={currentDate}
      onChange={handleDate}
    />
    <div className='input-action'>
      <button onClick={handleRandom} className='btn btn-primary'>
        Random Image
      </button>
    </div>
  </div>
)

export default DateInput
