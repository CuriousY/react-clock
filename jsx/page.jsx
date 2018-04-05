
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';

class Page extends React.Component {
    constructor(props){
        console.log('inside constructor ');
        super(props);
        this.launchClock();
        this.state = {currentTime : (new Date()).toLocaleString()}
        this.hstyle = {color:'blue'}
    }

    launchClock(){
        setInterval(() => {
            this.setState({currentTime : (new Date()).toLocaleString()})
        },1000);
    }

    render(){
        console.log('inside render ');
        return(

            <div>

             <h1 style={this.hstyle}>Current time is {this.state.currentTime}</h1>
            
            </div>
        )
    }

}

// render() {

//     return (
//         <div>
//             <Header />
//             <Body />
//             <Footer />
//         </div>
//     )
// }

export default Page;