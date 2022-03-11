import el from "element-ui/src/locale/lang/el";
import current from "element-ui/packages/table/src/store/current";

export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null
    },
    mutations: {
        collapseMenu(state){
            // console.log(state.isCollapse);
            state.isCollapse = !state.isCollapse;
        },
        selectMenu(state,val) {
            if(val.name !== 'home'){
                console.log(state.tabsList)
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1){
                    state.tabsList.push(val);
                }else {
                    state.currentMenu = null
                }
            }
        },
        closeTag(state,val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result,1)
        }
    }
}