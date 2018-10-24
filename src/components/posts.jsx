import React, {Component} from 'react';
import axios from 'axios';
import PostTemplate from './postTemplate.jsx'
import store from "../redux/store/index";

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: []
        };
        this.getData = this.getData.bind(this);
    }

    getData() {
        axios.get(`${store.getState().baseUrl}/posts`).then(res => {
            this.setState({allPosts: res.data});
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className='container'>
                {this.state.allPosts.map((item, index) => {
                    return <div key={index}>
                        <PostTemplate id={item.id} title={item.title} body={item.body}/>
                    </div>
                })}
            </div>
        );
    }
}

