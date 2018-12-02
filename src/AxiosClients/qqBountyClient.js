import axios from 'axios';
import { environment } from './Environment';
export const BountiesClient = axios.create({
  baseURL: environment.qqBountyContext+"bounties",
  headers: {
    'Content-Type': 'application/json'
  }
});

export const AnswersClient = axios.create({
  baseURL: environment.qqBountyContext + "answers",
  headers: { 
    'Content-Type': 'application/json'
  }
});

export const UsersClient = axios.create({
  baseURL: environment.qqBountyContext + "users",
  headers: {
    'Content-Type': 'application/json'
  }
});

export const AWSClientBlank = axios.create({
  baseURL: "",
  headers: {
    'Content-Type': 'application/json'
  }
});