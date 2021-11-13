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
import { Box } from '@mui/system';


export default function MyOrders() {
  const {user}=useAuth()
  const [myOrders,setMyOrders]=React.useState([])

  // load my orders product data from data base
  React.useEffect(()=>{
    const url=`https://serene-brushlands-06959.herokuapp.com/orderProducts?email=${user.email}`
    axios.get(url)
      .then(res => {
         setMyOrders(res.data)
      })
  },[user.email])


  // handle order cancel button
  const handleCancel=(id)=>{
     const isCancel=window.confirm('Are you sure CANCEL this order')
     if(isCancel){
          const url=`https://serene-brushlands-06959.herokuapp.com/orderProducts/${id}`
          axios.delete(url)
              .then(res => {
                if(res.data.deletedCount>0){
                  alert('Delete order successfully')
                  const filterdOrders=myOrders.filter(order=> order._id !== id)
                  setMyOrders(filterdOrders)
                }
              })
     }
  }


  // console.log(myOrders)
  return (
    <Box sx={{Width:'100%'}}>
        <TableContainer component={Paper} sx={{maxWidth:'100%'}}>
          <Table aria-label="simple table" >
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
                    sx={{color:'success.main', fontWeight:'bold'}}
                    >Shipping
                    </Typography>}
                    </TableCell>
                  <TableCell align="right">
                    <Button 
                    onClick={()=>handleCancel(row._id)}
                    variant='contained' 
                    color='warning'
                    >cancel</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Box>
  );
}
