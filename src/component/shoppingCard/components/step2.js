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
    border: '1px dashed #1890ff',
    color: '#1890ff'
}


class Step2Form extends Component {


    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFieldsAndScroll((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { addressId, addressList, addAddr, onChangeStep, changeData, shoppingCardList, addTrade } = this.props;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (

            <div className="shoppingcard-detail">
                <div className="shoppingcard-addresslist">
                    <h2><Icon type="home" /><span style={{ paddingLeft: '20px' }}>填写收货人信息</span></h2>
                    {addressList.length === 0 ?
                        <div className="shoppingcard-addressForm">
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
                                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
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
                                <Button
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
                                                    // return signUp(
                                                    //     {
                                                    //         mobile: formData.phoneNumber,
                                                    //         password: formData.passWord,
                                                    //         code: formData.verificationCode,
                                                    //         recommendNo: formData.recommendNo
                                                    //     },
                                                    //     () => {
                                                    //         self.gotoPage("/profile/idConfirm")
                                                    //     }
                                                    // )
                                                    console.error("校验通过")
                                                    console.error("formData:" + JSON.stringify(formData))
                                                } else {
                                                    return false
                                                }
                                            })
                                    }}>
                                    保存
                                </Button>
                            </Form>
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
                                                    {ele.province + ele.city + ele.area + ele.detail + ele.phoneNum + ele.name}
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
                                                    {ele.province + ele.city + ele.area + ele.detail + ele.phoneNum + ele.name}
                                                </li>
                                            )
                                        }

                                    })
                                }
                            </ul>
                        </div>
                    }

                    {/* <ul>
                        <li>
                            <p>收货人姓名<input /></p>
                            <p>收货地区<input /></p>
                            <p>详细地址<input /></p>
                            <p>手机或电话<input /></p>
                        </li>
                    </ul> */}
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