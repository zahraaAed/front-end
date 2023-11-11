import { useState } from "react";

const CategoryDelete = ({categories}) => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(null);

  const handleDeleteCategory = async (e) => {
    if(window.confirm("are you sure you want to delete?")){
      try {
        e.preventDefault();
        const category = categories.find((category) => category.categoryName === categoryName);
        // console.log(category)

        const responseCategory = await fetch("/api/categoryRoute/delete/" + category._id, {
          method: "DELETE"
        });
        const jsonCategory = await responseCategory.json();
        if (!responseCategory.ok) {
          setError(jsonCategory.error);
        }
        if (responseCategory.ok) {
          setCategoryName("");
          setError(null);
          console.log("Category Deleted", jsonCategory);
        }
      } catch (error) {
        console.log(error);
      }
      document.getElementById("deletCategoryId").submit();
    }
  }

  return (
    <>
      <form className="deleteCategory" id="deletCategoryId" onSubmit={handleDeleteCategory}>
        <h3>Delete a category</h3>
        <label>Category Name</label>
        <input
          type="text"
          onChange={(e) => setCategoryName(e.target.value)}
          value={categoryName}
        />
        <button>Delete Category</button>
        {}
        {error && <div className="CategoryDeleteError">{error}</div>}
      </form>
    </>
  );
};
export default CategoryDelete;
