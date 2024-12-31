// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Dashtestimonialtable() {
//   const [data, setdata] = useState([]);
//   const [formdata, setformdata] = useState({ paragraph: "", heading: "" });
//   const [editid, seteditid] = useState(null);

//   const testimonial = async () => {
//     try {
//       const response = await axios.get("https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial");
//       setdata(response.data);
//     } catch (error) {
//       console.error("Error fetching testimonial:", error);
//     }
//   };

//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setformdata({ ...formdata, [name]: value });
//   };

//   const addtestimonial = async () => {
//     if (!formdata.paragraph || !formdata.heading) {
//       alert("Please fill out both fields before updating.");
//       return;
//     }

//     try {
//       await axios.post("https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial", formdata);
//       console.log("New Testimonial Added", formdata);
//       setformdata({ paragraph: "", heading: "" });
//       // Fetch updated data
//       const response = await axios.get("https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial");
//       setdata(response.data);
//     } catch (error) {
//       console.error("Error adding testimonial:", error);
//     }
//   };

//   const updatetestimonial = async () => {
//     if (!formdata.paragraph || !formdata.heading) {
//       alert("Please fill out both fields before updating.");
//       return;
//     }

//     try {
//       await axios.put(`https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial/${editid}`, formdata);
//       console.log("Testimonial updated", formdata);
//       setformdata({ paragraph: "", heading: "" });
//       seteditid(null);
//       // Fetch updated data after update
//       const response = await axios.get("https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial");
//       setdata(response.data);
//     } catch (error) {
//       console.error("Error updating testimonial:", error);
//     }
//   };

//   const deletetestimonial = async (id) => {
//     try {
//       await axios.delete(`https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial/${id}`);
//       console.log("Testimonial deleted", id);
//       // Fetch updated data after delete
//       const response = await axios.get("https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial");
//       setdata(response.data);
//     } catch (error) {
//       console.error("Error deleting testimonial:", error);
//     }
//   };

//   useEffect(() => {
//     testimonial();
//   }, []);

//   return (
//     <>
//       <div className="table-main">
//         <thead>
//           <tr>
//             <th colSpan="2">{editid ? "Edit Testimonial" : "Add New Testimonial"}</th>
//           </tr>
//           <tr>
//             <th>Paragraph</th>
//             <th>Heading</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="form">
//             <td>
//               <input type="text" placeholder="Enter Paragraph" name="paragraph" value={formdata.paragraph} onChange={handlechange} />
//             </td>
//             <td>
//               <input type="text" placeholder="Enter Heading" name="heading" value={formdata.heading} onChange={handlechange} />
//             </td>
//             <td>
//               <button onClick={editid ? updatetestimonial : addtestimonial}>{editid ? "Update" : "Add"}</button>
//             </td>
//           </tr>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.paragraph}</td>
//               <td>{item.heading}</td>
//               <td>
//                 <button onClick={() => {
//                   seteditid(item.id);
//                   setformdata({ paragraph: item.paragraph, heading: item.heading });
//                 }}>Edit</button>
//                 <button onClick={() => deletetestimonial(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </div>
//     </>
//   );
// }

// export default Dashtestimonialtable;

















import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dashtestimonialtable() {
  const [data, setdata] = useState([]);
  const [formdata, setformdata] = useState({ paragraph: "", heading: "" });
  const [editid, seteditid] = useState(null);

  const testimonial = async () => {
    try {
      const response = await axios.get("https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial");
      console.log("Fetched Data:", response.data); // Debug log
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching testimonial:", error);
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const addtestimonial = async () => {
    if (!formdata.paragraph || !formdata.heading) {
      alert("Please fill out both fields before adding.");
      return;
    }

    try {
      await axios.post("https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial", formdata);
      console.log("New Testimonial Added:", formdata);
      setformdata({ paragraph: "", heading: "" });
      testimonial(); // Fetch updated data
    } catch (error) {
      console.error("Error adding testimonial:", error);
    }
  };

  const updatetestimonial = async () => {
    if (!formdata.paragraph || !formdata.heading) {
      alert("Please fill out both fields before updating.");
      return;
    }

    try {
      await axios.put(`https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial/${editid}`, formdata);
      console.log("Testimonial Updated:", formdata);
      setformdata({ paragraph: "", heading: "" });
      seteditid(null);
      testimonial(); // Fetch updated data
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  };

  const deletetestimonial = async (id) => {
    try {
      await axios.delete(`https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial/${id}`);
      console.log("Testimonial Deleted:", id);
      testimonial(); // Fetch updated data
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  useEffect(() => {
    testimonial();
  }, []);

  return (
    <>
      <table className="table-main">
        <thead>
          <tr>
            <th colSpan="3">{editid ? "Edit Testimonial" : "Add New Testimonial"}</th>
          </tr>
          <tr>
            <th>Paragraph</th>
            <th>Heading</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Enter Paragraph"
                name="paragraph"
                value={formdata.paragraph}
                onChange={handlechange}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter Heading"
                name="heading"
                value={formdata.heading}
                onChange={handlechange}
              />
            </td>
            <td>
              <button onClick={editid ? updatetestimonial : addtestimonial}>
                {editid ? "Update" : "Add"}
              </button>
            </td>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.paragraph}</td>
              <td>{item.heading}</td>
              <td>
                <button
                  onClick={() => {
                    seteditid(item.id);
                    setformdata({ paragraph: item.paragraph, heading: item.heading });
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deletetestimonial(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Dashtestimonialtable;
