const dev = {
    qqBountyContext: "http://localhost:8088/"
    //qqBountyContext: process.env.REACT_APP_SERVER_ADDRESS

  };
  
  const prod = {
    //qqBountyContext: "http://project1kyle-env.99qncmeu49.us-east-2.elasticbeanstalk.com/Project1/"
  };
  
  export const environment = process.env.NODE_ENV === "production" ? prod : dev;
  