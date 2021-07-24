// import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { deleteEmployee } from "../redux/user/user.action";
import { Link } from 'react-router-dom'

const UserRowHome = ({ id, name,deleteEmployees }) => {
  const deleteuser = () => {
    deleteEmployees(id)
  }
  return (
    <tr key={id}>
      <td className="px-6">{id}</td>
      <td className=" flex justify-between ">
        <p className="">{name}</p>
        <span className=" space-x-2 flex">
          <Link to="/view" className="border-2 rounded-lg px-1 active:bg-gray-200">view</Link>
          <Link to={`/edit:${id}`}><button className="border-2 bg-yellow-200 active:bg-yellow-500  rounded-lg px-1">edit</button></Link>
          <button onClick={deleteuser} className="border-2 rounded-lg bg-red-500 active:bg-red-800 px-1" >delete</button>
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteEmployees: (id) => dispatch(deleteEmployee({id})),
});


export default connect( null,mapDispatchToProps)(UserRowHome);