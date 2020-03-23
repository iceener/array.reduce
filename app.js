const orders = [31.54, 19.99, 4.55];

orders.reduce((total, amount) => total + amount); /*?*/

orders.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) return total / array.length;

  return total;
}); /*?*/

const members = [1, 2, 3, 3, 4];
const uniqueMembers = members.reduce((total, member) => {
  if (total.indexOf(member) === -1) total.push(member);
  return total;
}, []); /*?*/
members.length !== uniqueMembers.length; /*?*/

(new Set(members)).size !== members.length; /*?*/

const data = [[1, 2, 3], [4, 5, 6]];
data.reduce((total, arr) => total.concat(arr)); /*?*/
data.flat(Infinity); /*?*/

const tree = {
  id : 1,
  children: [ 
    { id: 2 },
    { id: 3,
      children: [ { id: 4 }, { id: 5 }, ]
    }
  ]
}

const flatten = (obj) => {
  const arr = Array.isArray(obj) ? obj: [obj];
  return arr.reduce((result, value) => {
    result.push(value);
    if (value.children) {
      result = result.concat(flatten(value.children));
      delete value.children;
    }
    return result;
  }, []);
}

flatten(tree); /*?*/

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

Object.keys(formData).reduce((result, key) => {
  if (!key.match('_')) {
    result[key] = formData[key]; /*?*/
  } else {
    const newKey = key.split(/_([^_]*)$/); /*?*/
    if (!result[newKey[0]]) result[newKey[0]] = {}
    result[newKey[0]][newKey[1]] = formData[key];
  }

  return result;
}, {}); /*?*/

function add(value) { return value + 1 }
function subtract(value) { return value - 2 }
function double(value) { return value * 2 }

const pipe = [add, subtract, double];
pipe.reduce((total, fn) => {
  return fn(total);
}, 10); /*?*/