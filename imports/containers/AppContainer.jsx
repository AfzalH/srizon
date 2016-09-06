import {createContainer} from 'meteor/react-meteor-data';
import App from '../components/App';

export default createContainer(()=> {
    return {
        abc : 1
    };
}, App);