import  {UPDATE_PROFILE, UPDATE_USER_PROFILE_SUCCESS} from './Types';

export const updateProfile = (name) =>{
   return{
    type: UPDATE_PROFILE,
    payload: name
   }
}
export const successProfile = (bool) =>{
   return{
      type: UPDATE_USER_PROFILE_SUCCESS,
      payload: bool
   }
}