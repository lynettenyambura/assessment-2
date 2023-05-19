
const baseUrl ='https:jsonplaceholder.typicode.com/posts';
async function createNewPost(title, body, userId) {
    
      const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        body: JSON.stringify({ title, body, userId }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      const newPost = await response.json();
      console.log('New Post:', newPost);
    
  }
  createNewPost("test","shan",3);