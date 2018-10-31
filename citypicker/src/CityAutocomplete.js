import React, { Component } from 'react';
import AutoComplete from "./AutoComplete";

import { dataKota } from "./data/indonesia";

class CityAutocomplete extends Component {
    handleChangeCity = (selectedOption, name) => {
        this.setState({ selectedOption: selectedOption.value });
      };
      handleAutocompleteChange = (name, value) => {
        this.setState({
          [name]: value
        });
      };
    render() {
        return (
            <div>
                <AutoComplete
                    value={this.state[this.props.name]}
                    suggestions={dataKota}
                    placeholder={"Pilih kota"}
                    onChange={selectedOption =>
                      this.handleChangeCity(selectedOption, this.props.name)
                    }
                    onValueChange={value =>
                      this.handleAutocompleteChange(this.props.name, value)
                    }
                  />
            </div>
        );
    }
}

export default CityAutocomplete;