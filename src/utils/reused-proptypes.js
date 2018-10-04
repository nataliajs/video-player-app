import PropTypes from 'prop-types'

export const movieProps = PropTypes.shape({
  id: PropTypes.string,
  manifest:  PropTypes.string,
  name: PropTypes.string
})


// reused default props

export const movieDefaultProps = {
  id: null,
  manifest: "",
  name: ""
}