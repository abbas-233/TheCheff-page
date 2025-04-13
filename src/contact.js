function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.classList.add('contact-info')
  phoneNumber.textContent = '📞 544 555 666'

  const address = document.createElement('p')
  address.classList.add('contact-info')
  address.textContent = '🏠 king fahad road 42, riyadh, KSA'

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = 'images/restaurant-location.png'
  restaurantLocation.alt = 'TheCheff restaurant location'

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(restaurantLocation)

  return contact
}

function loadContact() {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}

export default loadContact
