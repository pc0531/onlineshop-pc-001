import React, { Component } from 'react'

export default class Help extends Component {
    render() {
        return (
            <div className="help">
                <div className="help-content">
                    <div className="help-left">
                        <h2>帮助中心</h2>
                        <ul>
                            <li>
                                常见问答
                    </li>
                            <li>
                                新手指南
                    </li>
                            <li>
                                如何联系我们
                    </li>
                            <li>
                                联系方式
                    </li>
                        </ul>
                    </div>
                    <div className="clear">
                    </div>
                </div>

            </div>
        )

    }
}