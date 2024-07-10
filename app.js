// write code here
const array = [
    { name: 'apple', surname: 'London' },
    { name: 'banana', surname: 'Bangkok' },
    { name: 'watermelon', surname: 'Singapore' }
  ];

let result = array.map(x => `${x.name} ${x.surname}`)
console.log(result);