import { OLD_PASSWORD,PASSWORD_CHANGE_SUCCESS} from './Types';


export const passwordChange = (password) =>{
    return{
        type: OLD_PASSWORD,
        payload: password
    }
}
export const changeSuccess = (bool) =>{
    return{
       type: PASSWORD_CHANGE_SUCCESS,
       payload: bool
    }
 }