import { Component } from "react";

import PropTypes from 'prop-types';

class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.props.onKeydownClose);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.props.onKeydownClose);
    }
    render() {
        
        return (
            <div 
            id="modal-backdrop" className="Overlay" 
            onClick={this.props.onBackdropClose}>
                <div 
                id="modal-window" className="Modal">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Modal;

Modal.propTypes = {
    onSubmit: PropTypes.func,
}
