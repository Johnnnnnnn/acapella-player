import React from 'react';
import ReactDOM from 'react-dom';

// Css
import './style.css'

// page
import Index from './app/page/index/index.jsx';

main();

function main() {

    ReactDOM.render(
    	<Index/>,
	  	document.getElementById('app'),
	  	() => {
	  	
	  	}
	);

}