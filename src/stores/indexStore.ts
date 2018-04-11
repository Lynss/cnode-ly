import { action, observable, runInAction } from 'mobx'
import TopicStore from './topicStore'
import { apiTopics } from '../configs'
import * as fetch from 'isomorphic-fetch'

class IndexStore {
    @observable topics: Array<TopicStore> = []

    @action
    async init(): Promise<void> {
        const request = new Request(apiTopics + '?limit=10&page=1', {
            method: 'GET'
        })
        const rsp = await fetch(request)
        const rspData = await rsp.json()
        if (rspData.success) {
            runInAction(() => {
                this.topics = rspData.data
            })
        }
    }

    constructor() {
        this.init()
    }
}

export default IndexStore