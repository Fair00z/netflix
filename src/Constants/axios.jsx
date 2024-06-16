import axios from 'axios'
import {baseURl} from './Constants'

const instance = axios.create({
  baseURL: baseURl,
});

export default instance;