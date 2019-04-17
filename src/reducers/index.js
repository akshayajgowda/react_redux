const reducer = (state ={say:'i am Akshay'},action)=>{
    switch(action.type){
        case 'addMe': 
        return {say:'no im rudra'};       
        default:
        return state;
    }
}

   export default reducer;