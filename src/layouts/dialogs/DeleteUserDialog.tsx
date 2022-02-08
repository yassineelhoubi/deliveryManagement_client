import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
interface props {
  setOpen: (val: boolean) => void,
  open: boolean,
  userId: string
  refetch: any
  belongsTo:string
}


const AlertDialog: React.FC<props> = ({ setOpen, open, userId, refetch ,belongsTo}) => {

  // ! GET TOKEN FROM STORE
  let token = useSelector((state: RootState) => state.user.token);

  const deleteUser = (id: string) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    let url = "";
    if(belongsTo == "managers"){
      url = `http://localhost:3000/api/admin/removeManager/${id}`
    }
    axios.delete(url, config)
      .then((res) => {
        console.log(res.data)
        refetch((previous: any) => previous.filter((user: any) => user._id !== id))
      })
      .catch((err) => {
        setError(err)
      })
    setOpen(!open)
  }

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
            Are you sure you want delete it ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Disagree</Button>
          <Button onClick={async () => { deleteUser(userId) }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialog

function setError(err: any) {
  throw new Error('Function not implemented.');
}