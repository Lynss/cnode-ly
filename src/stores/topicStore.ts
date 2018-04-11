import { observable } from 'mobx'

class TopicStore {
    @observable id: string
    @observable author_id: string
    @observable tab: string
    @observable content: string
    @observable title: string
    @observable ups: Array<string>
    @observable create_at: string
    @observable last_reply_at?: string
    @observable reply_id: string
    @observable good = false
    @observable top = false
    @observable reply_count = 0
    @observable visit_count = 0
    @observable author: Author
    @observable replies: Array<Reply>
    @observable is_uped: boolean
}

export default TopicStore