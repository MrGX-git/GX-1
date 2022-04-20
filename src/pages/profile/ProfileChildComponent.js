
import { memo } from "react"

const ProfileChildComponent =({ param, onClick })=> {
    console.log('__CHILD_COMPONENT_RENDERING__', param.color)
    return (
        <h3 style={{
            color: param.color
        }}>Child</h3>
    )
}

export default memo(ProfileChildComponent)