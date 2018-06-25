import React, { Component } from "react"
import { Icon } from 'antd'

export default class Footer extends Component {

    componentWillMount() {
    }

    render() {
        return (
            <footer>
                <div className ="footLine">
                </div>
                <div className='footerContent'>
                    <ul>
                        <li>
                            <h3><Icon type="question-circle-o" /><span>新手指南</span></h3>
                            <ul>
                                <li>注册新用户</li>
                                <li>网站订购流程</li>
                                <li>不用注册也可直接购买</li>
                            </ul>
                        </li>
                        <li>
                            <h3><Icon type="pay-circle" /><span>付款方式</span></h3>
                            <ul>
                                <li>支付宝</li>
                                <li>银行转账</li>
                            </ul>
                        </li>
                        <li>
                            <h3><Icon type="rocket" /><span>配送方式</span></h3>
                            <ul>
                                <li>货到付款城市及配送时间</li>
                                <li>款到快递城市及配送时间</li>
                            </ul>
                        </li>
                        <li>
                            <h3><Icon type="customer-service" /><span>帮助中心</span></h3>
                            <ul>
                                <li>常见热点问题</li>
                                <li>联系我们</li>
                                <li>投诉与建议</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="clear">
                    </div>
                    <p>CopyRight © 1995-2018 优选菜商务网 版权所有 京ICP备140044号 京公网安备11010502024535</p>
                </div>
            </footer>

        )
    }

}