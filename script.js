const allCustomersDiv = document.querySelector('#allCustomers')
for (let customer of customers) {
    let custDiv = document.createElement('div')
    custDiv.classList.add("person")
    allCustomersDiv.appendChild(custDiv)
    let custPic = document.createElement('img')
    custPic.src = `${customer.picture.large}`
    custDiv.appendChild(custPic)
    let nameEl = document.createElement('h3')
    nameEl.innerText = `${customer.name.first} ${customer.name.last}`
    custDiv.appendChild(nameEl)
    let emailAddress = document.createElement('p')
    emailAddress.innerText = `${customer.email}`
    emailAddress.classList.add("emailFormat")
    custDiv.appendChild(emailAddress)
    let streetAddress = document.createElement('p')
    streetAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}\n ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
    custDiv.appendChild(streetAddress)
    let phoneHome = document.createElement('p')
    phoneHome.innerText = `home: ${customer.phone}`
    custDiv.appendChild(phoneHome)
    let phoneCell = document.createElement('p')
    phoneCell.innerText = `cell: ${customer.cell}`
    custDiv.appendChild(phoneCell)
    let birthday = document.createElement('p')
    birthday.innerText = `DOB: ${moment(customer.dob.date).format("MMM Do YYYY")}`
    custDiv.appendChild(birthday)
    let dateReg = document.createElement('p')
    dateReg.innerText = `Registered: ${moment(customer.registered.date).format("MMM Do YYYY")}`
    custDiv.appendChild(dateReg)


}
