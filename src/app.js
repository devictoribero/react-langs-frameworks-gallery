import React from 'react';
import ListCardContainer from './containers/ListCardContainer';


class App extends React.Component {
  constructor( props ) {
		super( props );
    this.state = {
      languages : {
        frontend: {
          title: 'Frontend',
          items: [
            {
              id: 1,
              title: 'Html',
              description: 'Used to build the layout of a website'
            },
            {
              id: 2,
              title: 'CSS',
              description: 'Used to style the <html> components'
            },
            {
              id: 3,
              title: 'Javascript',
              description: 'Hibrid and flexible. The best language in the world'
            },
          ],
        }
      },
    };
	}

	render () {
		return (
			<div>
        <ListCardContainer {...this.state.languages.frontend} />
			</div>
		);
	}
}


export default App;
