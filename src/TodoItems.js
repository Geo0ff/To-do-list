import React, { Component } from "react";

class Todoitems extends Component { 
      constructor(props) { 
          super(props)
          this.createTasks = this.createTasks.bind(this);
      }
     

    createTasks(item) { 
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

    delete(key) { 
        console.log("Key is: " + key);
        this.props.delete(key);
    }
 render() { 
     var todoEntries = this.props.entries;
     var listItem = todoEntries.map(this.createTasks)
     
     return (
      <ul className="theList">
          {listItem}
      </ul>
     );
 }
}

export default Todoitems;