import {delete_user, get_all_user,add_user, open_add_user_form} from './action'

export const getAllUsers = () => {
    return (dispatch) => {
      fetch(`http://localhost:7001/user`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if(res.error){
              console.log(res.error);
              throw res.error;
          }else{
              dispatch(get_all_user(res))
          }
        })
    }
  }

export const addNewUser = (data) => {
    console.log(data);
    return (dispatch) => {
        fetch(`http://localhost:7001/user`,{
            method : 'POST',
            headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.error){
                console.log(res.error);
                throw res.error;
            }else{
                alert("Data inserted successfully!!");
                data.id = res.id[0];
                dispatch(add_user(data));
                dispatch(open_add_user_form(false));
            }
        })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
      fetch(`http://localhost:7001/user/${id}`,{
          method : 'DELETE'
      })
        .then(res => res.json())
        .then(res => {
          if(res.error){
              console.log(res.error);
              throw res.error;
          }else{
              alert("Requested entry is deleted form server.")
              dispatch(delete_user(id));
          }
          
        })
    }
  }

export const toggleAddUserForm = (data) => {
    return dispatch => {
        dispatch(open_add_user_form(data));
    }
}