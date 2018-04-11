import { action, observable, runInAction } from 'mobx'
import TopicStore from './topicStore'
import { apiTopics } from '../configs'
import * as fetch from 'isomorphic-fetch'

const asyncMethod = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const func = descriptor.value
    return {
        get() {
            return (...args: any[]) => {
                return Promise.resolve(func.apply(this, args)).catch(error => {
                    console.log(error.message)
                })
            }
        },
        set(newValue: any) {
            return newValue
        }
    }
}

class IndexStore {
    @observable topics: Array<TopicStore> = []

    @asyncMethod
    @action
    async init(): Promise<void> {
        const request = new Request(apiTopics + '?limit=10&page=1', {
            method: 'GET'
        })
        const rsp = await fetch(request)
        const rspData = await rsp.json()
        // throw new Error('test')
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