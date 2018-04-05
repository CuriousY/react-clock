class Button extends React.Component{

    handleEvent(event){
        console.log(this,event)
    }

    render() {
        return(
                 <button onClick={this.handleEvent.bind(this)}>Save</button>
        )
    }
}

export default Button