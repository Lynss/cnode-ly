import * as React from 'react'
import './index.scss'

interface NavProps {
}

const Nav = (props: NavProps) => (
    <nav className={'navComponent'}>
        <ul>
            <li className={'currentTab'}>全部</li>
            <li>精华</li>
            <li>问答</li>
            <li>分享</li>
            <li>招聘</li>
            <li>客户端测试</li>
        </ul>
    </nav>
)

export default Nav