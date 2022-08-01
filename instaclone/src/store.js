import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            name : 'kim',
            age: 20,
            likes : 30,
            isLiked : false,  
            more : {

            },
        }
    },
    mutations : {
        Changeage(state,payload){
            state.age+= payload;
        },
        likeit(state){
            if(!state.isLiked){
                state.likes++;
                state.isLiked=true;
            }
            
            else{
                state.likes--;
                state.isLiked = false;
            }
        },
        setMore(state, data){
            state.more = data
        }
    },
    actions : {
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((a)=> {
                console.log(a.data);
                context.commit('setMore', a.data);
            })
        }
    },
})

export default store;