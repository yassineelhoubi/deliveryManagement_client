import { Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import TableData from '../../layouts/TableData'
import useFetch from '../../Redux/services/utils/useFetch'
// interface Manager {
//   email: string,
//   role: string,
//   username: string
// }
// // interface Manager {
// //   name?: string;
// //   code?: string;
// //   test?: string;
// // }
// // interface DataManager {
// //   data: Manager[]
// //   // column: Column[]
// // }
interface Column {
  id: 'name' | 'test';
  label: string;

}

// interface data {
//   name?: string;
//   code?: string;
//   test?: string;
// }

// interface Props {
//   data : data[]
//   columns : Column[]
// }
const ReadManagers: FC = () => {


  const [data, setData] = useState([]);

  const { error, isPending } = useFetch("http://localhost:3000/api/admin/getAllManagers", setData);

  useEffect(() => {
    console.log("this is data :", data)
  }, [data])



// const x:string = "a"
  const columns: Column[] = [
    { id: 'name', label: 'Name' },
    { id: 'test', label: 'ISO\u00a0Code', }
  ]
  return <div>
    <Typography variant="h4" gutterBottom component="div">
      Managers
    </Typography>

    <div className="mt-6">

      <TableData data={data} columns={columns} />
    </div>
  </div>;
};

export default ReadManagers;
