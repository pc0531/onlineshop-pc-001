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
                        <p>幼儿</p>
                        <Link to={{...router,state:{first:0,second:0,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:0,second:0,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:0,second:0,third:2}}}>英语</Link>
                    </div>
                    <div className='boxContent'>
                        <p>幼儿多元化智能</p>
                        <Link to={{...router,state:{first:0,second:1,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:0,second:1,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:0,second:1,third:2}}}>英语</Link>
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
                        <p>1-3年级</p>
                        <Link to={{...router,state:{first:1,second:0,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:1,second:0,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:1,second:0,third:2}}}>英语</Link>
                    </div>
                    <div className='boxContent'>
                        <p>4-6年级</p>
                        <Link to={{...router,state:{first:1,second:1,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:1,second:1,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:1,second:1,third:2}}}>英语</Link>
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
                        <p>主修</p>
                        <Link to={{...router,state:{first:2,second:0,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:2,second:0,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:2,second:0,third:2}}}>外语</Link>
                    </div>
                    <div className='boxContent'>
                        <p>辅修</p>
                        <Link to={{...router,state:{first:2,second:1,third:0}}}>生物</Link>
                        <Link to={{...router,state:{first:2,second:1,third:1}}}>历史</Link>
                        <Link to={{...router,state:{first:2,second:1,third:2}}}>化学</Link>
                        <Link to={{...router,state:{first:2,second:1,third:3}}}>物理</Link>
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
                        <p>技能</p>
                        <Link to={{...router,state:{first:3,second:0,third:0}}}>CET</Link>
                        <Link to={{...router,state:{first:3,second:0,third:1}}}>托福</Link>
                        <Link to={{...router,state:{first:3,second:0,third:2}}}>雅思</Link>
                    </div>
                    <div className='boxContent'>
                        <p>专业</p>
                        <Link to={{...router,state:{first:3,second:1,third:0}}}>计算机</Link>
                        <Link to={{...router,state:{first:3,second:1,third:1}}}>会计</Link>
                        <Link to={{...router,state:{first:3,second:1,third:2}}}>考研</Link>
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
                        <p>乐器</p>
                        <Link to={{...router,state:{first:4,second:0,third:0}}}>钢琴</Link>
                        <Link to={{...router,state:{first:4,second:0,third:1}}}>吉他</Link>
                        <Link to={{...router,state:{first:4,second:0,third:2}}}>小提琴</Link>
                    </div>
                    <div className='boxContent'>
                        <p>舞蹈</p>
                        <Link to={{...router,state:{first:4,second:1,third:0}}}>poping</Link>
                        <Link to={{...router,state:{first:4,second:1,third:1}}}>国标舞</Link>
                        <Link to={{...router,state:{first:4,second:1,third:2}}}>街舞</Link>
                        <Link to={{...router,state:{first:4,second:1,third:3}}}>桑巴</Link>
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
                        <p>主修</p>
                        <Link to={{...router,state:{first:5,second:0,third:0}}}>语文</Link>
                        <Link to={{...router,state:{first:5,second:0,third:1}}}>数学</Link>
                        <Link to={{...router,state:{first:5,second:0,third:2}}}>外语</Link>
                    </div>
                    <div className='boxContent'>
                        <p>辅修</p>
                        <Link to={{...router,state:{first:5,second:1,third:0}}}>生物</Link>
                        <Link to={{...router,state:{first:5,second:1,third:1}}}>历史</Link>
                        <Link to={{...router,state:{first:5,second:1,third:2}}}>化学</Link>
                        <Link to={{...router,state:{first:5,second:1,third:3}}}>物理</Link>
                    </div>
        
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },

]



export default class TypeDetail extends Component {
    render() {
        let a = A.find((ele)=>(ele.id === this.props.activeId))
        return (
            a?a.content:<div></div>
        )
    }
}