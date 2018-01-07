import axios from 'axios';

const instance =  axios.create({
  baseURL: 'https://burger-dungeon.firebaseio.com/'
});

export default instance;
