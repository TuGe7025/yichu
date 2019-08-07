import React, {Component} from 'react';
import './bazaar.scss';
import tubiao from '@/images/Icon/tubiao-.png';
import dianzan from '@/images/Icon/dianzan.png';
export default class extends Component {
    render () {
        return (
        <div className="concent">
            <h3>精品挑选</h3>
            <div className="lists">
                <div className='sauce-shops'>
                    <img src={tubiao} alt=""></img>
                    <p>易厨牛肉香菇酱[包邮]...</p>
                    <div>
                        <span>￥29</span>
                        <span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
                    </div>
                </div> 
                <div className='sauce-shops'>
                    <img src={dianzan} alt=""></img>
                    <p>易厨牛肉香菇酱[包邮]...</p>
                    <div>
                        <span>￥29</span>
                        <span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
                    </div>
                </div> 
                <div className='sauce-shops'>
                    <img src={tubiao} alt=""></img>
                    <p>易厨牛肉香菇酱[包邮]...</p>
                    <div>
                        <span>￥29</span>
                        <span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
                    </div>
                </div> 
                <div className='sauce-shops'>
                    <img src={dianzan} alt=""></img>
                    <p>易厨牛肉香菇酱[包邮]...</p>
                    <div>
                        <span>￥29</span>
                        <span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
                    </div>
                </div> 
                <div className='sauce-shops'>
                    <img src={dianzan} alt=""></img>
                    <p>易厨牛肉香菇酱[包邮]...</p>
                    <div>
                        <span>￥29</span>
                        <span className="hui" style={{textDecorationLine:'line-through'}}>￥36</span>
                    </div>
                </div> 
            </div>
        </div> 
        )
    }
}