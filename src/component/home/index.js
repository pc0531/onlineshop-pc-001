import React, { Component } from "react"
import Menu from './components/menu'
import TypeDetail from './components/typeDetail'
import RecommendGoods from './components/recommendGoods'
import LatestGoods from './components/latestGoods'
import { Carousel,Icon } from 'antd';
// import RecommendSchool from './components/recommendSchool'
import { Link } from "react-router-dom"


class Home extends Component {
    state = {
        activeId: -1
    }

    render() {
        let activeId = this.state.activeId;

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
                                        <div className = "bannerRight-bottom-box">
                                        <h3><Icon type="tag-o" /><span>品类齐全，轻松购物</span></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className = "bannerRight-bottom-box">
                                        <h3><Icon type="tag-o" /><span>新鲜直达，极速配送</span></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className = "bannerRight-bottom-box">
                                        <h3><Icon type="tag-o" /><span>原产直销，精致服务</span></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className = "bannerRight-bottom-box">
                                        <h3><Icon type="tag-o" /><span>天天低价，畅选无忧</span></h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <img src='//img1.sycdn.imooc.com/5ad40b8e0001983009360316.jpg' /> */}
                        </div>

                    </div>
                </div>
                <RecommendGoods />
                <RecommendGoods />
                <RecommendGoods />
                {/* <LatestGoods/> */}
                {/* <RecommendTeacher />
                <RecommendSchool />
                <RecommendClass /> */}

            </div>
        )
    }
}

export default Home;