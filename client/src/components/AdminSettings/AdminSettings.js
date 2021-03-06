import React, { Component } from "react";
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import "./style.css";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class UserSetting extends Component {
  state = {
    name: "",
    address: "",
    contactName: "",
    contactNumber: "",
    website: "",
    imageLink: "",
    description: ""
  };

  // handle input values
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  // handle settings submit
  handleFormSubmit(event) {
    event.preventDefault();
    let update = this.state;
    let original = this.props.userinfo
    let updatedInfo = {
      _id: this.props.userinfo._id,
      name: update.name || original.name,
      address: update.address || original.address,
      contactName: update.contactName || original.contactName,
      contactNumber: update.contactNumber || original.contactNumber,
      website: update.website || original.website,
      imageLink: update.imageLink || original.imageLink,
      description: update.description || original.description
    };
    console.log(updatedInfo);
    if (updatedInfo) {
      axios
        .put("/api/update/nonprofit/" + this.props.userinfo._id, updatedInfo)
        .then(alert('Settings have been updated!'))
        .catch(err => console.log(err));
    } else {
      alert("this is wrong");
    }
  }

  render() {
    const user = this.props.userinfo;

    return (
      <div>
        <Paper className="genBox" >
          <div className="row container">
            {/* NonProfit Name */}
            
            <h5>NonProfit</h5>
            <div className="col s12 m6 input-field ">
              <i className="material-icons prefix">keyboard_arrow_right</i>
              <input
                placeholder={user.name}
                id="user_name"
                type="text"
                className="validate"
                onChange={this.handleChange("name")}
              />
            </div>
            {/* Website */}
            <div className="col s12 m6 input-field ">
              <i className="material-icons prefix">desktop_mac</i>
              <input
                placeholder={user.website}
                label="website"
                type="text"
                className="validate"
                onChange={this.handleChange("website")}
              />
            </div>
          </div>


          <div className="row container">
            <h5>Contact Info:</h5>
            {/* Contact Name */}
            <div className="col s12 m6 input-field">
              <i className="material-icons prefix">account_circle</i>
              <input
                placeholder={user.contactName}
                id="contact_name"
                label="contact Name"
                type="text"
                className="validate"
                onChange={this.handleChange("contactName")}
              />
            </div>

            {/* Contact Number */}
            <div className="col s12 m6 input-field">
              <i className="material-icons prefix">local_phone</i>
              <input
                placeholder={user.contactNumber}
                label="contact Number"
                type="tel"
                className="validate"
                onChange={this.handleChange("contactNumber")}
              />
            </div>
             {/* Address */}
            <div className="col s12 input-field">
              <i className="material-icons prefix">location_on</i>
              <input
                placeholder={user.address}
                label="address"
                type="text"
                className="materialize-textarea"
                onChange={this.handleChange("address")}
              />
            </div>
          </div>

          <div id="formContact" className="row container">
          <h5>Image and Description:</h5>
            {/* Image Link */}
            <div className="col s12 input-field">
              <i className="material-icons prefix">image</i>
              <input
                placeholder={user.imageLink}
                label="image link"
                type="text"
                className="validate"
                onChange={this.handleChange("imageLink")}
              />
            </div>
            {/* Description */}
            <div className="col s12 input-field">
              <i className="material-icons prefix">mode_edit</i>
              <textarea rows="10"
                placeholder={user.description}
                label="description"
                type="text"
                className="materialize-textarea"
                onChange={this.handleChange("description")}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="btnDiv">
            <Button
              onClick={this.handleFormSubmit.bind(this)}
              variant="outlined"
              size="large"
            >
              Submit
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}
export default UserSetting;
