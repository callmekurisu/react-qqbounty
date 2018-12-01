import React from 'react';
import LndClient from '../../AxiosClients/qqBountyClient';

export class PaywallComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: '',
      payReq: '',
      paid: false
    }
  }

  //watch out now! lexical this!
  componentDidMount() {
    //it doesn't matter what comes after that slash
    //user id is fetched server side
    LndClient.get('invoice')
      .then((response) => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      
    )
  }
}