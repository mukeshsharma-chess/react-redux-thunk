import { actionType } from './type'


export const fetctPostData = () => dispatch => {
    fetch('http://localhost:3000/Users')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: actionType.FETCH_DATA,
          payload: posts
        })
      );
  };
  
  export const postNewData = postData => dispatch => {
    fetch('http://localhost:3000/Users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: actionType.POST_DATA,
          payload: post
        })
    );
};