import React from 'react'
import PropTypes from 'prop-types'

export default function Visualization({ visualization }) {
  return (
    <img src={ visualization } alt='dom' />
  )
}

Visualization.propTypes = {
  visualization: PropTypes.string,
}
