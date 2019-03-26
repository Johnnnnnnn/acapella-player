import React from 'react';

// Enum
import { PlayerReadyState } from '../enum/player-ready-state.js';

const loadMedia = Symbol("loadMedia");

class MediaPlayer extends React.Component {

	constructor(props) {

	    super(props);

	    this.state = {

	    	disableFileInput: false,
			muted: false,
	    	src: '',
	    	
	    };

	    this[loadMedia] = this[loadMedia].bind(this);
		this.toggle = this.toggle.bind(this);

  	}

  	play() {

  		this.setState({
  			disableFileInput: true
  		});

  		if (this.player.readyState !== PlayerReadyState.HAVE_ENOUGH_DATA) {
  			return;
  		}

  		this.player.play();
  		

  	}

  	stop() {

  		this.setState({
  			disableFileInput: false
  		});

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

export {
	MediaPlayer,
	loadMedia
}
