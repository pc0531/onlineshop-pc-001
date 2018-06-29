import React, { Component } from "react"
import Menu from './components/menu'
import TypeDetail from './components/typeDetail'
import { Carousel, Icon } from 'antd';
import * as actions from './modules/action'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
// import RecommendSchool from './components/recommendSchool'
import { Link } from "react-router-dom"


const router = {
    pathname: '/goods',
    state: ''
}

class Home extends Component {
    state = {
        activeId: -1
    }
    componentDidMount() {
        const { getRecommendList } = this.props;
        getRecommendList();
    }

    render() {
        let activeId = this.state.activeId;
        const { recommendList } = this.props;
        return (
            <div className='home'>
                <div className='banner'>
                    <div className='bannerContent'
                        onMouseLeave={() => {
                            this.setState({ activeId: -1 })
                        }}
                    >
                        <Menu
                            activeId={activeId}
                            onMouseOver={(id) => {
                                this.setState({ activeId: id })
                            }}
                        />
                        <TypeDetail activeId={activeId} />
                        <div className='bannerRight'>
                            <Carousel autoplay>
                                <div><img src='//img1.sycdn.imooc.com/5ad40b8e0001983009360316.jpg' /></div>
                                <div><img style={{ width: '936px', height: '316px' }} src='https://www.6688.com/imgs/index/banner/banner-mmzl.jpg?version=20180510' /></div>
                                <div><img style={{ width: '936px', height: '316px' }} src='//img1.sycdn.imooc.com/5ad40b8e0001983009360316.jpg' /></div>
                                <div><img style={{ width: '936px', height: '316px' }} src='//img1.sycdn.imooc.com/5ad40b8e0001983009360316.jpg' /></div>
                            </Carousel>
                            <div className='clear'></div>
                            <div className="bannerRight-bottom">
                                <ul>
                                    <li>
                                        <div className="bannerRight-bottom-box">
                                            <h3><Icon type="tag-o" /><span>品类齐全，轻松购物</span></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerRight-bottom-box">
                                            <h3><Icon type="tag-o" /><span>新鲜直达，极速配送</span></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerRight-bottom-box">
                                            <h3><Icon type="tag-o" /><span>原产直销，精致服务</span></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerRight-bottom-box">
                                            <h3><Icon type="tag-o" /><span>天天低价，畅选无忧</span></h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <img src='//img1.sycdn.imooc.com/5ad40b8e0001983009360316.jpg' /> */}
                        </div>

                    </div>
                </div>
                <div className="recommendGoods-title">
                    <h2>——————<span>推荐好物</span>——————</h2>
                </div>

                <div className="recommendGoods">
                    <ul>
                        {
                            recommendList && recommendList.length > 0 ?
                                recommendList.map((ele, index) => {
                                    return (
                                        <Link to={{ ...router, state: ele }}>
                                            <li key={index}>
                                                <h3>{ele.goodsName}</h3>
                                                <img src={ele.goodsPicUrl} />
                                                <p>价格：<span>￥{ele.goodsPrice}</span></p>
                                                <h4>立刻购买<Icon type="right" /></h4>
                                            </li>
                                        </Link>
                                    )
                                }) : null

                        }
                    </ul>
                    <div className="clear"></div>
                </div>

                {/* <RecommendGoods />
                <RecommendGoods />
                <RecommendGoods /> */}
                {/* <LatestGoods/> */}
                {/* <RecommendTeacher />
                <RecommendSchool />
                <RecommendClass /> */}

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { ...state.home }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)