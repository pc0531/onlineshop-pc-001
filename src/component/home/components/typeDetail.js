import React, { Component } from 'react'
import { Link } from "react-router-dom"

const router = {
    pathname :'/course',
    state:{

    }
}

const A = [
    {
        id:0,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>粮油</p>
                        {/* <Link to={{ ...router, state: keyValue }}></Link> */}
                        <Link to={{...router,state:{first:0,second:0,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:0,second:0,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:0,second:0,third:2}}}>英语</Link>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )

    },
    {
        id:1,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>杂粮</p>
                        <Link to={{...router,state:{first:1,second:0,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:1,second:0,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:1,second:0,third:2}}}>英语</Link>
                    </div>
        
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )

    },
    {
        id:2,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>生鲜</p>
                        <Link to={{...router,state:{first:2,second:0,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:2,second:0,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:2,second:0,third:2}}}>外语</Link>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id:3,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>农产品</p>
                        <Link to={{...router,state:{first:3,second:0,third:0}}}>CET</Link>
                        <Link to={{...router,state:{first:3,second:0,third:1}}}>托福</Link>
                        <Link to={{...router,state:{first:3,second:0,third:2}}}>雅思</Link>
                    </div>
                   
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id:4,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>干果</p>
                        <Link to={{...router,state:{first:4,second:0,third:0}}}>钢琴</Link>
                        <Link to={{...router,state:{first:4,second:0,third:1}}}>吉他</Link>
                        <Link to={{...router,state:{first:4,second:0,third:2}}}>小提琴</Link>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id:5,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>山珍</p>
                        <Link to={{...router,state:{first:5,second:0,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:5,second:0,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:5,second:0,third:2}}}>外语</Link>
                    </div>
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id:6,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>零食</p>
                        <h3>——————<span style = {{padding:'0px 20px'}}>敬请期待</span>——————</h3>
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
        let a = A.find((ele)=>(ele.id === this.props.activeId))
        return (
            a?a.content:<div></div>
        )
    }
}