import React from 'react';
import TopNavigator from '../components/TopNavigator';


const Home = (props) => {
  const content = props.children ? props.children : '<div>Loading...</div>';

	return (
    <React.Fragment>
      <TopNavigator />
      <main>{content}</main>
    </React.Fragment>
	);
}


export default Home;
