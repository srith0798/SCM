import React from 'react'
import Loader from './loaderAbsoluteCenter'

export default function showLoader(props) {
    return (
        <div>
            {props.state ? <Loader top={props.top}/> : "" }
        </div>
    )
}
