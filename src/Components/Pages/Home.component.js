import React from 'react';

import PopularBountyWindow from '../Bounty/BountyWindows/PopularBountyWindow.component';
import NewBountyWindow from '../Bounty/BountyWindows/NewBountyWindow.component';
import OldBountyWindow from '../Bounty/BountyWindows/OldBountyWindow.component';
import HighPayBountyWindow from '../Bounty/BountyWindows/HighPayBountyWindow.component';

export class Home extends React.Component {

  render() {
		return (
			<>
        <PopularBountyWindow />
        <HighPayBountyWindow />
        <NewBountyWindow />
        <OldBountyWindow />
      </>
		)
	} 
}

export default Home