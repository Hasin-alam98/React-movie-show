import React from 'react'
import propTypes, { array } from 'prop-types'


const Student = (prop) => {
  return (
    <>{prop.fullname}</>
  )
}
Student.propTypes ={
  fullname:propTypes.array,
}
Student.defaultProps ={
  fullname :[<h1>not</h1>,<h1>found</h1>]
}
export default Student


