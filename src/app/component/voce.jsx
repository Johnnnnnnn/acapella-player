import React from 'react';

// Enum
import { PlayerReadyState } from '../enum/player-ready-state.js';

// private key
const loadMedia = Symbol("loadMedia");

export default class Voce extends React.Component {

	constructor(props) {

	    super(props);

	    this.state = {

			muted: false,
	    	src: '',
	    	
	    };

	    this[loadMedia] = this[loadMedia].bind(this);
		this.toggle = this.toggle.bind(this);
  	}

	

  	render() {

  		const title = this.props

	    return <div>

	    	<input 
	    		onChange={this.toggle}
	    		type="checkbox"
	    		checked={!this.state.muted}
	    	/>

	    	<label>{this.props.title}</label>

	    	<input
	    		onChange={this[loadMedia]}
	    		accept=".mp3"	
	    		type="file" 
	    	/>

	    	<audio 
	    		muted={this.state.muted ? 'muted' : ''}
	    		ref={ (audio) => {
	    			this.player = audio
	    		}}
	    		src={this.state.src}
	    	></audio>
	    	
	    </div>;
  	}

  	play() {

  		if (this.player.readyState !== PlayerReadyState.HAVE_ENOUGH_DATA) {
  			return;
  		}

  		this.player.play();

  	}

  	stop() {

  		const sound = this.player

  		sound.pause();
		sound.currentTime = 0;

  	}

  	toggle() {

		this.setState({
			muted: !this.state.muted,
		}); 

	}

  	[loadMedia](event) {

		const blob = window.URL || window.webkitURL;
	    if (!blob) {
	        console.log('Your browser does not support Blob URLs :(');
	        return;           
	    }

        const file = event.target.files[0]
        if (!file) {
        	return 
        }

        const fileURL = blob.createObjectURL(file);
        
		this.setState({
			src: fileURL
		}); 

	}

	

}