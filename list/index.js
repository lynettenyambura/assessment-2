const baseUrl ='https:jsonplaceholder.typicode.com/posts';
fetch(baseUrl)
  .then((response) => response.json())
  .then((json) => console.log(json));

//   async function getListOfPosts() {
//   try {
//     const response = await fetch(`${baseUrl}/posts`);
//     handleErrors(response);
//     const posts = await response.json();
//     console.log('List of Posts:', posts);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }