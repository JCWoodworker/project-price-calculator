import React from "react"

const NewProjectForm = props => {

  return (
    <>
      <h3 className="new-project-heading">Start A New Project:</h3>
      <form className="new-project-form">
        <label htmlFor="name">Name
          <input
            type="text"
            id="name"
            name="name"
          />
        </label>
        <label htmlFor="description">Description
          <input
            type="text"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="customer">Customer
          <input
            type="text"
            id="customer"
            name="customer"
          />
        </label>
        <label htmlFor="quantity">Quantity
          <input
            type="number" min="1" max="100"
            id="quantity"
            name="quantity"
          />
        </label>
        <input className="submit-button" type="submit"></input>
      </form>
    </>
  )
}

export default NewProjectForm