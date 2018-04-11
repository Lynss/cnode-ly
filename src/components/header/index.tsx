import * as React from 'react'
import './index.scss'

interface HeaderProps {
}

const Header = (props: HeaderProps) => (
    <header className={'headerComponent'}>
        <img src={'//cnodejs.org/public/images/cnodejs_light.svg'} alt={'logo'}/>
        <form action={'/search'}>
            <input type='text' name={'q'}/>
        </form>
        <ul>
            <li>首页</li>
            <li>新手入门</li>
            <li>关于</li>
            <li>注册</li>
            <li>登录</li>
        </ul>
    </header>
)

export default Header