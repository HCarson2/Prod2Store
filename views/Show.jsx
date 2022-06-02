const React = require('react');
//---My styling---
const myColor = {backgroundColor: "#DEEDC9"};

const myImg = {border: "3px solid green",
               width: "600px",
               height: "500px",
               display: "column",
               };

class Show extends React.Component {
    render () {
        const Parcel = this.props.Parcel;
        Parcel.img.includes('.jpg'),('.jpeg')? Parcel.img: Parcel.img += '.jpg';
        console.log(Parcel.img)

       return(
             <div> 
                 <body style={myColor}>
                <h1> We Have Your New Home </h1>
                <h3>
                    {Parcel.name}<br></br>{Parcel.price}<br></br>{Parcel.address} <br />
                    <img style={myImg}src={Parcel.img}></img>
                </h3>
                <button><a href="/">Welcome Page</a></button>||||<button><a href={'/homes'}>Back</a></button>
                </body>
            </div>       
        );
    }
}
module.exports = Show;