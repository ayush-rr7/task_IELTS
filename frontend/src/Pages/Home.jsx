
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FeatureCard from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import User from "./User.jsx"

function Home(){
      return(
<>
      
      <Router>
      <Routes>
       <Route path="/" element={
        <>
      <Nav/>
      <Hero />
      <FeatureCard />
      <Testimonials />
      <Footer /> 
        </>
       } />
        <Route path="/Enrollment" element={<>
            <User/>
        </>}/>

      </Routes>
      </Router>        

</>
      )
}
export default Home








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { normalizeModuleId } from 'vite/module-runner';
// // import './App.css';

// const API_URL = 'http://localhost:3001/api/items';

// function Home() {
// //   const [items, setItems] = useState([]);
// //   const [image, setImage] = useState(null);

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     price: '',
// //     description: '',
// //     detail:''
// //   });
// //   const [editingId, setEditingId] = useState(null);

//   // Fetch all items
//   const fetchItems = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   // Handle form input changes
//   // const handleInputChange = (e) => {
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.value
//   //   });
//   //  };
//   //   const handleFileChange = (e) => {
//   //   setImage(e.target.files[0]); // store selected file
//   //  };

//   //  // Create or Update Item
//   //  const handleSubmit = async (e) => {

//   //   e.preventDefault();
//   //   try {
//   //      const data = new FormData();

//   //   // Append all text fields from formData
//   //   Object.keys(formData).forEach((key) => {
//   //     data.append(key, formData[key]);
//   //   });

//   //   // Append the selected image
//   //   if (image) data.append("imageURL", image); // field name must match backend

//   //     if (editingId) {
//   //       // Update existing Item
//   //       await axios.put(`${API_URL}/${editingId}`, data,   {
//   //       headers: { "Content-Type": "multipart/form-data" },
//   //     });
//   //       setEditingId(null);
//   //     } else {
//   //       // Create new Item
//   //       await axios.post(API_URL, data,  {
//   //       headers: { "Content-Type": "multipart/form-data" },
//   //     });
//   //     }
//   //     setFormData({ name: '',  price: '', description: '',detail:''});
//   //     setImage(normalizeModuleId)
//   //     fetchItems();
//   //   } catch (error) {
//   //     console.error('Error saving Item:', error);
//   //   }
//   // };

//   // // Edit Item
//   // const handleEdit = (Item) => {
//   //   setFormData({
//   //     name: Item.name,
//   //     price: Item.price,
//   //     description: Item.description,
//   //     detail:Item.detail

//   //   });
//   //   setEditingId(Item._id);
//   // };

//   // // Delete Item
//   // const handleDelete = async (id) => {
//   //   try {
//   //     await axios.delete(`${API_URL}/${id}`);
//   //     fetchItems();
//   //   } catch (error) {
//   //     console.error('Error deleting Item:', error);
//   //   }
//   // };

//   return (
//     <div className="App">
//      <h1>Prodct List</h1>

//      {/* Item Form */}
//         {/* <form  onSubmit={handleSubmit} className="Item-form">
//             <h2>{editingId ? 'Edit Item' : 'Add Item'}</h2> */}
//            {/* <h2>{ 'Add Item'}</h2> */}

//            {/* /<input

//   //         type="text"
//   //         name="name"
//   //         placeholder="Name"
//   //         value={formData.name}
//   //         onChange={handleInputChange}
//   //         required
//   //       /><br/>

//   //       <input
//   //         type="number"
//   //         name="price"
//   //         placeholder="Price"
//   //         value={formData.price}
//   //         onChange={handleInputChange}
//   //         required
//   //       /><br/>
//   //       <input
//   //         type="text"
//   //         name="description"
//   //         placeholder="Description"
//   //         value={formData.description}
//   //         onChange={handleInputChange}
//   //         required
//   //       /><br/>
//   //       <input
//   //         type="text"
//   //         name="detail"
//   //         placeholder="Detail"
//   //         value={formData.detail}
//   //         onChange={handleInputChange}
//   //         required
//   //       /><br/>
//   //       <input
//   //         type="file"
//   //         accept="image/**"
//   //         onChange={handleFileChange}
//   //         required
//   //       /><br/>
//   //       <button type="submit">
//   //         {editingId ? 'Update Item' : 'Add Item'}
//   //       </button>
//   //       {editingId && (
//   //         <button type="button"
//   //         onClick={() => {
//   //           setEditingId(null);
//   //           setFormData({ name: '',  price: '',description: '', detail});
//   //         }}
//   //         >
//   //           Cancel
//   //         </button>
//   //        )}
//   //     </form>

//       {/* Items List */}
//       <div className="items-list">
//         <h2>Items</h2>
//         {items.length === 0 ? (
//           <p>No items found</p>
//         ) : (
//           items.map((Item) => (
//             <div key={Item._id} className="Item-card">
//               <h3>{Item.name}</h3>
//               <p>price: {Item.price}</p>
//                <p>description: {Item.description}</p>
//                <p>detail:{Item.detail}</p>

//                 {Item.imageURL && (
//                  <img
//                    src={Item.imageURL}
//                    alt={Item.name}
//                    width="150"
//                  />
//                )}
//               <div className="Item-actions">
//                 <button onClick={() => handleEdit(Item)}>Edit</button>
//                 <button onClick={() => handleDelete(Item._id)}>Delete</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home
