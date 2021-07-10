import React,{useState,useEffect} from 'react';
import Footer from '../layout/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Home = () => {
    const [users,setUser]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result =await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    }

    const deleteUser=async id=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1 style={{textAlign:"center"}}>Clients list👇</h1>
                <br/>
                <Table striped bordered hover variant="dark" border shadow>
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>User Name</th>
      <th>E-mail</th>
      <th style={{ paddingLeft: '10rem' }}>Action</th>

    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
                <th scope="row">{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link class="btn btn-primary" style={{ marginRight: '2rem' }} to={`/users/${user.id}`}>View</Link>
                        <Link class="btn btn-outline-primary" style={{ marginRight: '2rem' }} to={`/users/edit/${user.id}`}>Edit</Link>
                        <Link class="btn btn-danger mr-2" style={{ marginRight: '2rem' }} onClick={()=>deleteUser(`${user.id}`)}>Delete</Link>
                    </td>
            </tr>
        ))
    }
  </tbody>
</Table>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
