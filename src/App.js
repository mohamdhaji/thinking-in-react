import "./App.css";
import "./Resources/style.css";
import react, { Component } from "react";
import Category from "./components/Category";
import Search from "./components/Search";
class App extends Component {
  state = {
    data: [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football",
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball",
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball",
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch",
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5",
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7",
      },
    ],
  };
  render() {
    const categories = this.state.data.reduce((acc, curr) => {
      if (acc[curr.category]) {
        acc[curr.category].push(curr);
      } else {
        acc[curr.category] = [curr];
      }
      return acc;
    }, {});
    return (
      <div className="App">
        <Search></Search>
        <div className="main-section">
          <div>
            <span
              style={{
                marginRight: "70px",
                fontWeight: "bold",
              }}
            >
              Name
            </span>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Price
            </span>
            {Object.keys(categories).map((category) => {
              return (
                <Category
                  key={category}
                  category={category}
                  data={categories[category]}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
