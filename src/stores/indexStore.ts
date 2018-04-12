import { action, observable, runInAction } from 'mobx'
import Topic from '../models/topic'
import { apiTopics } from '../configs'
import * as fetch from 'isomorphic-fetch'

const asyncErrorHandler = (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
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
    @observable topics: Array<Topic> = []
    @asyncErrorHandler
    @action
    async loadData(tab: string): Promise<void> {
        const request = new Request(apiTopics + `?limit=10&page=1&tab=${tab}`, {
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
        this.loadData('ask')
    }
}

export default IndexStore