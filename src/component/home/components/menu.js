import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const initMenu = [
    {
        id: 0,
        title: '学前辅导'
    },
    {
        id: 1,
        title: '小学辅导'
    },
    {
        id: 2,
        title: '中学辅导'
    },
    {
        id: 3,
        title: '高等教育'
    },
    {
        id: 4,
        title: '兴趣培训'
    },
    {
        id: 5,
        title: '舞蹈培训'
    },
    {
        id: 6,
        title: '乐器'
    }
]

export default class Menu extends Component {

    render() {
        let activeId = this.props.activeId;
        return (
            <div className='menu'>
                {
                    initMenu.map((ele, index) => (
                        <Link to='/course'>
                            <div className={`menuDetail` + ` ` + `${activeId === ele.id ? `menuDetailActive` : ``}`}
                                key={ele + index}
                                onMouseOver={() => {
                                    this.setState({ activeId: ele.id })
                                    this.props.onMouseOver(ele.id);
                                }}
                            >
                                <a>
                                    <span>{ele.title}</span>
                                    <i></i>
                                </a>
                            </div>
                        </Link>
                    ))
                }

            </div>
        )
    }
}