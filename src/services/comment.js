import axios from 'axios';

async function getComments(id) {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://climboulder.herokuapp.com/api/spaces/${id}/comments`, 
    );
    return response.data;
  }

  export default { getComments };