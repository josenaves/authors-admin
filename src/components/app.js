/*eslint-disable strict */ // Disable check because we need a global variable for jQuery (Bootstrap)

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({ 
	render: function() {
		return (
			<div>
				<Header/>
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div> 
		);
	}
});

module.exports = App;