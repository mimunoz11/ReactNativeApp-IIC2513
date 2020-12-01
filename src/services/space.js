import axios from 'axios';

async function getSpaces() {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://backend-climboulder.herokuapp.com/api/spaces', 
    );
    return response.data;
  }

  export default { getSpaces };