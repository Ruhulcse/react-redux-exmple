import {
     delete_user,
     get_all_user,
     add_user,
     get_single_user,
     update_user,
     open_add_user_form,
     change_form_operation,
    } from './action'

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

export const getSingleUser = (id) => {
    return (dispatch) => {
        dispatch(get_single_user([]));
        dispatch(open_add_user_form(false));
        fetch(`http://localhost:7001/user/${id}`)
          .then(res => res.json())
          .then(res => {
            console.log(res);
            if(res.error){
                console.log(res.error);
                throw res.error;
            }else{
                dispatch(get_single_user(res[0]));
                dispatch(open_add_user_form(true));
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

export const updateUser = (id, data) => {
    console.log(id);
    return function(dispatch) {
        fetch('http://localhost:7001/user/'+id, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'accept':'application/json',
                'content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res.error){
                console.log(res.error);
                throw res.error;
            }else{
                alert("Requested entry has been modified.")
                dispatch(update_user(data));
            }
        });
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

 
export const changeFormOperation = (data) => {
    return dispatch => {
        dispatch(change_form_operation(data));
    }
}