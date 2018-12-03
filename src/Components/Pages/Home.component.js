import React from 'react';

import WelcomeBanner from '../Commons/WelcomeBanner.component';
import PopularBountyWindow from '../Bounty/BountyWindows/PopularBountyWindow.component';
import NewBountyWindow from '../Bounty/BountyWindows/NewBountyWindow.component';
import OldBountyWindow from '../Bounty/BountyWindows/OldBountyWindow.component';
import HighPayBountyWindow from '../Bounty/BountyWindows/HighPayBountyWindow.component';

export class Home extends React.Component {

  renderBanner = () => {
		if(!this.props.login)
			return <WelcomeBanner />
		else return null
  }
  
  render() {
		let sRenderBanner = this.renderBanner();

		return (
			<>
        {sRenderBanner}
        {/* <AdvertisementText text="" /> */}
        <PopularBountyWindow />
        <HighPayBountyWindow />
        <NewBountyWindow />
        <OldBountyWindow />
      </>
		)
	} 
}

export default Home