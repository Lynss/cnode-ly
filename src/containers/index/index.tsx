import * as React from 'react'
import './index.scss'
import { inject, observer } from 'mobx-react'
import Header from '../../components/header'
import Nav from '../../components/nav'
import Item from '../../components/item'
import Topic from '../../models/topic'
import { Store } from '../../models/interfaces/interfaces'

interface IndexProps {
    topics: Array<Topic>
    loadData: (tab: string) => Promise<void>
}

@inject((stores: Store) => ({
    topics: stores.index.topics,
}))
@observer
class Index extends React.Component<IndexProps, {}> {
    render() {
        const {topics} = this.props
        return (
            <div className={'indexContainer'}>
                <Header />
                <div className={'mainCard'}>
                    <Nav/>
                    {topics.map(topic => (<Item topic={topic} key={topic.id}/>))}
                </div>
            </div>
        )
    }
}

export default Index