import React, {Component} from 'react';
import User from "../imgs/user.svg";

export default class CommentTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {}
    render() {
        return (
            <div className='comment shadow'>
                <img src={User}/>
                <div>
                    <div className='title'>{this.props.name} </div>
                    <div>{this.props.body} </div>
                </div>
            </div>
        );
    }
}

