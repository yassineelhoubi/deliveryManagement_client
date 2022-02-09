import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
interface props {
  setOpen: (val: boolean) => void,
  open: boolean,
  refetch: any
  belongsTo: string
}


const AlertUpdateDialog: React.FC<props> = ({ setOpen, open, refetch, belongsTo }) => {

  // ! GET TOKEN FROM STORE
  let token = useSelector((state: RootState) => state.user.token);
  let userId = useSelector((state: RootState) => state.manageUsers.value.id)


  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Update
          </DialogContentText>

          <Box
            component="form"

            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Disagree</Button>
          <Button onClick={() => { console.log("update") }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertUpdateDialog

function setError(err: any) {
  throw new Error('Function not implemented.');
}