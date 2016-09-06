import React from 'react';

export default class NotFound extends React.Component{
    constructor(props){
        super(props);
        // this.props.key = this.props.location.key;
    }
    render(){
        return(
            <div className="ibox">
                <div className="ibox-content text-center">
                    <h1 className="no-top-margin">404: Not Found</h1>
                    <p>
                        Link seems invalid. You may have loaded an outdated page or link. Try one from the Menu.
                    </p>

                </div>
            </div>
        );
    }
}