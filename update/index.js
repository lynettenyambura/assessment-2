
const baseUrl ='https:jsonplaceholder.typicode.com/posts';

fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'PUT',
  body: JSON.stringify({
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
    }),
  headers:{
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));