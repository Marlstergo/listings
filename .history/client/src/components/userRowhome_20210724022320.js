import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { deleteEmployee } from "../redux/user/user.action";

const UserRowHome = ({ id, name,deleteEmployees }) => {
  
  return (
    <tr>
      <td className="px-6">{id}</td>
      <td className=" flex justify-between ">
        <p className="">{name}</p>
        <span className=" space-x-2 flex">
          <a href="/view" className="border-2 rounded-lg px-1 active:bg-gray-200">view</a>
          <button className="border-2 bg-yellow-200 active:bg-yellow-500  rounded-lg px-1">edit</button>
          <button className="border-2 rounded-lg bg-red-500 active:bg-red-800 px-1" onClick={() => {axios.delete(`http://localhost:8090/users/${id}`)}}>delete</button>
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteEmployees: (id) => dispatch(deleteEmployee(id)),
});


export default connect( null,mapDispatchToProps)(UserRowHome);
