import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import NestedList from "./ExpandList";

class MenuList extends Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  
  render() {
    return (
      <div>
        <List>
          <ListItem
            button={true}
            name="dashboard"
            value="dashboard"
            onClick={this.props.showContent}
          >
            <ListItemIcon value="dashboard">
              <SendIcon value="dashboard" />
            </ListItemIcon>
            Dashboard
          </ListItem>

          <ListItem
            button={true}
            name="settings"
            value="settings"
            onClick={this.props.showContent}
          >
            <ListItemIcon value="settings">
              <SendIcon value="settings" />
            </ListItemIcon>
            Settings
          </ListItem>

          <ListItem
            button={true}
            name="raffles"
            value="raffles"
            onClick={this.props.showContent}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            Raffles
          </ListItem>
        </List>
        <NestedList />
      </div>
    );
  }
}
export default MenuList;
