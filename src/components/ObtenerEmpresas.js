import React, { Component } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';
import Select from 'react-select'

export default class ObtenerEmpresas extends Component {

    state = {
        enterprises: [],
        selectedEnterprise: {},
        isloading: false
    }

    async componentDidMount() {
            const res = await axios.get('https://localhost:5189/api/enterprise/').then(response => {
            console.log(JSON.stringify(response));
            var list = response.data.value.map(function (element) {
                var option = { value: element.id, label: element.name }
                console.log(option);
                return option;

            });

            var selectedEnterprise = list[0];
            this.setState({
                ...this.state,

                enterprises: list,

                selectedEnterprise: selectedEnterprise

            })
        }).catch(e => alert(JSON.stringify(e)));

        console.log(this.state.enterprises);
    }

    render() {
        return (
            <div className='select-enterprise'>
                <Select options={this.state.enterprises} />
            </div>

        )
    }
}