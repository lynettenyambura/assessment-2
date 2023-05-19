
// const baseUrl ='https:jsonplaceholder.typicode.com/posts';

fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PUT',
  body: JSON.stringify({
    id: 5,
    title: 'weather',
    body: 'sun',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));