import React from 'react';
import './Talk.scss';
export default (props) => {
  return (
    <div className = "talk">
      <div className = "talk-title">
        <div className= "talk-title-head">
          <div className = "head">
            {/* <img /> */}
          </div>
          <div className = "name">
            <p>LEI-LEI</p>
            <time>3分钟前</time>
          </div>
        </div>
        <div className = "talk-title-att">+关注</div>
      </div>
      <div className = "talk-cont">【猫宁】做一份喜欢的早餐迎接周末的到来0000000000000000000000000</div>
      <div className = "talk-img-box">
        <ul>
          <li>
            <div className = "img-box"></div>
            <div>
              <i></i>
              <span>1222</span>
            </div>
          </li>
          <li>
            <div className = "img-box"></div>
            <div>
              <i></i>
              <span>1222</span>
            </div>
          </li>
          <li>
            <div className = "img-box"></div>
            <div>
              <i></i>
              <span>1222</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}