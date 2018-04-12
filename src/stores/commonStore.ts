import { action, observable } from 'mobx';

class CommonStore {
    @observable
    currentTab = 'ask'
    @action
    changeTab = (tab: string) => {
        this.currentTab = tab
    }
}

export default CommonStore