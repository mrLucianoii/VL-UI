"use strict";

var service = [
	 {
		cat: "service",
		title: "Forensic Mapping",
		hash: ""
	},
	 {		
	 	cat: "service",
		title: "Forensic Animation",
		hash: ""

	},
	{
		cat: "service",
		title: "Strategy Consulting",
		hash: ""
	},
	{
		cat: "service",
		title: "Trial Technology",
		hash: ""

	},
	{
		cat: "service",
		title: "Settlement Documentaries",
		hash: ""
	},
	{
		cat: "company",
		title: "About Visual Law",
		hash: ""
	},
	{
		cat: "company",
		title: "Mark Johnson",
		hash: ""
	}
]
// CSS will not be dynamic 
/*
var serviceLinks = function(obj){

	var formatedArr = sections.map(function(obj, i) {
		
		if (obj.cat === "service"){
			var servObj = {};
			servObj[obj.cat] = obj.title;
			servObj.hash = obj.hash;
			return servObj;
		}
	});
}*/

//Remove or add class to animate submenu
var classAnimate = function(classID){
	var subMenu = document.getElementsByClassName(classID)[0].className;

	 if (subMenu === "subMenu")
		document.getElementsByClassName(classID)[0].className += " active";
	 else
		document.getElementsByClassName(classID)[0].className = "subMenu";

}; 

var SubLinks = React.createClass({
	handleClick: function() {
		classAnimate("subMenu");
		return 1;
	},
  	render: function() {

      var linkList = sections.map(function(obj, i){

          return <li key={i} className="" >
          	<a className="testA" onClick={this.handleClick}> {obj.title} </a>
          	</li>;  
      }, this);

     return <ul > { linkList } </ul>;
  }
});

var SubMenu = React.createClass({
  	render: function() {
      
      return <div className="subMenu">
	  	<SubLinks />
	  </div>;

  }
});


var MainLinks = React.createClass({
	handleClick: function() {

	console.log("Inside Main Links");
	classAnimate("subMenu");
	 return 1;
	},

  	render: function() {
      var linkList = sections.map(function(obj, i){
          return <li key={i} className="" >
          	<a className="testA" onClick={this.handleClick} > {obj.title} </a>
          		<SubMenu />
          	</li>;  
      }, this);

     return <ul > { linkList } </ul>;
  }
});


var MainMenu = React.createClass({
	handleClick: function() {
	 classAnimate("subMenu");
	 return 1;

	},
	render: function() {
	return <section id="navPage" className="text-center">
	<h1> Visual Law </h1>
	  <a onClick={this.handleClick} >Test Button</a>
	  	  	<MainLinks />

	</section>;
	}
});
ReactDOM.render(<MainMenu />, document.getElementById('navPage'));
