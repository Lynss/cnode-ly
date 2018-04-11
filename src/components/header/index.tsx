import * as React from 'react'
import './index.scss'

interface HeaderProps {
    doRoute: (url: string) => () => void
}

const Header = (props: HeaderProps) => (
    <header className={'headerComponent'}>
        <img src={'//cnodejs.org/public/images/cnodejs_light.svg'}/>
        <ul>
            <li>首页</li>
            <li>注册</li>
            <li>登录</li>
        </ul>
    </header>
)

export default Header