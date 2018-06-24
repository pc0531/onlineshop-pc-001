import React, { Component } from 'react';
import { Icon, Input, Button, Table, Modal, Form, Select, TreeSelect, message } from 'antd'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import moment from 'moment'
const Option = Select.Option;

const FormItem = Form.Item;

class GoodsManage extends Component {
    state = {
        modalShow: false,
        mark: '',
        goodsId:''
    }

    componentDidMount() {
        const { getGoodsList } = this.props;
        getGoodsList();
    }

    render() {
        const { goodsList, addGoods, deleteGoods, updateGoods } = this.props;
        const { modalShow, mark,goodsId } = this.state;
        const { getFieldDecorator, getFieldsValue, validateFields, setFieldsValue, resetFields } = this.props.form;
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
        const columns = [
            {
                dataIndex: 'addTime',
                title: '新增时间',
                width: '21%',
                align: 'center',
                render: (text) => (
                    <span>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</span>
                )
            },
            {
                dataIndex: 'id',
                title: '商品编号',
                width: '15%',
                align: 'center'
            },
            {
                dataIndex: 'goodsName',
                title: '课程名称',
                width: '14%',
                align: 'center'
            },
            {
                dataIndex: 'goodsNum',
                title: '剩余数量',
                width: '13%',
                align: 'center'
            },
            {
                dataIndex: 'goodsPrice',
                title: '价格',
                width: '13%',
                align: 'center'
            },
            {
                title: '操作',
                width: '10%',
                align: 'center',
                render: (text) => (
                    <p>
                        <a onClick={() => {
                            setFieldsValue(
                                {
                                    goodsName: text.goodsName,
                                    goodsPrice: text.goodsPrice,
                                    goodsNum: text.goodsNum,
                                    goodsPicUrl: text.goodsPicUrl,
                                    goodsDescription: text.goodsDescription
                                }
                            )
                            this.setState({ modalShow: true, mark: 'update',goodsId:text.id })
                        }}
                            style={{ paddingRight: '10px' }}
                        >修改</a>
                        <a onClick={() => {
                            deleteGoods(text.id)
                        }}>删除</a>
                    </p>
                )
            },
        ]

        return (
            <div className='personInfo'>
                <div className='personInfoContent'>
                    <h3>商品管理
                        <a onClick={() => {
                            this.setState({ modalShow: true })
                        }}
                            style={{ float: 'right' }}
                        >
                            新增商品
                        </a>
                    </h3>
                    <Table columns={columns} dataSource={goodsList} />
                </div>
                <Modal
                    visible={modalShow}
                    onCancel={() => {
                        this.setState({
                            modalShow: false
                        })
                    }}
                    onOk={() => {
                        validateFields((err) => {
                            if (err) {
                                return
                            }
                            const formatData = getFieldsValue()
                            let price = Number(formatData.goodsPrice);
                            let num = Number(formatData.goodsNum);
                            let data = {
                                ...formatData,
                                goodsPrice: price,
                                goodsNum: num
                            }
                            if (mark === 'update') {
                                updateGoods({...data,id:goodsId}, () => {
                                    resetFields()
                                    this.setState({ modalShow: false })
                                })

                            } else {
                                addGoods(data, () => {
                                    resetFields()
                                    this.setState({ modalShow: false })
                                })
                            }

                        })
                    }}
                    width='500px'
                >
                    <div className='classmanageForm'>
                        <Form className='inputForm'>
                            <FormItem label="商品名" {...formItemLayout}>
                                {getFieldDecorator('goodsName', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入商品名',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="价格" {...formItemLayout}>
                                {getFieldDecorator('goodsPrice', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入价格',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="商品数量" {...formItemLayout}>
                                {getFieldDecorator('goodsNum', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入课程数量',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="商品描述" {...formItemLayout}>
                                {getFieldDecorator('goodsDescription', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入商品描述',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="图片地址" {...formItemLayout}>
                                {getFieldDecorator('goodsPicUrl', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入图片地址',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                        </Form>

                    </div>
                </Modal>
            </div>
        )
    }
}

const GoodsManageForm = Form.create()(GoodsManage)

const mapStateToProps = (state) => {
    return { ...state.goodsManage }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsManageForm);