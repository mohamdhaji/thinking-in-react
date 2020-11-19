import './App.css';
import './Resources/style.css';
import React, { Component } from 'react';
import Category from './components/Category';
import Search from './components/Search';
class App extends Component {
  state = {
    searchTerm: '',
    stockedCheck: false,
    data: [
      {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Football',
      },
      {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball',
      },
      {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: false,
        name: 'Basketball',
      },
      {
        category: 'Electronics',
        price: '$99.99',
        stocked: true,
        name: 'iPod Touch',
      },
      {
        category: 'Electronics',
        price: '$399.99',
        stocked: false,
        name: 'iPhone 5',
      },
      {
        category: 'Electronics',
        price: '$199.99',
        stocked: true,
        name: 'Nexus 7',
      },
    ],
  };

  onChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState((prevState) => {
      return { [target.id]: value };
    });
  };

  render() {
    const { stockedCheck, searchTerm, data } = this.state;

    const categories = data.reduce((acc, curr) => {
      let search = curr.name.toLowerCase().startsWith(searchTerm.toLowerCase());
      if (stockedCheck) {
        search = search && curr.stocked;
      }
      if (search) {
        if (acc[curr.category]) {
          acc[curr.category].push(curr);
        } else {
          acc[curr.category] = [curr];
        }
      }
      return acc;
    }, {});
    return (
      <div className="App">
        <Search
          searchTerm={searchTerm}
          stockedCheck={stockedCheck}
          onChange={this.onChange}
        ></Search>
        <div className="main-section">
          <div>
            <span
              style={{
                marginRight: '70px',
                fontWeight: 'bold',
              }}
            >
              Name
            </span>
            <span
              style={{
                fontWeight: 'bold',
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
