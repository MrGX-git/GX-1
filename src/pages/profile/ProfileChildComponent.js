
import { memo } from "react"

const ProfileChildComponent =()=> {
    console.log('__CHILD_COMPONENT_RENDERING__')
    const fs = Math.round(Math.random() * 40) + 10
    return (
        <h3 style={{
            fontSize: fs,
        }}>Child</h3>
    )
}

export default memo(ProfileChildComponent)