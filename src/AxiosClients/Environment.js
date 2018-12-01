const dev = {
  qqBountyContext: process.env.REACT_APP_SERVER_ADDRESS,
  lndContext: process.env.LND_SERVER_ADDRESS
//     qqBountyContext: "http://localhost:8088/"

};
  
const prod = {
  //qqBountyContext: "http://project1kyle-env.99qncmeu49.us-east-2.elasticbeanstalk.com/Project1/"
  lndContext: process.env.LND_SERVER_ADDRESS
};

export const environment = process.env.NODE_ENV === "production" ? prod : dev;