import React from 'react';

import PopularBountyWindow from '../Bounty/BountyWindows/PopularBountyWindow.component';
import NewBountyWindow from '../Bounty/BountyWindows/NewBountyWindow.component';
import ExpireSoonBountyWindow from '../Bounty/BountyWindows/ExpireSoonBountyWindow.component';

export class Home extends React.Component {

  render() {
		return (
			<>
        <PopularBountyWindow />
        <NewBountyWindow />
        <ExpireSoonBountyWindow />
      </>
		)
	} 
}

export default Home