export const info = {
    namespaced: true,
    state: {
        account:'',
        accountHashMap:'',
        avatarUrl:'',
        name:'',
        areaFocus:'',
        eMail:'',
    },
    mutations: {
        setAccount(state,newAccount){
            state.account=newAccount;
        },
        setAccountHashMap(state,newAccountHashMap){
            state.accountHashMap=newAccountHashMap;
        },
        setAvatarUrl(state,newAvatarUrl){
            state.avatarUrl=newAvatarUrl;
        },
        setName(state,newName){
            state.name=newName;
        },
        setAreaFocus(state,newAreaFocus){
            state.areaFocus=newAreaFocus;
        },
        setEMail(state,newEMail){
            state.eMail=newEMail;
        }
    },
    actions: {

    },
    getters: {

    }
};
