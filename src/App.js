import React, { Component } from "react";
// import axios from 'axios';
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "",
      inventoryList: [
        (product_name = "speaker"),
        (price = "$19"),
        (image_url = "//")
      ]
    };
  }
  handleChange(value) {
    this.setState({ message: value });
  }
  // resetInput() {
  //   this.setState();
  // }
  render() {
    console.log(this.state);
    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <button>Cancel</button>
        <button>Add to Inventory</button>
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
