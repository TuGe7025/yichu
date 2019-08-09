import React from 'react';
import { NavLink } from 'react-router-dom'
export default (props) => {
  const { label, left, right, chef, onLeftClick, onRightClick, labelLeft, labelRight } = props
  return (
    <header className = 'community-header'>
      <ul>
        <li onClick = { () => {
          if (props.match.path === '/') {
            return
          }
          onLeftClick()
        } }><div>{ left }</div></li>
        <li className = "label">
          <div>{ chef }</div>
          <NavLink exact to = "/comy/atte" activeClassName="active">{ labelLeft }</NavLink>
          <NavLink exact to = "/comy/find" activeClassName="active">{ label }</NavLink>
          <NavLink exact to = "/comy/newest" activeClassName="active">{ labelRight }</NavLink>
        </li>
        <li onClick = {() => {
          onRightClick()
        }}><div>{ right }</div></li>
      </ul>
    </header>
  )
}