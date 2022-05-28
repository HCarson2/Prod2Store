const React = require('react')

class Show extends React.Component {
    render () {
        const homes = this.props.homes;
        homes.img.includes('.jpg')? homes.img: homes.img += '.jpg';
        console.log(homes.img)
        return(
            <>
                <h1> We Have your New Home </h1>
                <h2>
                    {homes.name} <br></br>
                    <img src={homes.img}></img>
                </h2>
                <a href={'/homes'}>Back</a>
            </>       
        );
    }
}
module.exportsm = Show;