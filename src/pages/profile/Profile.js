
import { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../atoms/Button'
import { Task } from '../../components/Task'
import ProfileChildComponent from './ProfileChildComponent'
import ProfileChildComponentSecond from './ProfileChildComponentSecond'

// const MemoProfileChildComponent = memo(ProfileChildComponent)
// const MemoProfileChildComponent = memo(ProfileChildComponent, (prevProps, nextProps)=>{
//     return prevProps.param.color === nextProps.param.color
// })

const all = [ 1, 2, 3, 4, 5, 6 ]

export const Profile =({title})=> {
    const [ userName, setUserName ] = useState('')
    const [ color, setColor ] = useState('green')

    const param = useMemo(() => ({
        color
    }), [ color ])

    const onClick = useCallback(() => {
        console.log('__USE_CALLBACK__')
    }, [])

    const allList =useMemo(() => {
        return all.reduce((a, v) => a + v, 0 )
    }, [])

    console.log('__PROFILE_RENDER__', allList )

    return (
        <div className="row p-2">
            <div className='row shadow'>
                <Task />
            </div>
            <hr />
            <h2>User Name: {userName}</h2>
            <h3>{title}</h3>
            <div className='row'>
                <div className='col-4'>
                  <input className='form-control' onChange={({target}) => setUserName(target.value)} />
                </div>
                <div className='col-4'>
                    <Button 
                      className='btn btn-outline-secondary' 
                      onClick={()=> setColor(color === 'green' ? 'yellow' : 'blue')}
                    >
                    Change Color
                    </Button>
                </div>
                <div className='col-4'>
                    <ProfileChildComponent param={param} onClick={onClick} allList={allList} />
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