import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showHide: false,
            menuMobileIcon: 'fa-bars'
        };
        
        this.display = this.display.bind(this);
    }


    display() {
        this.setState(state => ({
            showHide: !this.state.showHide
        }));
    }

    render() {
        return (
            <div>
                <div id="menuBtn"  onClick={this.display} >
                    <i className={this.state.showHide ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className="menuMobile" style={{display: this.state.showHide ? 'block' : 'none'}}>
                    <div className="items" id="menu" style={{display: this.state.showHide ? 'block' : 'none'}}>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Toggle;