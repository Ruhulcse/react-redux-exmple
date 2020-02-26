import React, { Component } from 'react';
import FormKit from "react-bootstrap-formkit";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addNewUser,updateUser} from './data';


class AddUserForm extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            id :props.id,
            name : props.name || "",
            department : props.department || "",
            contact : props.contact || ""
        }
    }

    formGrid =
        [
            [
                {type: "text", label: "Name", key: "1", id: "name", name: "name", required: true},               
            ],
            [
                {type: "text", label: "Department", key: "2", id: "department", name: "department"},
            ],
            [
                {type: "text", label: "Contact", key: "3", id: "contact", name: "contact"},
            ]
        ]
    
    submitBtnInfo =
        {
            name: "Submit",
            className: "btn btn-outline-primary btn-md float-right"
        }

    handleSubmit = async data => {
        if(this.props.formOperation == "EDIT"){
            this.props.updateUser(this.props.id, data);
        }else{
            this.props.addNewUser(data);
        }
        };
    
    
    render() {
        return (
            <div>
                <FormKit
                    fields={this.formGrid}
                    submitButton = {this.submitBtnInfo}
                    onSubmit = {this.handleSubmit}
                    initialValue = {this.initialState}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      toogleAddUserFormStatus : state.userReducer.toogleEditUserFormStatus,
      formOperation : state.userReducer.formOperation
    }
  }

const mapDispatchToProps = dispatch => bindActionCreators({
    addNewUser: addNewUser,
    updateUser: updateUser
}, dispatch)

  
export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);

