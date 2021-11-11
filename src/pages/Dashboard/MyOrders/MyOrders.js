import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { Button, Typography } from '@mui/material';


export default function MyOrders() {
  const {user}=useAuth()
  const [myOrders,setMyOrders]=React.useState([])

  // load my orders product data from data base
  React.useEffect(()=>{
    const url=`http://localhost:5000/orderProducts?email=${user.email}`
    axios.get(url)
      .then(res => {
         setMyOrders(res.data)
      })
  },[user.email])

  console.log(myOrders)
  return (
    <TableContainer component={Paper} sx={{m:3, maxWidth:'95%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <img src={row.ProductImg} height='60px' alt="" />
              </TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.price} $</TableCell>
              <TableCell align="right">
                {row.status==='painding'? <Typography 
                variant='body1' 
                sx={{color:'warning.main'}}
                >Pending</Typography>:<Typography 
                variant='body1' 
                sx={{color:'success.main'}}
                >Approved</Typography>}
                </TableCell>
              <TableCell align="right">
                <Button variant='contained' color='warning'>cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
