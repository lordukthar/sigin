import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function AlignItemsList() {

  const users = useSelector((state) => state.usersReducer)
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {users.map((user) => (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user.name}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}

      
      </List>
    </div>
  );
}
