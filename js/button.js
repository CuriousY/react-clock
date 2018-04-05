class Button extends React.Component {

    handleEvent(event) {
        console.log(this, event);
    }

    render() {
        return React.createElement(
            "button",
            { onClick: this.handleEvent.bind(this) },
            "Save"
        );
    }
}

export default Button;