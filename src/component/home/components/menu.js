import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const initMenu = [
    {
        id: 0,
        title: '粮油'
    },
    {
        id: 1,
        title: '五谷杂粮'
    },
    {
        id: 2,
        title: '生鲜'
    },
    {
        id: 3,
        title: '农产品'
    },
    {
        id: 4,
        title: '干果'
    },
    {
        id: 5,
        title: '山珍'
    },
    {
        id: 6,
        title: '零食'
    }
]

export default class Menu extends Component {

    render() {
        let activeId = this.props.activeId;
        return (
            <div className='menu'>
                {
                    initMenu.map((ele, index) => (

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

                    ))
                }

            </div>
        )
    }
}