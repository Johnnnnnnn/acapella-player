import ReactDOM from 'react-dom';
import React from 'react';
import Index from './app/page/Index.jsx';

main();

function main() {

    ReactDOM.render(
	  <Index/>,
	  document.getElementById('app'),
	  () => {
	  	
	  }
	);

}