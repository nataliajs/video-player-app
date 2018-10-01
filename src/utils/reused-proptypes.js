import PropTypes from 'prop-types'

export const movieProps = PropTypes.shape({
  id: PropTypes.string,
  manifest:  PropTypes.string,
  name: PropTypes.string
})