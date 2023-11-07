// import { createContext, useReducer } from "react";

// export const Context = createContext();

// export const categoryIdReducer = (categoryIdState, categoryIdAction) => {
//   switch (categoryIdAction.type) {
//     case "FIND_CATEGORY_ID" :
//       return {
//         categoryId: categoryIdAction.payload
//       }
//   }
// }

// export const ContextProvider = ({children}) => {
//   const [categoryIdState, categoryIdDispatch] = useReducer(categoryIdReducer, {
//     categoryId: null
//   });

//   categoryIdDispatch({type: "FIND_CATEGORY_ID", payload: [{categoryName}]})

//   return (
//     <Context.Provider value={{categoryIdState, categoryIdDispatch}}>
//       {children}
//     </Context.Provider>
//   )
// }