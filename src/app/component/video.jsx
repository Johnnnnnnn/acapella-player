import React from 'react';

// Enum
import { PlayerReadyState } from '../enum/player-ready-state.js';

// Interface
import { 
	MediaPlayer,
	loadMedia
} from '../interface/media-player.interface.js'

export default class Video extends MediaPlayer {

	constructor(props) {

	    super(props);

		this.toggle = this.toggle.bind(this);

  	}

  	render() {

	    return <div>

	    	<input 
	    		onChange={this.toggle}
	    		type="checkbox"
	    		checked={!this.state.muted}
	    	/>

	    	<input
	    		onChange={this[loadMedia]}
	    		disabled={this.state.disableFileInput}
	    		accept=".mp4"	
	    		type="file" 
	    	/>

	    	<video 
	    		muted={this.state.muted ? 'muted' : ''}
	    		ref={ (video) => {
	    			this.player = video
	    		}}
	    		src={this.state.src}
	    		style={
	    			{
	    				backgroundColor: 'black',
	    				width: '100%'
	    			}
	    		}
	    	></video>
	    		
	    </div>;

  	}


}