import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class RecommendGoods extends Component {
    render(){
        return(
            <div className='recommendTeacher'>
            <div className='recommendTeacher-top'>
                <h3>名校推荐</h3>
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
                        <img src='http://sjbz.fd.zol-img.com.cn/t_s1080x1920c/g5/M00/0E/08/ChMkJ1rdiOCIIql2AALe68A4IjwAAn0ugIKDtAAAt8D756.jpg' />
                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-left'>
                    <a href='http://www.xueda.com/'>
                        <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1d057a63977e86f6ec4e6b8c3a54e18a_121_121.jpg' />
                        <p style = {{color:'#97cf00'}}>学大教育</p>
                        <p style={{ paddingTop: '10px' }}>公务员考试热招</p>
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
