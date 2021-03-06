import React from 'react'
import { convertPhoneNumber } from '../../../../services/convertPhoneNumber'

const CustomerTile = ({ customer, deleteCustomer, setShowCustomerShow, setSelectedCustomerId }) => {

  let customerStatus
  
  customer.prospect? customerStatus = "Prospect" : null
  customer.negotiating? customerStatus = "Negotiating" : null
  customer.commissioned? customerStatus = "Commissioned" : null
  customer.delivered? customerStatus = "Delivered" : null
  customer.cancelled? customerStatus = "Cancelled" : null

  let convertedPhone = "N/A"
  if (customer.cellPhone) {
    convertedPhone = convertPhoneNumber(customer.cellPhone)
  }

  const handleDeleteCustomer = event => {
    event.preventDefault()
    if (!confirm(`Are you sure you want to delete ${customer.firstName} ${customer.lastName}?  This cannot be undone!!`)) {
      console.log()
    } else {
      deleteCustomer(customer.id)
    }
  }

  const handleClickCustomer = event => {
    event.preventDefault()
    setShowCustomerShow(true)
    setSelectedCustomerId(`${customer.id}`)
  }

  return (
    <tr>
      <td><button id="delete-customer" onClick={handleDeleteCustomer}>X</button></td>
      <td onClick={handleClickCustomer} id="clickable-row">{customer.firstName}</td>
      <td onClick={handleClickCustomer} id="clickable-row">{customer.lastName}</td>
      <td id="clickable-row">{customer.email}</td>
      <td id="clickable-row">{convertedPhone}</td>
      <td id="clickable-row">{customerStatus}</td>
    </tr>
  )
}

export default CustomerTile