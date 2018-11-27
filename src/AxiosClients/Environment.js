const dev = {
    qqBountyContext: "http://localhost:8080/"
  };
  
  const prod = {
    //qqBountyContext: "http://project1kyle-env.99qncmeu49.us-east-2.elasticbeanstalk.com/Project1/"
  };
  
  export const environment = process.env.NODE_ENV === "production" ? prod : dev;
  