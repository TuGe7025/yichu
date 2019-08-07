import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Atte from '@/views/community/atte'; // 关注
import Find from '@/views/community/find'; // 发现
import Newest from '@/views/community/newest'; // 最新
// import Footer from '@/components/Footer'; // 底部

export default () => (
    <Switch>
        <Route path='/comy/atte' component={ Atte } />
        <Route path='/comy/find' component={ Find } />
        <Route path='/comy/newest' component={ Newest } />
    </Switch>
)
