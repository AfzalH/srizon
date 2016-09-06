import {createContainer} from 'meteor/react-meteor-data';
import Products from '../components/Products';

export default createContainer(()=> {
    return {
        abc : 1
    };
}, Products);