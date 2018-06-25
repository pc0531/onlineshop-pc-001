import React, { Component } from 'react'
import { Link } from "react-router-dom"
import recom from '../../../assets/recom-1.png'

export default class RecommendGoods extends Component {
    render(){
        return(
            <div className='recommendTeacher'>
            <div className='recommendTeacher-top'>
                <h3>精品推荐</h3>
                <span>限时出售 l 性价比高</span>
            </div>
            <ul className='recommendTeacher-bottom'>
                <li className='recommendTeacher-bottom-right'>
                    <a href = 'http://www.xdf.cn/'>
                        <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/43dbe879ff9e6fdb405494fc3bc070c8_121_121.jpg' />
                        <div>
                            <p style = {{color:'#97cf00'}}>新东方</p>
                            <p>语数外5折起</p>
                        </div>
                    </a>
                </li>
                <li className='recommendTeacher-bottom-left'>
                    <a>
                        <img src={recom}/>
                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-left'>
                    <a href='http://www.xueda.com/'>
                        <img src='https://gd2.alicdn.com/imgextra/i2/2889424183/TB29.G0rL9TBuNjy1zbXXXpepXa_!!2889424183.jpg_400x400.jpg_.webp' />
                        <p style = {{color:'#97cf00'}}>优选菜&nbsp;仓有米</p>
                        <p style={{ paddingTop: '10px' }}>￥68</p>
                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-top'>
                    <a href = 'http://www.jushi.org/'>
                        <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/506975b2b649c994ab57ee7902e39541_121_121.jpg' />
                        <div>
                            <p style = {{color:'#97cf00'}}>巨石教育</p>
                            <p>幼儿教育买一送一</p>
                        </div>

                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-top' style={{ marginTop: '16px' }}>
                    <a href = 'http://www.xinghuo100.com/'>
                        <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/6306c59010920827ee6ec1a80e15e671_121_121.jpg' />
                        <div>
                            <p style = {{color:'#97cf00'}}>星火教育</p>
                            <p>托福雅思春季促销</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
        )
    }
}
