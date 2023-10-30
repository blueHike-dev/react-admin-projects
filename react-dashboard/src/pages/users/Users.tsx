import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "img",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "created At",
    type: "string",
    width: 150,
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    width: 80,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="users" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
