// 个人中心路由
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//未登录状态
import Login from '@/views/user/login';
import Menu from '@/views/user/menu';//帖子与菜谱路由
import Attention from '@/views/user/attention';//关注
import Phaseolus from '@/views/user/phaseolus';//菜豆
import Integral from '@/views/user/integral';//积分
import Coupon from '@/views/user/coupon';//优惠券
import Goods from '@/views/user/goods';//我的订单
import Task from '@/views/user/task';//任务中心
import Favorite from '@/views/user/favorite';//我的收藏
import History from '@/views/user/history';//浏览记录
import Friends from '@/views/user/friends';//邀请好友
import Help from '@/views/user/help';//反馈帮助
import Setting from '@/views/user/setting';//设置


export default () => (
    <div className="container">
        <Switch>
            <Route from='/personage/login' component={Login}></Route>
            {/* 帖子与菜谱路由 */}
            <Route from='/personage/menu' component={Menu}></Route> 
            {/* 关注 */}
            <Route from='/personage/attention' component={Attention}></Route>
            {/* 菜豆 */}
            <Route from='/personage/phaseolus' component={Phaseolus}></Route>
            {/* 积分 */}
            <Route from='/personage/integral' component={Integral}></Route>
            {/* 优惠券 */}
            <Route from='/personage/coupon' component={Coupon}></Route>
            {/* 订单 */}
            <Route from='/personage/goods' component={Goods}></Route>
            {/* 任务中心 */}
            <Route from='/personage/task' component={Task}></Route>
            {/* 我的收藏 */}
            <Route from='/personage/favorite' component={Favorite}></Route>
            {/* 浏览记录 */}
            <Route from='/personage/history' component={History}></Route>
            {/* 邀请好友 */}
            <Route from='/personage/friends' component={Friends}></Route>
            {/* 反馈帮助 */}
            <Route from='/personage/help' component={Help}></Route>
            {/* 设置  setting*/}
            <Route from='/personage/setting' component={Setting}></Route>
        </Switch>
    </div>
)