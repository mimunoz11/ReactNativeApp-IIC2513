import axios from 'axios';

async function logIn(data) {
    const response = await axios.post(
      'https://cors-anywhere.herokuapp.com/https://backend-climboulder.herokuapp.com/api/auth', 
      data
    );
    return response.data.token;
  }

  export default { logIn };