import React from 'react';
import './Talk.scss';
export default (props) => {
  return (
    <div className = "talk Attention">
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
      </div>
      <div className = "Attention-cont">
        <div className = "Attention-cont-title">【头部标题】</div>
        <div className = "cont">基本方式：<br />
        做一份喜欢的早餐迎接周末的到来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来来</div>
      </div>
      <div className = "Attention-img-box">
        <ul>
          <li>
            <div>
              <i></i>
              <span>1222</span>
            </div>
          </li>
          <li>
            <div>
              <i></i>
              <span>1222</span>
            </div>
          </li>
          <li>
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