import React, { Component } from 'react'
import { Button, message } from 'antd'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import PropTypes from 'prop-types'

class Goods extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

   
    state = {
        num: 1
    }

    componentDidMount() {
        const { getRecommendList } = this.props;
        getRecommendList();
    }

    gotoPage = (args, event) => {
        const { history } = this.context.router
        history.push(args)
    }


    render() {
        let num = this.state.num;
        let detail = this.props.location.state;
        const { addToShoppingCard, recommendList } = this.props;
        return (
            <div className="goods">
                <div className="goods-detail">
                    <div className="goods-detail-content">
                        <div className="goods-detail-show">
                            <div className="goods-info-img">
                                {/* <img src="https://gd2.alicdn.com/imgextra/i4/2889424183/TB29Bb4uuySBuNjy1zdXXXPxFXa_!!2889424183.jpg" /> */}
                                <img src={detail.goodsPicUrl} />
                            </div>
                            <div className="goods-info">
                                <h2>{detail.goodsName}</h2>
                                <h4>{detail.goodsDescription}</h4>
                                <div className="goods-send">
                                    <span>配送：</span>
                                    <span style = {{paddingLeft:'20px'}}>限时包邮</span>
                                </div>
                                <div className="goods-price">
                                    <span>价格：</span>
                                    <span>{"￥" + detail.goodsPrice}</span>
                                </div>
                                <div className="goods-type">
                                    <span>规格:</span>
                                    <div className="goods-type-content">
                                        {detail.goodsType}
                                    </div>
                                </div>
                                <div className="goods-num">
                                    <span style={{ float: 'left', marginRight: '30px', fontSize: '15px' }}>数量:</span>
                                    <a onClick={() => {
                                        if (num > 1) {
                                            this.setState({ num: num - 1 })
                                        }
                                    }}>-</a>
                                    <input value={num} onChange={(e) => {
                                        if (Number(e.target.value) < 1 || !Number(e.target.value)) {
                                            return;
                                        }
                                        this.setState({ num: e.target.value })
                                    }} />
                                    <a onClick={() => {
                                        if (num >= detail.goodsNum) {
                                            message.error("商品数量超过库存量！")
                                            return
                                        }
                                        this.setState({ num: num + 1 })
                                    }}>+</a>
                                    <span style={{ marginLeft: '15px', fontSize: '15px' }}>库存:（{detail.goodsNum}）</span>
                                </div>
                                <div className="goods-buy">
                                    <button
                                        onClick={() => {
                                            addToShoppingCard(detail, num)
                                            this.gotoPage("/shoppingCard")
                                        }}
                                    >立即购买</button>
                                    <button onClick={() => {
                                        message.success("添加成功!");
                                        addToShoppingCard(detail, num)
                                    }}>加入购物车</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goods-show">
                    <div className="goods-show-content">
                        <div className="goods-show-recom">
                            <div className="goods-recom-content">
                                <div className="goods-recom-title"><span>猜您喜欢</span></div>
                                <ul>
                                    {
                                        recommendList && recommendList.length > 0 ?
                                            recommendList.map((ele) => {
                                                return (
                                                    <li>
                                                        <img src={ele.goodsPicUrl} />
                                                        <p>{ele.goodsName}</p>
                                                        <h4>价格：<span>￥{ele.goodsPrice}</span></h4>
                                                        <button
                                                            onClick={() => {
                                                                message.success("添加成功!");
                                                                addToShoppingCard(ele, 1)
                                                            }}
                                                        >加入购物车
                                                        </button>
                                                    </li>
                                                )
                                            }) : null
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="goods-show-detail">
                            <div style={{ background: '#91C000', width: '200px', fontSize: '20px', lineHeight: '50px', textAlign: 'center', color: 'white' }}>商品详情</div>
                            <img src={detail.goodsDescriptionPicUrl} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.goods }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods)