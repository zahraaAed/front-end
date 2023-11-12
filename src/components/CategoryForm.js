import { useState } from "react";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    const category = { categoryName };
    const responseCategory = await fetch("http://localhost:4000/api/categoryRoute/post", {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "content-Type": "application/json",
      },
    });
    const jsonCategory = await responseCategory.json();
    if (!responseCategory.ok) {
      setError(jsonCategory.error);
    }
    if (responseCategory.ok) {
      setCategoryName("");
      setError(null);
      console.log("new category added", jsonCategory);
    }
  };

  return (
    <>
      <form className="createCategory" onSubmit={handleSubmitCategory}>
        <h3>Add a category</h3>
        <label>Category Name</label>
        <input
          type="text"
          onChange={(e) => setCategoryName(e.target.value)}
          value={categoryName}
        />
        <button>Add Category</button>
        {error && <div className="CategoryAddError">{error}</div>}
      </form>
    </>
  );
};

export default CategoryForm;
