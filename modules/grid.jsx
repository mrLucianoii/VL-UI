'use strict';

var dimensions = function (){
        
        var widthSD = window.innerWidth,
            heightSD = window.innerHeight;  // I don't need this for the elements-- all stems from perfect squares             

            document.getElementById("debug").innerHTML = widthSD + "<br>" + heightSD;

            return widthSD;
        }


var dimSD = {
  sqWidthUnit : function (){
      var wSD = window.innerWidth; // will need to expand this with a ternary operator for cross browser compatability
      return Math.round( ( wSD - (Math.round(13/wSD) ) ) / 4 ) - 13;
  },
  rcHeightUnit : function(){
    
    return dimSD.sqWidthUnit() * 2;
  },
  marginLeft: function(){
    //console.log( Math.round(13/window.innerWidth));
    return 5; // I want to keep an option for the distance between elements to be determined by the width of the browser
  }
};

    console.log( dimSD.sqWidthUnit() );

// Keep grid size responsive
var resizeUpdate = function() {
  dimensions();
  //console.log( dimSD.sqWidthUnit() );

};

window.addEventListener("resize", resizeUpdate );

function CssValues() {
    this.shape = "";
    this.width = 0;
    this.height = 0;
    this.marginLeft = 0
    
}
var squareCSS = new CssValues(),
    rectangleCSS = new CssValues(),
    rectangle2CSS = new CssValues();

squareCSS.shape = "square";
rectangleCSS.shape = "rectangle";
rectangle2CSS.shape = "rectangle2";

//console.log(squareCSS);

function loadValues(obj) {
  switch (obj.shape){
    case "square":
      obj.width = dimSD.sqWidthUnit();
      obj.height = dimSD.sqWidthUnit();
      obj.marginLeft = dimSD.marginLeft();
      break;
    case "rectangle":
      obj.width = dimSD.sqWidthUnit()*2 + dimSD.marginLeft();
      obj.height = dimSD.sqWidthUnit();
      obj.marginLeft = dimSD.marginLeft();
      break;
   case "rectangle2":
      obj.width = dimSD.sqWidthUnit();
      obj.height = dimSD.sqWidthUnit() *2 +dimSD.marginLeft();
      obj.marginLeft = dimSD.marginLeft();
      break; 
    default :
      console.log("Houston we have a problem in loadValues(): " + obj.shape );

  }
}

var Square = React.createClass({
  getInitialState: function() {
    loadValues( squareCSS );
    return { squareCSS } ;
    
  },
  handleResize: function(e) {
 //   console.log( "inside Resize " + squareCSS.width );
    loadValues( squareCSS );
    this.setState({ squareCSS });

  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);

  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function(){    
    //console.log(this.state);

    return <div className="sq" style={ this.state.squareCSS }></div>;
  }
});

var Rectangle = React.createClass({
  getInitialState: function() {
    loadValues( rectangleCSS );
    return { rectangleCSS } ;
    
  },
  handleResize: function(e) {
  //  console.log( "inside Resize " + squareCSS.width );
    loadValues( rectangleCSS );
     
    this.setState({ rectangleCSS });
  },
    componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);

  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function(){    

    return <div className="sq" style={ this.state.rectangleCSS }></div>;
  }
});  

var Rectangle2 = React.createClass({
  getInitialState: function() {
    loadValues( rectangle2CSS );
    return { rectangle2CSS } ;
    
  },
  handleResize: function(e) {
 //   console.log( "inside Resize " + squareCSS.width );
    loadValues( rectangle2CSS );
     
    this.setState({ rectangle2CSS });
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);

  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function(){    

    return <div className="rc" style={ this.state.rectangle2CSS }></div>;
  }
});  

var Box1 = React.createClass({
  render: function() {
    return <div className="box box1">
         <Square /><Square /><Rectangle />
    </div>;
  }
});
var Box2 = React.createClass({
  render: function() {
    return <div className="box box2">
         <div className="b1Col"><Rectangle2 /></div>
         <div className="b1Col"><Square /><Square /></div>
    </div>;
  }
});

var Box3 = React.createClass({
  render: function() {
    return <div className="box3"><Rectangle2 /><Box1 /><Rectangle2 /></div>;
  }

});

var RowBeta = React.createClass({
  render: function() {

    return <div className="row rowSD"><Rectangle /> <Rectangle /></div>;
  }
});

var Row = React.createClass({
  render: function(){

    return <div className="row rowSD">
              <Box1 /><Box2 />
            </div>;
  }
});
var Row2 = React.createClass({
  render: function(){

    return <div className="row rowSD">
              <Box3 />
            </div>;
  }
});

var RowAlpha = React.createClass({
  
  render: function(){
    
    return <div className="rowAlpha">
        <Row />
        <Row2 />
    </div>;
  }
});

var ColumnAlpha = React.createClass({
    getInitialState: function() {
    var colAlpha = {
      width: window.innerWidth - 57 // '59' is MarginLeft Sum
    }
    return {colAlpha} ;
    
  },
  handleResize: function(e) {
    var colAlpha = {
      width: window.innerWidth - 57
    }     
   // console.log( "inside Resize " + colAlpha );

    this.setState({colAlpha});
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);

  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  render: function(){   
    return <div className="containerSD" style={this.state.colAlpha}>
      <RowAlpha />
      <RowBeta />
    </div>
  }
});

// var ColumnBeta = React.createClass({});  Still needs more conceptualizing ;)

ReactDOM.render(<ColumnAlpha />, document.getElementById('grid'));
 
