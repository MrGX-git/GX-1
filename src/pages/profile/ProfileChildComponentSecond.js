
import { memo } from "react"

const ProfileChildComponentSecond =({ color })=> {
    console.log('__CHILD_COMPONENT_SECOND_RENDERING__')
    const fs = Math.round(Math.random() * 40) + 10
    return (
        <h3 style={{
            fontSize: fs,
        }}>Child 2</h3>
    )
}

export default memo(ProfileChildComponentSecond)