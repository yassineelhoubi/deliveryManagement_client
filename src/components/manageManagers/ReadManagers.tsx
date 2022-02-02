import { Typography } from '@mui/material';
import { FC } from 'react';
import TableData from '../../layouts/TableData'
const ReadManagers: FC = () => {
  return <div>
    <Typography variant="h4" gutterBottom component="div">
      Managers
    </Typography>

    <div className="mt-6">

    <TableData />
    </div>
  </div>;
};

export default ReadManagers;
