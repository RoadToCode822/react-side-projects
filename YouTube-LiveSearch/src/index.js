import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDcBGNu79fGgy1FDGWL2jIrKWprezSJJDE';

// Create a new component that will produce some HTML

class App extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		videos: [],
  		selectedVideo: null //null because we don't have a selected video to begin with
  	};

 //  	YTSearch({key: API_KEY, term: 'basketball'}, (videos) => {
	//   this.setState({
	//   	videos: videos,
	//   	selectedVideo: videos[0]
	//   });
	// }); --> moved to videoSearch function
    this.videoSearch('basketball');
  }

  videoSearch(term) {
  	YTSearch({key: API_KEY, term: term}, (videos) => {
	  this.setState({
	  	videos: videos,
	  	selectedVideo: videos[0]
	  });
	});
  }

  render() {
  	const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
	return (
	  <div>
		<SearchBar onSearchTermChange={videoSearch}/>
		<VideoDetail video={this.state.selectedVideo} />
		<VideoList
		  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
		  videos={this.state.videos} />
	  </div>
	);
  }
}
// Implement the component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));