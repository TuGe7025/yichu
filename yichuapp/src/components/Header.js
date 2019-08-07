import React from 'react';
export default (props) => {
    const { label, left, right, onRightClick } = props

    return (
        <ul>
            <li onClick = {
                () => {
                   if (props.match.path === '/home') {
                       console.log('Homegoback')
                       return
                   }
                   props.history.goBack();
                }
            }>
            {left}</li>
            <li>{ props.children ? props.children : label ? label : '标题' }</li>
            <li onClick = { () => {
                onRightClick()
            }}>{right}</li>
        </ul>
    )
}