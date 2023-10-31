const CategoryDetails = ({ category }) => {
  return (
    <section>
      <div className="categoryDetails">
        <img src="#" alt="image"/>
        <h4>{ category.categoryName }</h4>
      </div>
    </section>
  )
}

export default CategoryDetails;