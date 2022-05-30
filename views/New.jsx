const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>Add New Home Form</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/homes" method="POST">
              Name:      <input type="text" name="Name" /><br/>
              Price:     <input type="text" name="Price" /><br/>
              Address:   <input type="text" name="Address" /><br/>
              Image URL: <input type="url" name= "Url" />
              <input type="submit" name="" value="Create Home"/>
            </form>
        </div>);
    }
  }


module.exports = New;