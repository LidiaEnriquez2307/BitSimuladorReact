import React, { Component } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';
import Select from 'react-select'


export default class ObtenerEmpresas extends Component {
    state = {
        forms: [],
        selectedForms: {},
        isloading: false
    }

    async componentDidMount() {
        const res = await axios.get('https://localhost:5189/api/form/').then(response => {
            console.log(JSON.stringify(response));
            var list = response.data.value.map(function (element) {
                var option = { lable: element.id, label: element.question}
                console.log(option);
                return option;
            });

            var selectedForms = list[0];
            this.setState({
                ...this.state,

                forms: list,

                selectedForms: selectedForms
            })
        }).catch(e => alert(JSON.stringify(e)));
        console.log(this.state.forms);
    }

    render() {
        return (
           
              <div className='select-enterprise'>
              <Select options={this.state.forms} />
          </div>
        )
    }
}