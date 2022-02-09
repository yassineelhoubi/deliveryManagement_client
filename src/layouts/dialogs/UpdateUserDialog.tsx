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
import useFetch from '../../Redux/services/utils/useFetch';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"
interface props {
  setOpen: (val: boolean) => void,
  open: boolean,
  refetch: any
  belongsTo: string
}


const AlertUpdateDialog: React.FC<props> = ({ setOpen, open, refetch, belongsTo }) => {

  let data = useSelector((state: RootState) => state.manageUsers.value)


  // ! GET TOKEN FROM STORE
  let token = useSelector((state: RootState) => state.user.token);

  const formik = useFormik({
    initialValues: {
      username: data.username,
      email: data.email,
    },
    validationSchema: Yup.object({
      username: Yup.string().min(5, 'username must be more than 5 characters').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    enableReinitialize: true,
    onSubmit: (values: any) => {
      console.log(values)
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      let url = "";
      if (belongsTo == "managers") {
        url = `http://localhost:3000/api/admin/updateManager/${data._id}`
      }
      axios.patch(url, values, config)
        .then(res => {
          setOpen(!open)
        }).catch((err) => {
          setError(err)
        })
    }
  })

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
            onSubmit={formik.handleSubmit}
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
              label="Email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? <div className="text-red-400 ">{formik.errors.email}</div> : null}
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="UserName"
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? <div className="text-red-400 ">{formik.errors.username}</div> : null}

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

        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertUpdateDialog

function setError(err: any) {
  throw new Error('Function not implemented.');
}