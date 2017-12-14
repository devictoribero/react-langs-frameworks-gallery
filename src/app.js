import React, { Component } from 'react'
import Card from './components/Card';

class App extends Component {
  constructor( props ) {
		super( props );
	}

	render () {
		return (
			<div>
        <Card />
			</div>
		);
	}
}

export default App;
