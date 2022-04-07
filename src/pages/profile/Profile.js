
import { useState } from 'react'
import PropTypes from 'prop-types'

import ProfileChildComponent from './ProfileChildComponent'
import ProfileChildComponentSecond from './ProfileChildComponentSecond'


export const Profile =({title})=> {
    const [userName, setUserName ] = useState('')
    return (
        <div className="row p-2">
            <h2>User Name: {userName}</h2>
            <h3>{title}</h3>
            <div className='row'>
                <div className='col-4'>
                  <input className='form-control' onChange={({target}) => setUserName(target.value)} />
                </div>
                <div className='col-4'>
                    <ProfileChildComponent />
                </div>
                <div className='col-4'>
                    <ProfileChildComponentSecond />
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {
    title: PropTypes.string.isRequired
}