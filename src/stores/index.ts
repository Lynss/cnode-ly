import IndexStore from './indexStore'
import CommonStore from './commonStore';

export default {
    index: new IndexStore(),
    common: new CommonStore(),
}