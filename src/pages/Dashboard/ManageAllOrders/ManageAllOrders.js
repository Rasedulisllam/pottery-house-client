import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


export default function ManageAllOrders() {
  const {user}=useAuth()
  const [allOrders,setAllOrders]=React.useState([])

  // load All orders product data from data base
  React.useEffect(()=>{
    const url=`https://serene-brushlands-06959.herokuapp.com/orderProducts`
    axios.get(url)
      .then(res => {
         setAllOrders(res.data)
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
                  const filterdOrders=allOrders.filter(order=> order._id !== id)
                  setAllOrders(filterdOrders)
                }
              })
     }
  }

    //  handle approved button
    const handleAproved=(id)=>{
        const url=`https://serene-brushlands-06959.herokuapp.com/orderProducts/${id}`
        axios.put(url)
            .then(res => {
              if(res.data.modifiedCount>0){
                alert('Order Approved')
                const updatedOrders= allOrders.filter(order => {
                    if(order._id===id){
                        order.status='approved'
                    }
                    return order;
                })
                setAllOrders(updatedOrders)
              }
            })
    }  


//   console.log(allOrders)
  return (
    <TableContainer component={Paper} sx={{ maxWidth:'98%'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Product Price</TableCell>
            <TableCell align="left">User Email</TableCell>
            <TableCell align="left">User Name</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <img src={row.ProductImg} height='60px' alt="" />
              </TableCell>
              <TableCell align="left">{row.productName}</TableCell>
              <TableCell align="left">{row.price} $</TableCell>
              <TableCell align="left"  sx={{color:'info.main'}}>{row.email}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="right">
                {row.status==='painding'? <Button 
                onClick={()=>handleAproved(row._id)}
                variant='contained' 
                color='info'
                >aprove</Button>:<Typography 
                variant='body1' 
                sx={{color:'success.main', fontWeight:'bold'}}
                >Shipping</Typography>}
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
  );
}
