interface Author {
    loginname: string
    avatar_url?: string
}

interface Reply {
    id: string
    author: Author
    content: string
    create_at: string
    reply_id?: string
    is_uped: false
    ups: Array<string>
}