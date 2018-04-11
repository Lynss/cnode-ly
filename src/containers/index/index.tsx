import * as React from 'react'
import './index.scss'
import { inject, observer } from 'mobx-react'
import Header from '../../components/header'
import Nav from '../../components/nav'
import Item from '../../components/item'
import TopicStore from '../../stores/topicStore'

interface IndexProps {
    topics: Array<TopicStore>
}

interface Store {
    index: {
        topics: Array<TopicStore>
    }
}

@inject((stores: Store) => ({
    topics: stores.index.topics
}))
@observer
class Index extends React.Component<IndexProps, {}> {
    render() {
        const {topics} = this.props
        return (
            <div className={'indexContainer'}>
                <Header/>
                <div className={'mainCard'}>
                    <Nav/>
                    {topics.map(topic => (<Item topic={topic}/>))}
                </div>
            </div>
        )
    }
}

export default Index