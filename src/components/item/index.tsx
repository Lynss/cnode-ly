import * as React from 'react'
import './index.scss'
import Topic from '../../models/topic'

const Item = (props: {topic: Topic}) => (
    <div className={'itemComponent'}>
        <img src={props.topic.author.avatar_url} alt={'avatar'}/>
        <span>{'置顶'}</span>
        <div className={'main'}>
            <a className={'title'}>{props.topic.title}</a>
            <sup>
                <span>{props.topic.reply_count}</span>
                <span>/</span>
                <span>{props.topic.visit_count}</span>
            </sup>
        </div>
        <span>一天前</span>
    </div>
)

export default Item