import axios from 'axios';
import { environment } from './Environment';

export const BountiesClient = axios.create({
  baseURL: environment.qqBountyContext+"bounties",
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

const AnswersClient = axios.create({
    baseURL: environment.qqBountyContext+"answers",
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });

  

  const UsersClient = axios.create({
    baseURL: environment.qqBountyContext+"users",
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
  



export const AWSClientBlank = axios.create({
    baseURL: "",
    headers: {
      'Content-Type': 'application/json'
    }
  });

