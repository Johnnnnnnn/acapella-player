import React from 'react';
import { Provider } from 'react-redux';

// Component
import Video from '../../component/video.jsx';
import Voce from '../../component/voce.jsx';  

// Enum
import { VoceType } from '../../enum/voce-type.js';
import { PlayeringStatus } from '../../enum/playing-status.js';

const VideoPlayer = Symbol("VideoPlayer");
export default class Index extends React.Component {

	constructor(props) {

	    super(props);

	    this.state = {

	    	playingStatus: PlayeringStatus.STOPPED

	    };

	    this.onKeyPressed = this.onKeyPressed.bind(this);
	    this.play = this.play.bind(this);
	    this.stop = this.stop.bind(this);	
	    
  	}

  	componentDidMount() {
  		
		document.addEventListener("keypress", this.onKeyPressed, false);

  	}

  	render() {

  		console.log(this);

	    return <div
	    	onKeyDown={this.onKeyPressed}
	    	style={
	    		{
	    			display: 'flex'
	    		}
	    	}
	    >

		    	
	    	<div
				style={
		    		{
		    			minWidth: '330px'
		    		}
		    	}
	    	>

		    	<Voce 
		    		title={'主唱'}
		    		ref={ (voce) => {
		    			this[VoceType.LEAD] = voce
		    		}}
		    	/>

		    	<Voce 
		    		title={'Alto'}
		    		ref={ (voce) => {
		    			this[VoceType.ALTO] = voce
		    		}}
		    	/>
		    	<Voce
		    		title={'Soprano'}
		    		ref={ (voce) => {
		    			this[VoceType.SOPRANO] = voce
		    		}}
		    	/>
		    	<Voce
		    		title={'Tenor'}
		    		ref={ (voce) => {
		    			this[VoceType.TENOR] = voce
		    		}}
		    	/>
		    	<Voce 
		    		title={'Bass'}
		    		ref={ (voce) => {
		    			this[VoceType.BASS] = voce
		    		}}
		    	/>
		    	<Voce 
		    		title={'VP'}
		    		ref={ (voce) => {
		    			this[VoceType.VP] = voce
		    		}}
		    	/>

		    	<button

		    		onClick={this.play}

		    	>播放</button>

		    	<button

		    		onClick={this.stop}

		    	>停止</button>
	    		
	    	</div>

	    	<div
	    		style={
		    		{
		    			flex: 1,
		    			minWidth: '240px'
		    		}
		    	}
	    	>

	    		<Video
	    			ref={ (video) => {
		    			this[VideoPlayer] = video
		    		}}
	    		></Video>

	    	</div>
	    	
	    	
	    </div>
	   

  	}

  	onKeyPressed(event) {

  		const key = event.key;

  		let targetComponent;

  		switch (key) {

  			case 'A':
  			case 'a':
  				targetComponent = this[VoceType.ALTO];
  				break;

  			case 'B':
  			case 'b':
  				targetComponent = this[VoceType.BASS];
  				break;

  			case 'L':
  			case 'l':
  				targetComponent = this[VoceType.LEAD];
  				break;

  			case 'S':
  			case 's':
  				targetComponent = this[VoceType.SOPRANO];
  				break;

  			case 'T':
  			case 't':
  				targetComponent = this[VoceType.TENOR];
  				break;

  			case 'V':
  			case 'v':
  				targetComponent = this[VoceType.VP];
  				break;

  		}

  		if (targetComponent) {
  			targetComponent.toggle()
  		}

  	}

  	play() {

  		Object
  			.keys(VoceType)
  			.forEach((key) => {

  				const voceType = VoceType[key];
  				console.log(this[voceType] );
  				this[voceType] && this[voceType].play();

  			})
  		this[VideoPlayer].play()

  	}

  	stop() {

  		Object
  			.keys(VoceType)
  			.forEach((key) => {

  				const voceType = VoceType[key];
  				this[voceType] && this[voceType].stop();

  			})
  		this[VideoPlayer].stop()

  	}


}