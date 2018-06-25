import React, { Component } from 'react'
import { Steps, Button, Table, message, Input } from 'antd'



export default class Step1 extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        const columns = [{
            title: '购物车中的商品',
            render: (text) => {
                console.error("text:" + text);
                return (
                    <a>
                        <img src={text.goodsPicUrl} style={{ width: '100px', height: '100px' }} />
                        <span style={{ paddingLeft: '20px' }}>{text.goodsName}</span>
                    </a>
                )
            }
        }, {
            title: '单价',
            dataIndex: 'goodsPrice',
        }, {
            title: '数量',
            dataIndex: 'num',
        }, {
            title: '商品合计',
            render: (text) => (<span>{text.num * text.goodsPrice}</span>)
        }, {
            title: '操作',
            render: (text) => (
                <a onClick={() => {
                    this.props.delFormShoppingCard(text.id)
                }}>删除</a>
            )
        }];
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        let shoppingcardlist = this.props.shoppingcardlist;
        let totalCash = 0;
        if (shoppingcardlist) {
            shoppingcardlist.map((ele) => {
                if (ele.goodsPrice) {
                    totalCash += ele.num * ele.goodsPrice
                }
            })
        }

        return (
            <div className="shoppingcard-detail">
                <Table rowSelection={rowSelection} columns={columns} dataSource={shoppingcardlist} />
                <div className="shoppingcard-detail-bottom">
                    <p>共计{shoppingcardlist ? shoppingcardlist.length : 0}种商品，共<span>￥{totalCash}</span>元</p>

                </div>
                <div className="clear"></div>
                <div className="shoppingcard-detail-button" >
                    <button onClick={() => {
                        console.error("selectedRowKeys：" + selectedRowKeys)
                        if (selectedRowKeys.length === 0 || !selectedRowKeys) {
                            message.error("请选中商品！")
                            return;
                        }
                        this.props.onChangeStep(1)
                    }}>去结算</button>
                    {/* <button>登录</button> */}
                </div>
            </div>
        )
    }
}