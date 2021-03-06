import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getAllUsers,deleteUser,getSingleUser,updateUser,toggleAddUserForm,changeFormOperation} from './data';
import AddUserForm from './formkit';


export class Show extends Component {

componentDidMount() {
    this.props.getAllUsers()
 }

render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    { this.props.toogleAddUserFormStatus &&
                        <AddUserForm id={this.props.singleUser.id} name={this.props.singleUser.name} contact = {this.props.singleUser.contact} department = {this.props.singleUser.department}/>
                    }
                </div>
            </div>
            <div className="row">
                <button className="btn btn-outline-primary btn-md" onClick={()=> {
                        this.props.toggleAddUserForm(!this.props.toogleAddUserFormStatus);
                    }}>Add User</button>
            </div>
            <div className="row">
            <table className="table table-striped mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(user => {
                        return(
                            <React.Fragment>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.department}</td>
                                    <td>{user.contact}</td>
                                    <td>
                                        <button className="btn btn-outline-primary btn-md" onClick={()=>{
                                            this.props.changeFormOperation("EDIT");
                                            this.props.getSingleUser(user.id)}}>Update
                                        </button>
                                    </td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>{this.props.deleteUser(user.id)}}>Delete</button></td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      users: state.userReducer.users,
      singleUser: state.userReducer.singleUser,
      usersLoading : state.userReducer.usersLoading,
      toogleAddUserFormStatus: state.userReducer.toogleAddUserFormStatus,
      formOperation : state.userReducer.formOperation
    }
  }

const mapDispatchToProps = dispatch => bindActionCreators({ 
    getAllUsers: getAllUsers,
    deleteUser : deleteUser,
    updateUser : updateUser,
    getSingleUser : getSingleUser,
    toggleAddUserForm : toggleAddUserForm,
    changeFormOperation : changeFormOperation
}, dispatch)

  
export default connect(mapStateToProps, mapDispatchToProps)(Show);
