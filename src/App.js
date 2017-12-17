import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import TopNavigator from './components/TopNavigator';
import Main from './components/Main';


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
        },
        backend: {
          title: 'Backend ',
          items: [
            {
              id: 1,
              title: 'PHP',
              description: 'Interpreted language to buld small or medium apps'
            },
            {
              id: 2,
              title: 'Ruby',
              description: 'Open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.'
            },
            {
              id: 3,
              title: 'Javascript',
              description: 'Hibrid and flexible. The best language in the world'
            },
            {
              id: 4,
              title: 'Python',
              description: 'Python is a programming language that lets you work quickly and integrate systems more effectively'
            },
            {
              id: 5,
              title: 'Java',
              description: 'The king of POO in backend'
            },
            {
              id: 6,
              title: '.NET',
              description: 'Hibrid and flexible. The best language in the world'
            },
          ],
        }
      },
    };
	}

	render () {
		return (
      <BrowserRouter>
        <React.Fragment>
          <TopNavigator />
          <Main />
        </React.Fragment>
      </BrowserRouter>
		);
	}
}


render(<App />, document.getElementById('app'));
