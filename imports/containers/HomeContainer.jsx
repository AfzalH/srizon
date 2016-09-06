import {createContainer} from 'meteor/react-meteor-data';
import Home from '../components/Home';

export default createContainer(()=> {
    return {
        abc : 1
    };
}, Home);