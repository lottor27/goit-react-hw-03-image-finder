import { Component } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


class Searchbar extends Component {
    state = {
        searchQueryOriginal: ''
    }

    handleChange = (e) => {
        this.setState({ searchQueryOriginal: e.currentTarget.value.toLowerCase().trim() })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchQueryOriginal } = this.state;
        if (searchQueryOriginal === '') {
            toast.warning('Enter a search query!');
            return
        }
        this.props.onSubmit(searchQueryOriginal)
        this.setState({ searchQueryOriginal: '' });
    }
 

    

    render() {
        return (
            <header className="Searchbar" >
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">

                    Search
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.searchQueryOriginal}
                    />
                </form>
            </header>
        )
    }
}
export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func
}
