import { el } from "date-fns/locale";
import React from "react";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showHide: true,
            menuMobile: true,
        };
        
        this.display = this.display.bind(this);
    }

    componentDidMount() {
        this.checkScreen();
        window.addEventListener('resize',  this.checkScreen.bind(this));
    }

    display() {
        this.setState(state => ({
            showHide: !this.state.showHide
        }));
    }

    checkScreen() {
        console.log("I've been resized!");
        if (window.matchMedia("(max-width: 768px)").matches) {
            this.setState(state => ({
                menuMobile: true
            }));
        }

        else {
            this.setState(state => ({
                menuMobile: false
            }));
        }
    }

    render() {
        return (
            <div>
                <div id="menuBtn" onClick={this.display} >
                    <i className={this.state.showHide ? 'fas fa-bars' : 'fas fa-times'}></i>
                </div>
                <div className="menuMobile" style={{display: (this.state.showHide && this.state.menuMobile) ? 'none' : 'block'}}>
                    <div className="items" id="menu" style={{display: (this.state.showHide && this.state.menuMobile) ? 'none' : 'block'}}>
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

export default Menu;