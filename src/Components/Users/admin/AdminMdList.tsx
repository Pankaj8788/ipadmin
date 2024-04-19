// import React from "react";

// export default function AdminMdList() {
//   return <div>AdminMdList</div>;
// }

import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminMdList() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const headers = {
          "Content-Type": "application/json",
          Authorization: token,
        };
        const response = await axios.get(
          "http://localhost:5000/api/auth/adminmds",
          {
            headers: headers,
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (itemId: any) => {
    try {
      const token = localStorage.getItem("jwt");
      const headers = {
        "Content-Type": "application/json",
        Authorization: token,
      };
      await axios.delete(
        `http://localhost:8080/api/delete/superdistributor/${itemId}`,
        {
          headers: headers,
        }
      );
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item deleted successfully",
    });
  };
  const handleEdit = async (itemId: any) => {
    try {
      const token = localStorage.getItem("jwt");
      const headers = {
        "Content-Type": "application/json",
        Authorization: token,
      };
      await axios.put(
        `http://localhost:8080/api/update/channelpartner/${itemId}`,
        {
          headers: headers,
        }
      );
      console.log("Item updated successfully");
    } catch (error) {
      console.error("Error updating item:", error);
    }
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Item updated successfully",
    });
  };

  return (
    <section className="main container w-full flex flex-col !gap-6 my-8 h-[calc(100vh-9rem)]">
      <div className="w-full flex justify-start items-center gap-12">
        <div className=" h-32 ">
          <p className="items-start mb-5 font-semibold text-sm">User name</p>
          <TextField
            type="text"
            className="w-72 bg-white ml-6"
            placeholder="Username/Outlet/Pancard Name"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </div>

        <div className=" h-32 ">
          <p className="item-start mb-5 font-semibold text-sm">Location</p>
          <TextField
            type="number"
            className="w-72 bg-white ml-6"
            placeholder="%"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </div>

        <div className=" h-32 ">
          <p className="mb-5 font-semibold text-sm">Created By:</p>
          <select name=" " id="" className="w-72 bg-white h-10 rounded-md mb-2">
            <option value="">Select dealer</option>
          </select>
          <div className="w-full gap-6">
            <span className="flex items-center justify-center gap-8 mb-5">
              <input type="checkbox" />
              <p className="text-black items-center opacity-15">
                Search Direct Downline only
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-start gap-6 ">
        <button
          type="button"
          className="rounded-md bg-themeColor px-4 py-3 text-sm"
        >
          {" "}
          SEARCH
        </button>

        <button
          type="button"
          className="bg-themeColor rounded-md px-4 py-3 text-sm"
        >
          {" "}
          EXPORT
        </button>
      </div>

      <div className="">
        <p className="text-black font-bold">Registered Channal Partner</p>
      </div>

      <div className="w-full flex flex-col items-start justify-start mt-8">
        <TableContainer component={Paper}>
          <Table aria-label="Registered Channal partner">
            <TableHead>
              <TableRow>
                <TableCell>Sl No.</TableCell>
                <TableCell>User Id</TableCell>
                <TableCell>Parent ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Outlet Name</TableCell>
                <TableCell>Adhar number</TableCell>
                <TableCell>Gstin</TableCell>
                <TableCell>Date Of Birth</TableCell>
                <TableCell>Pancard Number</TableCell>
                <TableCell>Bank Account Number</TableCell>
                <TableCell>IFSC</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Alternate Number</TableCell>
                <TableCell>State</TableCell>
                <TableCell>District</TableCell>
                <TableCell>City</TableCell>
                <TableCell>PIN code</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Creted Date</TableCell>
                <TableCell>User Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            {data.map((item: any, index: number) => (
              <TableBody>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.user_id}</TableCell>
                <TableCell>{item.parent_id}</TableCell>

                <TableCell>
                  {" "}
                  {item.name + " " + item.middle_name + " " + item.last_name}
                </TableCell>
                <TableCell>{item.outlet_name}</TableCell>
                <TableCell>{item.aadharcard_number}</TableCell>
                <TableCell>{item.gstin}</TableCell>
                <TableCell>{item.date_of_birth}</TableCell>
                <TableCell>{item.pancard_number}</TableCell>
                <TableCell>{item.bank_account_number}</TableCell>
                <TableCell>{item.ifsc}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile_number}</TableCell>
                <TableCell>{item.alternate_number}</TableCell>
                <TableCell>{item.state}</TableCell>
                <TableCell>{item.district}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.pin_code}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.created_at}</TableCell>
                <TableCell>{item.user_Type}</TableCell>
                <TableCell>Active</TableCell>

                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </div>
    </section>
  );
}
