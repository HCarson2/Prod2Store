const React = require('react');
//--My styling--
const myColor = {backgroundColor: "#DEEDC9",
                 backgroundImage: "url('https://media.istockphoto.com/photos/new-construction-of-a-house-framed-new-construction-of-a-house-a-new-picture-id888977462?k=20&m=888977462&s=612x612&w=0&h=LoTEP9ys2JP4kJgBumLvXPkuKuwBmMyou1NgedqvFjE=')",
                 backgroundSize: 'cover'};

class Welcome extends React.Component {

    render () {
       
        return (
            <div>
                                <body style={myColor}>
                <h3>Welcome To</h3><br />
                <h1>HAROLD THE BUILDER</h1><br />
                <h3>Click below to find your Home design or create one!</h3>
                <button><a href="/homes/">Go To Designs</a></button>  
                </body>          
                </div>
        );

    }
    
};

module.exports = Welcome;