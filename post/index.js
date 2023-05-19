
const baseUrl ='https:jsonplaceholder.typicode.com/posts';
async function createNewPost(title, body, userId) {
    try {
      const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, body, userId }),
        headers: { 'Content-Type': 'application/json' },
      });
      handleErrors(response);
      const newPost = await response.json();
      console.log('New Post:', newPost);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }