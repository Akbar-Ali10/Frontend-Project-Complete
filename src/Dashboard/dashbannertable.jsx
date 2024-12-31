import React, { useEffect, useState } from "react";
import axios from "axios";

function  Dashbannertable() {
  const [data, setdata] = useState([]);
  const [formdata, setformdata] = useState({ heading: "", paragraph: "" });
  const [editid, seteditid] = useState(null);

  const dashboard = async () => {
    try {
      const response = await axios.get("https://676cd4150e299dd2ddfd93e9.mockapi.io/dashboard");
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const addbanner = async () => {
    if (!formdata.heading || !formdata.paragraph) {
      alert("Please fill out both fields before adding.");
      return;
    }

    try {
      await axios.post("https://676cd4150e299dd2ddfd93e9.mockapi.io/dashboard", formdata);
      console.log("New Banner Added", formdata);
      setformdata({ heading: "", paragraph: "" });
      dashboard();
    } catch (error) {
      console.error("Error adding banner:", error);
    }
  };

  const updatebanner = async () => {
    if (!formdata.heading || !formdata.paragraph) {
      alert("Please fill out both fields before updating.");
      return;
    }

    try {
      await axios.put(`https://676cd4150e299dd2ddfd93e9.mockapi.io/dashboard/${editid}`, formdata);
      console.log("Banner Updated", formdata);
      setformdata({ heading: "", paragraph: "" });
      seteditid(null);
      dashboard();
    } catch (error) {
      console.error("Error updating banner:", error);
    }
  };


  const deleteBanner = async (id) => {
    try {
      await axios.delete(`https://676cd4150e299dd2ddfd93e9.mockapi.io/dashboard/${id}`);
      console.log("Banner Deleted", id);
      dashboard();
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };


  useEffect(() => {
    dashboard();
  }, []);

  return (
    <>
      <div className="table-main">
        <table>
          <thead>
            <tr>
              <th colSpan="2">{editid ? "Edit Banner" : "Add New Banner"}</th>
            </tr>
            <tr>
              <th>Heading</th>
              <th>Paragraph</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="form">
              <td>
                <input type="text" placeholder="Enter Heading" name="heading" value={formdata.heading} onChange={handlechange} />
              </td>
              <td>
                <input type="text" placeholder="Enter Paragraph" name="paragraph" value={formdata.paragraph} onChange={handlechange} />
              </td>
              <td>
                <button onClick={editid ? updatebanner : addbanner}> {editid ? "Update" : "Add"}</button>
              </td>
            </tr>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.heading}</td>
                <td>{item.paragraph}</td>
                <td>
                  <button onClick={() => {
                    seteditid(item.id); setformdata({ heading: item.heading, paragraph: item.paragraph });
                  }}>Edit</button>
                  <button onClick={() => deleteBanner(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashbannertable;
