import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button, Rating } from '@mui/material';
import { Box } from '@mui/system';
import { useHistory } from 'react-router';


export default function ManageProducts({url}) {
    const [products,setProducts] =React.useState([])
    const history = useHistory()


 // getting all products data from database
    React.useEffect(()=>{
        const url=`http://localhost:5000/products`
        axios.get(url)
            .then(res =>{
                setProducts(res.data)
            })
    },[])


    // handle order cancel button
    const handleDelete=(id)=>{
      const isCancel=window.confirm('Are you sure DELETE product ?')
      if(isCancel){
            const url=`http://localhost:5000/products/${id}`
            axios.delete(url)
                .then(res => {
                  if(res.data.deletedCount>0){
                    alert('Delete order successfully')
                    const filterdOrders=products.filter(order=> order._id !== id)
                    setProducts(filterdOrders)
                  }
                })
      }
    }
  

    // handle update button
    const handleUpdate =(id)=>{
       history.push(`${url}/manageProductDetails/${id}`)
    }


//   console.log(allOrders)
  return (
     <Box>
          <TableContainer component={Paper} sx={{m:3, maxWidth:'80%'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Image</TableCell>
                  <TableCell align="left">Product Name</TableCell>
                  <TableCell align="right">Product Price</TableCell>
                  <TableCell align="right">Rating</TableCell>
                  <TableCell align="right">Update Product</TableCell>
                  <TableCell align="right">Delete Product</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                    <img src={row.img} height='90px' alt="" />
                    </TableCell>
                    <TableCell align="left" sx={{fontWeight:'bold'}}>{row.name}</TableCell>
                    <TableCell align="left">{row.price} $</TableCell>
                    <TableCell align="left">
                    <Rating name="read-only" value={row.rating} readOnly />
                    </TableCell>
                    <TableCell align="right">
                      <Button 
                      onClick={()=>handleUpdate(row._id)}
                      variant='contained' 
                      color='warning'
                      >update</Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button 
                      onClick={()=>handleDelete(row._id)}
                      variant='contained' 
                      color='error'
                      >delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
     </Box>
  );
}
