const baseUrl ='https:jsonplaceholder.typicode.com';
async function filterPostsByUserId(userId) {
  try {
    const response = await fetch(`${baseUrl}/posts?userId=${userId}`);
    handleErrors(response);
    const filteredPosts = await response.json();
    console.log('Filtered Posts:', filteredPosts);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
filterPostsByUserId(1)