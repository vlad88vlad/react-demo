import React, {Component} from 'react';
import axios from "axios";
import User from "../imgs/user.svg";
import PostTemplate from './postTemplate.jsx'
import CommentTemplate from './commentTemplate.jsx'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import ExpandLess from 'material-react-icons/ExpandLess';
import ExpandMore from 'material-react-icons/ExpandMore';
import Email from 'material-react-icons/Email';
import Phone from 'material-react-icons/Phone';
import Web from 'material-react-icons/Web';
import PersonOutline from 'material-react-icons/PersonOutline';
import store from "../redux/store";


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            user: {},
            comments: [],
            more: false
        };
        this.getPostById = this.getPostById.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.getCommentsById = this.getCommentsById.bind(this);
        this.isMore = this.isMore.bind(this)
    }

    getUserById(id) {
        axios.get(`${store.getState().baseUrl}/users/${id}`).then(res => {
            this.setState({user: res.data});
        })
    }

    getCommentsById(id) {
        axios.get(`${store.getState().baseUrl}/posts/${id}/comments`).then(res => {
            this.setState({comments: res.data});
        })
    }

    getPostById(id) {
        axios.get(`${store.getState().baseUrl}/posts/${id}`).then(res => {
            this.setState({post: res.data});
            this.getUserById(res.data.userId)

        }).catch((error) => {
            this.props.history.push('/');
            console.log(error);
        })

    }

    isMore() {
        this.setState({more: !this.state.more});

    }

    componentDidMount() {
        store.subscribe(() => console.log('Look ma, Redux!!'))
        this.getPostById(this.props.match.params.id)
        this.getCommentsById(this.props.match.params.id)

    }

    render() {
        return (
            <div>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <div className='user-info'>
                        <div className='general'>
                            <img src={User}/>
                            <div className='content'>

                                <div>
                                    <PersonOutline className='icon'/>
                                    {this.state.user.name || <Skeleton width={150}/>}
                                </div>
                                <div>
                                    <Email className='icon'/>
                                    {this.state.user.email ?
                                        <a href={`mailto:${this.state.user.email}`}>{this.state.user.email}</a> :
                                        <Skeleton width={150}/>}
                                </div>
                                <div>
                                    <Phone className='icon'/>
                                    {this.state.user.phone || <Skeleton width={150}/>}
                                </div>
                                <div>
                                    <Web className='icon'/>
                                    {this.state.user.website ?
                                        <a href={`http://${this.state.user.website}`}
                                           target='_blank'>{this.state.user.website} </a> :
                                        <Skeleton width={150}/>}
                                </div>
                                <div className='more'>
                                    <div className='line'/>
                                    <div className='content'>
                                        <div className='more-less' onClick={this.isMore}>
                                            {this.state.more ? <ExpandLess/> :
                                                <ExpandMore/>}
                                        </div>

                                    </div>
                                </div>

                                <div className={"additional " + (this.state.more ? 'active' : '')}>
                                    {this.state.user.company ? <div className="description">
                                        <div>Company:</div>
                                        <div>name: {this.state.user.company.name}</div>
                                        <div>catch phrase: {this.state.user.company.catchPhrase}</div>
                                        <div>bs: {this.state.user.company.bs}</div>
                                    </div> : null
                                    }
                                    {this.state.user.address ? <div className="description">
                                        <div>Address:</div>

                                        <div>city: {this.state.user.address.city}</div>
                                        <div>street: {this.state.user.address.street}</div>
                                        <div>suite: {this.state.user.address.suite}</div>
                                    </div> : null
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='container'>
                        <PostTemplate title={this.state.post.title} body={this.state.post.body}/>
                        <h1> comments({this.state.comments.length})</h1>
                        {this.state.comments ?
                            <div>{this.state.comments.map((item, index) => {
                                return <div key={index}>
                                    <CommentTemplate name={item.name} body={item.body}/>

                                </div>
                            })}</div>
                            : <Skeleton count={3}/>
                        }
                    </div>
                </SkeletonTheme>
            </div>
        );
    }
}

