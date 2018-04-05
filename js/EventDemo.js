
class EventDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('inside constructor');
        this.launchClock();
        this.state = {
            currentTime: new Date().toLocaleString()
        };
    }
    launchClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter,
                currentTime: new Date().toLocaleString()
            });
        }, 10000);
    }
    render() {
        console.log('inside render');
        return React.createElement(
            'h1',
            null,
            ' retunr '
        );
    }
}

class Logger extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    componentWillMount() {
        console.log('componentWillMount is triggered');
    }
    componentDidMount(e) {
        console.log('componentDidMount is triggered');
        console.log('DOM node: ', ReactDOM.findDOMNode(this));
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps is triggered');
        console.log('new props: ', newProps);
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate is triggered');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
        return true;
    }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate is triggered');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate is triggered');
        console.log('new props: ', oldProps);
        console.log('old props: ', oldState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return React.createElement(
            'h1',
            null,
            this.props.time
        );
    }
}

export default EventDemo;