import { Component } from 'react/cjs/react.production.min';
import classes from './User.module.css';

class User extends Component{

  componentWillUnmount(){
    console.log("User will unmount")
  }

  render(){
    return <li className={classes.user}>{this.props.name}</li>
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
// componentDidMount()   ========== useEffect(()=>{}, [])
// componentDidUpdate() ========== useEffect(()=>{},[someInput])
// componentWillUnmount() ======== UseEffect(()=>{ return ()=>{}},[])