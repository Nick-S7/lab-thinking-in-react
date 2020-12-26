import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {
    state = {
        products: this.props.products.data,
        
    }
//check for display 
    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,

        });
      };

    handleSearch = (event) => {
        const { value } = event.target;
        this.onChange(event);
        const filteredProds = this.state.products.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) && item.name.toLowerCase().includes(value.toLowerCase())
        );
        this.setState({
          showProducts: filteredProds,
        });
      };


    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar handleSearch={this.handleSearch} />
                <ProductTable products={this.state.showProducts} />
            </div>
        )
    }
}