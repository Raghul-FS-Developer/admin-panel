import "../style/datatable.scss";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, productColumns } from "./datatablesource";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import db from '../db'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Datatable({ title, link }) {
 



  const UserData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
     getData();
    }, []);
    const getData = async () => {
      const id= toast.loading("Fetching users")
      const res = await axios.get(`${db}getuser`);
      setData(res.data);
      if(res.status){
        toast.update(id,{isLoading:false,icon:"👍",autoClose:true})
      }
    };

    const nav = useNavigate();

    const handleDelete = async(id)=>{
    
      let res = await axios.delete(`${db}deleteuser/${id}`)
      console.log(res)
      if(res.status === 200){
        toast("Deleted successfully")
        getData()
      }

    }

    const handleEdit = async(id)=>{
     nav(`/users/${id}`)
    }

    const actionColumn = [
      {
        filed: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <div className="viewButton"onClick={()=>handleEdit(params.row._id)}>View</div>
              <div className="deleteButton"onClick={()=>handleDelete(params.row._id)}>Delete</div>
            </div>
          );
        },
      },
    ];

    return (
      <div className="datatable">
            <ToastContainer autoClose={500}/>
        <div className="datatableTitle">
          {title}
          <div className="dataAdd" onClick={() => nav(`/${link}/new`)}>
            Add New
          </div>
        </div>

        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    );
  };



  const ProductData = () => {
   
    const [data, setData] = useState([]);

    useEffect(() => {
      
      getData();
    }, []);
  
    const getData = async () => {
     const id= toast.loading("Fetching products")
      const res = await axios.get(`${db}getproduct`);
      setData(res.data);
      if(res.status){
        toast.update(id,{isLoading:false,icon:"👍",autoClose:true})
      }
    };

    const nav = useNavigate();


    const handleDelete = async(id)=>{

      let res = await axios.delete(`${db}deleteproduct/${id}`)

      if(res.status === 200){
        toast("Deleted successfully")
        getData()
      }

    }
    const handleEdit = async(id)=>{
      nav(`/products/${id}`)
     }

    const actionColumn = [
      {
        filed: "id",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <div className="viewButton" onClick={()=>handleEdit(params.row._id)}>View</div>
              <div className="deleteButton"onClick={()=>handleDelete(params.row._id)}>Delete</div>
            </div>
          );
        },
      },
    ];

    return (
      <div className="datatable">
        <ToastContainer autoClose={500}/>
        <div className="datatableTitle">
          {title}
          <div className="dataAdd" onClick={() => nav(`/${link}/new`)}>
            Add New
          </div>
        </div>

        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={productColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />

      </div>
    );
  };
 
  return (
    <>
{title == 'Add New User' ?
      <UserData/>:<ProductData />}
    </>
  );
}

export default Datatable;
