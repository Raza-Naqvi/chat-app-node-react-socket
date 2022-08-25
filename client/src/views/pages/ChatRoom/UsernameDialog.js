import React, { useState } from "react";
import {
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog
} from "@mui/material";

function UsernameDialog({ username, setUsername }) {

  const [user, setUser] = useState("");

  return (
    <Dialog open={!username}>
      <DialogTitle>Please enter your username</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          variant="standard"
          fullWidth
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setUsername(user)}>Enter Chat Room</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UsernameDialog;