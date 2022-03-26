
import PropTypes from 'prop-types'

export const Loader =({massage = 'Loading...'})=> {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">{massage}</span>
      </div>
    )
}

Loader.propTypes = {
    massage: PropTypes.string
}