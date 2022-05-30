const React = require('react'); 
const homes = require('../models/homes');


class Index extends React.Component {

    render() {
        const {homes} = this.props;
        return (
            <>
                <h1>HEY HOMES</h1>
                <ul>
                    {homes.map((homes, i) => {
                        return(
                            <li>
                             <a href={`/homes/${i}`}>{capitalize(homes.name)}</a>{' '} Choose Your New Home!
                             <br></br>
                    
                            </li>
                        )

                    })}
                </ul>
            </>
            
        );
    }
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}





module.exports = Index;

