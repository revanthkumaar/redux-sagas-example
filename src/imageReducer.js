//DEFINING THE INITIATE STATE OF THE ENTIRE APP
const initialState = {
    url:'',
    loading:false,
    error:false
}


//REDUCER 

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'FETCHED_IMAGE':
            return{

            };

        default:
            return state;
    }

}