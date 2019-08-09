import React from 'react';
import { NavLink } from 'react-router-dom'
// 引入的图标
import shouye1 from '@/images/Icon/shouye1.png';
import tubiao from '@/images/Icon/tubiao-.png';
import dianzan from '@/images/Icon/dianzan.png';
import dianpu from '@/images/Icon/dianpu.png';
import huojian from '@/images/Icon/huojian.png';

export default () => {

  return (
    <footer className="footer">
      <ul>
          <NavLink to="/home">
              <img className="icon" src={shouye1} alt=""/>
              <p>首页</p>
          </NavLink>
          <NavLink to="/chef">
              <img className="icon" src={tubiao} alt=""/>
              <p>名厨</p>
          </NavLink>
          <NavLink to="/comy/find">
              <img className="icon" src={dianzan} alt=""/>
              <p>社区</p>
          </NavLink>
          <NavLink to="/stops">
              <img className="icon" src={dianpu} alt=""/> 
              <p>集市</p>
          </NavLink>
          <NavLink to="/user">
  
          {/* <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye1"></use>
          </svg> */}
              <img className="icon" src={huojian} alt=""/>
          {/* <span className = "iconfont icon-weibiaoti2fuzhi12"></span> */}
              <p>我的</p>
          </NavLink>
      </ul>
    </footer>
  )
}