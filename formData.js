const formData = {
  name: 'Adam',
  'billing_address_city': 'Warsaw',
  'billing_address_street': 'ul. Pomorska',
  'shipping_address_city': 'Krakow',
  'shipping_address_street': 'ul. Karmelicka',
}

const result = { 
  name: 'Adam', 
  billing_address: { city: 'Warsaw', street: 'ul. Pomorska' },
  shipping_address: { city: 'Krakow', 'street': 'ul. Karmelicka' }
}