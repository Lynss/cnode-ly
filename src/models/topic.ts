import { Author, Reply } from './interfaces/interfaces'

class Topic {
     id: string
     author_id: string
     tab: string
     content: string
     title: string
     ups: Array<string>
     create_at: string
     last_reply_at?: string
     reply_id: string
     good = false
     top = false
     reply_count = 0
     visit_count = 0
     author: Author
     replies: Array<Reply>
     is_uped: boolean
}

export default Topic