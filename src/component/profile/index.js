import React from 'react';

import { Switch, Redirect, Route } from "react-router-dom"
import ProfileLeft from '../profileLeft'

import MyTrade from './myTrade'
import AllTrade from './allTrade'
import GoodsManage from './goodsManage'

import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class Profile extends React.Component {
    render() {
        const { userId } = this.props;
        console.error("userName:" + userId)
        return (
            <div className='profile'>
                <div className='profileContent'>
                    <Redirect from='/profile' to='/profile/myTrade' />
                    <ProfileLeft key='prol' userId={userId} />
                    <Switch key='profile'>
                        <Route path='/profile/myTrade' component={MyTrade} />
                        <Route path='/profile/allTrade' component={AllTrade} />
                        <Route path='/profile/goodsManage' component={GoodsManage} />
                        {/* <Route path='/profile/personInfo' component={PersonInfo} />
                        
                        <Route path='/profile/friends' component={Friends} />
                       
                        <Route path='/profile/recharge' component={Recharge} /> */}
                    </Switch>
                </div>
            </div>

        )

    };
}

const mapStateToProps = (state) => {
    return { ...state.userConfig }
}

export default connect(mapStateToProps)(Profile)