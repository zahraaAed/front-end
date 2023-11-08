// import React, { useState } from "react";
// import "../components/Filter.css";
// const Filter = ({products}) => {
//   const [selectedFlavor, setSelectedFlavor] = useState(null);
//   const [allFlavors] = useState([
//     {
//       id: 1,
//       name: "Chocolate",
//       image: "chocolate.jpg",
//       price: "$2.99",
//       description: "Delicious chocolate flavor."
//     },
//     {
//       id: 2,
//       name: "Vanilla",
//       image: "vanilla.jpg",
//       price: "$2.49",
//       description: "Classic vanilla taste."
//     },
//     {
//       id: 3,
//       name: "Strawberry",
//       image: "strawberry.jpg",
//       price: "$3.29",
//       description: "Sweet and tangy strawberry flavor."
//     }
//   ]);

//   const handleFlavorChange = (e) => {
//     const selectedValue = e.target.value;
//     if (selectedValue === "All") {
//       setSelectedFlavor(null); // Display all flavors
//     } else {
//       const filteredFlavor = allFlavors.filter(flavor => flavor.name === selectedValue);
//       setSelectedFlavor(filteredFlavor); // Display selected flavor
//     }
//   };

//   return (
//     <div className="filter">
  

//   <select className="flavorSelect" onChange={handleFlavorChange}>
//         <option value="All">All Flavors</option>
//         {products.flavours.map((flavor) => (
//           <option value={flavor}>
//             {flavor}
//           </option>
//         ))}
//       </select>

//       {selectedFlavor && (
//         <section>
//           {selectedFlavor.map((flavor) => (
//             <div key={flavor.id}>
//               <h2>{flavor.name}</h2>
//               <img src={flavor.image} alt={flavor.name} />
//               <p>Price: {flavor.price}</p>
//               <p>Description: {flavor.description}</p>
//             </div>
//           ))}
//         </section>
//       )}
//     </div>
//   );
// };

// export default Filter;