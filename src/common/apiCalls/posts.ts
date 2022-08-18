import { addPostUrl } from "../../config/urls.config";
import { PostInterface } from "../../posts/interfaces/posts.interface";

const createPost = async (form: Omit<PostInterface, 'id'>) => {
    const responseRaw = await fetch(addPostUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    const response = await responseRaw.json();
    if (response.ok)
      return Promise.resolve(response);
    return Promise.reject(response);
  }
  
  export {
      createPost,
  }