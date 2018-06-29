import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { getSearchList } from "../../search/modules/action"
import store from '../../../store'

const router = {
    pathname: '/course',
    state: {

    }
}

const A = [
    {
        id: 0,
        content: (
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>粮</p>
                        {/* <Link to={{ ...router, state: keyValue }}></Link> */}
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("仓优米"));
                            }}>仓优米</span>
                        </Link>
                        <p>油</p>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("菜籽油"));
                            }}>菜籽油</span>
                        </Link>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )

    },
    {
        id: 1,
        content: (
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>五谷</p>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("红豆"));
                            }}>红豆</span>
                        </Link>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("黑豆"));
                            }}>黑豆</span>
                        </Link>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("绿豆"));
                            }}>绿豆</span>
                        </Link>
                        <p>杂粮</p>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("黑米"));
                            }}>黑米</span>
                        </Link>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("大麦糁"));
                            }}>大麦糁</span>
                        </Link>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("玉米糁"));
                            }}>玉米糁</span>
                        </Link>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("麦片"));
                            }}>麦片</span>
                        </Link>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )

    },
    {
        id: 2,
        content: (
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>生鲜</p>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("草鸡"));
                            }}>草鸡</span>
                        </Link>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("黑猪肉"));
                            }}>黑猪肉</span>
                        </Link>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("黄鳝"));
                            }}>黄鳝</span>
                        </Link>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("鸡蛋"));
                            }}>鸡蛋</span>
                        </Link>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id: 3,
        content: (
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>农产品</p>
                        <Link to='/search'>
                            <span onClick={() => {
                                store.dispatch(getSearchList("豆角干"));
                            }}>豆角干</span>
                        </Link>
                    </div>

                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id: 4,
        content: (
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>干果</p>
                        <h3>——————<span style={{ padding: '0px 20px' }}>敬请期待</span>——————</h3>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id: 5,
        content: (
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>山珍</p>
                        <h3>——————<span style={{ padding: '0px 20px' }}>敬请期待</span>——————</h3>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id: 6,
        content: (
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>零食</p>
                        <h3>——————<span style={{ padding: '0px 20px' }}>敬请期待</span>——————</h3>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    }

]



export default class TypeDetail extends Component {
    render() {
        let a = A.find((ele) => (ele.id === this.props.activeId))
        return (
            a ? a.content : <div></div>
        )
    }
}