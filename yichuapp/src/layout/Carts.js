
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sauce from '@/views/stops/sauce';//酱料
import Ware from '@/views/stops/ware';//餐具
import Bake from '@/views/stops/bake';//烘焙
import Appliance from '@/views/stops/appliance';//电器
import Foods from '@/views/stops/foods';//美食


export default () => (
    <div className="container">
        <Switch>
            <Route path='/carts/sauce' component={ Sauce } />
            <Route path='/carts/ware' component={ Ware } />
            <Route path='/carts/bake' component={ Bake } />
            <Route path='/carts/appliance' component={ Appliance } />
			<Route path='/carts/foods' component={ Foods } />
        </Switch>
    </div>
)