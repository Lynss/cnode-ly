import * as React from 'react'
import './index.scss'
import { inject, observer } from 'mobx-react'
import { Store } from '../../models/interfaces/interfaces'

const Nav = inject((stores: Store) => ({
    loadData: stores.index.loadData,
    currentTab: stores.common.currentTab,
    changeTab: stores.common.changeTab,
}))(observer(({loadData, currentTab, changeTab}) => {
    const currentChose = (tab: string) => tab === currentTab ? 'currentTab' : ''
    const whenChange = (tab: string) => () => {
        changeTab(tab)
        loadData(tab)
    }
    return (
        <nav className={'navComponent'}>
            <ul>
                <li className={currentChose('ask')} onClick={whenChange('ask')}>问答</li>
                <li className={currentChose('share')} onClick={whenChange('share')}>分享</li>
                <li className={currentChose('job')} onClick={whenChange('job')}>招聘</li>
            </ul>
        </nav>
    )
}))

export default Nav