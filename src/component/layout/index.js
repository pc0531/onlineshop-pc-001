import React, { Component } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import Header from '../header'
import Footer from '../footer'
import Home from '../home'
import Goods from '../goods'
import Search from "../search";
import ShoppingCard from '../shoppingCard'
import SignIn from '../signin'
import SignUp from '../signup'
import Profile from '../profile'
import Help from '../help'

export default class Layout extends Component {
    render() {
        return [
            <Header key='Header'/>,
            <Switch key="homeContent">
                <Redirect exact from="/" to="/home" />

                <Route path="/home" component={Home} />
                <Route path="/goods" component={Goods} />
                <Route path="/search" component={Search} />
                <Route path="/shoppingCard" component={ShoppingCard} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/profile" component={Profile} />
                <Route path="/help" component={Help} />
                {/* <Route path="/course" component={Course} />
                <Route path="/class" component={Class} />
                <Route path="/order" component={Order} /> */}
            </Switch>,
            <Footer key='Footer'/>,
           
        ]
    }
}
