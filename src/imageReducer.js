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
        case 'REQUESTED_IMAGE':
            return{
                url:'',
                loading:true,
                error:false
            };
        case 'REQUESTED_IMAGE_SUCCESS':
            return {
                url: action.url,
                loading: false,
                error: false
            };
        
        case 'REQUESTED_IMAGE_ERROR':
            return {
                url: '',
                loading: false,
                error: true
            };
            default:
            return state;
    }

}