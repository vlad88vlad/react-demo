import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Post from '../imgs/post.svg'
import store from "../redux/store/index";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

export default class PostTemplate extends Component {
    constructor(props) {
        super(props);
        this.colorsLoading = store.getState().colorsLoading;
    }


    componentDidMount() {
    }

    render() {
        return (
            <div className='post shadow'>
                <img src={Post}/>
                <SkeletonTheme color={this.colorsLoading.color} highlightColor={this.colorsLoading.highlightColor}>
                    <div>
                        <div className='title'>{this.props.title || <Skeleton/>} </div>
                        <div>{this.props.body || <Skeleton/>} </div>
                        {this.props.id ?
                            <div className='detail-link'>
                                <Link  to={`/post/${this.props.id}`}>detail</Link>
                            </div> : null}
                    </div>
                </SkeletonTheme>
            </div>
        );
    }
}

