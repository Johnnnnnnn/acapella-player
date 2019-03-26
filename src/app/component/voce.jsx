import React from 'react';

// Interface
import { 
	MediaPlayer,
	loadMedia
} from '../interface/media-player.interface.js'

export default class Voce extends MediaPlayer {

	constructor(props) {

	    super(props);

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
	    		disabled={this.state.disableFileInput}
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

}