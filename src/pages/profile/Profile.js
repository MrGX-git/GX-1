
import PropTypes from 'prop-types'

export const Profile =({title})=> {
    return (
        <div className="row p-2">
            <h2>Profile Page</h2>
            <h3>{title}</h3>
        </div>
    )
}

Profile.propTypes = {
    title: PropTypes.string.isRequired
}