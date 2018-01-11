import React from 'react'

const MyFirstComponent = ({name, showName}) => (
    <div>
        Hello World {showName ? name : null}
    </div>
)

export default MyFirstComponent

