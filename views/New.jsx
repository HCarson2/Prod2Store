const React = require('react');
//--My styling--
const myColor = {backgroundColor: "#DEEDC9"};

class New extends React.Component {
  render() {
    return (
        <div> 
          <body style={myColor}>
            
    <nav>
    <button><a href={'/homes'}>Homes/Inventory</a></button>||||
    <button><a href={'/edit'}>Edit Homes Form</a></button>
    </nav>

            <h1>Add New Home Form</h1>
            <form action="/homes" method='POST'>
              Real Name: <input type="text" name='name' placeholder='type..'></input><br />
              Real Price: <input type="text" name='price' placeholder='cost..'></input><br />
              Real address: <input type="text" name='address' placeholder='address'></input><br />
              Real URL: <input type="text" name="img" placeholder='url'></input><br />
              <input type="submit" name='' value ="Create New Home"/>
            </form>
            </body>
        </div>
        );
    }
  }


module.exports = New;