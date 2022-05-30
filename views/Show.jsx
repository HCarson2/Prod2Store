const React = require('react');

class Show extends React.Component {
    render () {
        const homes = this.props.homes;
        homes.img.includes('.jpg'),('.jpeg')? homes.img: homes.img += '.jpg';
        console.log(homes.img)
        return(
            <>
                <h1> We Have your New Home </h1>
                <h3>
                    {homes.name}<br></br>{homes.price}<br></br>{homes.address}
                    <img src={homes.img}></img>
                </h3>
                <a href={'/homes'}>Back</a>
            </>       
        );
    }
}
module.exports = Show;