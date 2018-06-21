import React, { Component } from 'react'
import { Button ,message } from 'antd'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'

class Goods extends Component {
    state = {
        num: 1
    }
    render() {
        let num = this.state.num;
        let detail = this.props.location.state;
        const { addToShoppingCard } = this.props;
        return (
            <div className="goods">
                <div className="goods-detail">
                    <div className="goods-detail-content">
                        <div className="goods-detail-show">
                            <div className="goods-info-img">
                                <img src="https://gd2.alicdn.com/imgextra/i4/2889424183/TB29Bb4uuySBuNjy1zdXXXPxFXa_!!2889424183.jpg" />
                                <div>
                                    你好
                                 </div>
                            </div>
                            <div className="goods-info">
                                <h2>{detail.goodsName}</h2>
                                <div className="goods-price">
                                    <span>价格：</span><span>{"￥"+detail.goodsPrice}</span>
                                </div>
                                <div className="goods-type">
                                    <span>规格</span>
                                </div>
                                <div className="goods-num">
                                    <span style={{ float: 'left', marginRight: '20px', fontSize: '16px' }}>数量:</span>
                                    <a onClick={() => {
                                        if (num > 1) {
                                            this.setState({ num: num - 1 })
                                        }
                                    }}>-</a>
                                    <input value={num} onChange={(e)=>{
                                        if(Number(e.target.value)<1 ||!Number(e.target.value)){
                                            return;
                                        }
                                        this.setState({num:e.target.value})
                                    }}/>
                                    <a onClick={() => {
                                        if(num >= detail.goodsNum){
                                            message.error("商品数量超过库存量！")
                                           return 
                                        }
                                        this.setState({ num: num + 1 })
                                    }}>+</a>
                                    <span style={{ marginLeft: '10px', fontSize: '16px' }}>库存:（{detail.goodsNum}）</span>
                                </div>
                                <div className="goods-buy">
                                    <button>立即购买</button>
                                    <button onClick = {()=>{
                                        addToShoppingCard(detail,num)
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
                                <p>猜您喜欢</p>
                                <ul>
                                    <li>
                                        <img src="https://gd2.alicdn.com/imgextra/i4/2889424183/TB29Bb4uuySBuNjy1zdXXXPxFXa_!!2889424183.jpg" />
                                        <p>商品名</p>
                                        <button>加入购物车</button>
                                    </li>
                                    <li><img src="https://gd2.alicdn.com/imgextra/i4/2889424183/TB29Bb4uuySBuNjy1zdXXXPxFXa_!!2889424183.jpg" /></li>
                                    <li><img src="https://gd2.alicdn.com/imgextra/i4/2889424183/TB29Bb4uuySBuNjy1zdXXXPxFXa_!!2889424183.jpg" /></li>
                                    <li><img src="https://gd2.alicdn.com/imgextra/i4/2889424183/TB29Bb4uuySBuNjy1zdXXXPxFXa_!!2889424183.jpg" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="goods-show-detail">
                        <div style={{background:'#91C000',width:'200px',fontSize:'20px',lineHeight:'50px',textAlign:'center',color:'white'}}>商品详情</div>
                        <img src = "https://img.alicdn.com/imgextra/i1/2889424183/TB2O6i3gDCWBKNjSZFtXXaC3FXa_!!2889424183.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods)