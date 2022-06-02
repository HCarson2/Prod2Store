const React = require('react'); 
const property = require('../models/homes');
//---My styling---
const myColor = {
                 backgroundImage: "url('https://media.istockphoto.com/photos/engineer-meeting-for-an-architectural-project-working-with-partner-picture-id1330168130?b=1&k=20&m=1330168130&s=170667a&w=0&h=vM84Dd1d3N4hhUDvf2mcOGQGaK_vBhljyQrsp17jOoE=')",
                 backgroundSize: "cover"};



class Index extends React.Component {

    render() {
        const {Parcel} = this.props;
    
        return (
            
            <div>
                <body style={myColor}>
                    
                
        
                <h1>Let's Build Your Home</h1>
                <ul>
                    {Parcel.map((Parcel, i) => {
                        return(
                            <li>
                             <a href={`/homes/${i}`}>{Parcel.name}</a><br/>{' '}Choose Your Design! <br />
                             
                             <br></br>
                    
                            </li>
                        );

                    })}
                </ul>
                <nav>
                <button><a href="/">Welcome Page</a></button>||||<button><a href="/homes/new">Create a New Home</a></button>
        </nav>
        </body>
        </div>
            
        );
    }
}

// function capitalize(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }



module.exports = Index;

