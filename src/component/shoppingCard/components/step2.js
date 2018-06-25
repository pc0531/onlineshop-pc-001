import React, { Component } from 'react'
import { Steps, Button, Table, Icon, Input, Form, Cascader, message } from 'antd'
import Constants from '../../../common/Constants'

const FormItem = Form.Item;
const { TextArea } = Input;

const columns_confirm = [
    {
        title: '购物车中的商品',
        dataIndex: 'goodsName',
    }, {
        title: '单价',
        dataIndex: 'goodsPrice',
    }, {
        title: '数量',
        dataIndex: 'num',
    }, {
        title: '商品合计',
        render: (text) => (<span>{text.goodsPrice * text.num}</span>)
    }];

const chooseStyle = {
    border: '1px dashed #a1bc22',
    color: '#a1bc22'
}


class Step2Form extends Component {

    state = {
        toAddAddr: false
    }

    componentDidMount() {
        const { userId, getAddrList } = this.props;
        if (userId) {
            getAddrList(userId);
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let toAddAddr = this.state.toAddAddr;
        const { addressId, addressList, addAddr, onChangeStep, changeData, shoppingCardList, addTrade } = this.props;
        const formItemLayout = {
            labelCol: {
                xs: { span: 18 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 4 },
                sm: { span: 16 },
            },
        };
        return (

            <div className="shoppingcard-detail">
                <div className="shoppingcard-addresslist">
                    <h2>
                        <Icon type="home" />
                        <span style={{ paddingLeft: '20px' }}>填写收货人信息</span>
                        <a onClick={() => {
                            this.setState({ toAddAddr: true })
                        }}>新增</a>
                    </h2>
                    {addressList.length === 0 ?
                        <div className="shoppingcard-noAddress">
                            —————<span>暂无收货地址</span>—————
                        </div>
                        :
                        <div className="shoppingcard-addressForm">
                            <ul>
                                {
                                    addressList.map((ele, index) => {
                                        if (addressId === ele.id) {
                                            return (
                                                <li
                                                    key={index}
                                                    style={chooseStyle}
                                                    onClick={() => {
                                                        changeData('addressId', ele.id);
                                                    }}>
                                                    <ul>
                                                        <li>收货人姓名:<span>{ele.name}</span></li>
                                                        <li>收货地区:
                                                            <span>{ele.province}</span>
                                                            <span>{ele.city}</span>
                                                            <span>{ele.area}</span>
                                                        </li>
                                                        <li>详细地址:<span>{ele.detail}</span></li>
                                                        <li>手机或电话:<span>{ele.phoneNum}</span></li>
                                                    </ul>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => {
                                                        changeData('addressId', ele.id);
                                                    }}>
                                                    <ul>
                                                        <li>收货人姓名:<span>{ele.name}</span></li>
                                                        <li>收货地区:
                                                            <span>{ele.province}</span>
                                                            <span>{ele.city}</span>
                                                            <span>{ele.area}</span>
                                                        </li>
                                                        <li>详细地址:<span>{ele.detail}</span></li>
                                                        <li>手机或电话:<span>{ele.phoneNum}</span></li>
                                                    </ul>
                                                </li>
                                            )
                                        }

                                    })
                                }
                            </ul>
                        </div>
                    }
                    {toAddAddr ?
                        <div className="shoppingcard-addressAddForm">
                            <div className="shoppingcard-addressAddForm-content">
                                <Form>
                                    <FormItem
                                        {...formItemLayout}
                                        label="收货人姓名"
                                    >
                                        {getFieldDecorator('name', {
                                            rules: [{
                                                required: true, message: '请输入收货人姓名！',
                                            }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="收货地址"
                                    >
                                        {getFieldDecorator('address', {
                                            rules: [{ type: 'array', required: true, message: '请选择收货地址！' }],
                                        })(
                                            <Cascader options={Constants.address} />
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="详细地址"
                                    >
                                        {getFieldDecorator('detail', {
                                            rules: [{
                                                required: true, message: '请输入详细地址！',
                                            }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="手机或电话"
                                    >
                                        {getFieldDecorator('phoneNum', {
                                            rules: [{
                                                required: true, message: '请输入手机或电话！',
                                            }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                   
                                    <button
                                        onClick={() => {
                                            this.setState({ toAddAddr: false })
                                        }}
                                        style = {
                                            {
                                                background:'white',
                                                color: '#a1bc22',
                                                marginRight: '40px',
                                                marginLeft: '20px',
                                                marginBottom: '10px'
                                            }
                                        }
                                    >
                                        取消
                                    </button>
                                    <button
                                        onClick={() => {
                                            const { form } = this.props
                                            const { validateFields, getFieldValue, getFieldsValue } = form
                                            validateFields(
                                                { force: true },
                                                (err) => {
                                                    if (!err) {
                                                        const formData = getFieldsValue()
                                                        addAddr(
                                                            {
                                                                province: formData.address[0],
                                                                city: formData.address[1],
                                                                area: formData.address[2],
                                                                detail: formData.detail,
                                                                phoneNum: formData.phoneNum,
                                                                name: formData.name
                                                            }
                                                        )
                                                        message.success("新增成功!")
                                                        this.setState({ toAddAddr: false })
                                                    } else {
                                                        return false
                                                    }
                                                })
                                        }}
                                    >
                                        保存
                                    </button>
                                </Form>
                            </div>

                        </div>
                        : null
                    }
                </div>
                <div className="shoppingcard-confirmGoods">
                    <h2><Icon type="shopping-cart" /><span style={{ paddingLeft: '20px' }}>确认商品信息</span></h2>
                    <Table columns={columns_confirm} dataSource={shoppingCardList} />
                </div>
                <div className="shoppingcard-message">
                    <h2><Icon type="message" /><span style={{ paddingLeft: '20px' }}>留言</span></h2>
                    <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
                </div>
                <div className="shoppingcard-step2bottom">
                    <button style={{ float: 'left' }} onClick={() => {
                        onChangeStep(0)
                    }}>
                        返回上一步
                            </button>
                    <button style={{ float: 'right' }} onClick={() => {
                        if (!addressId) {
                            message.error("请输入收货地址信息！")
                            return
                        }
                        addTrade(onChangeStep(2));
                    }}>
                        确认订单
                                </button>
                </div>
            </div>
        )

    }
}

const Step2 = Form.create()(Step2Form);

export default Step2;