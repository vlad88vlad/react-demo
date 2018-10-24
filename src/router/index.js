import React, {Component} from 'react';

import {Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config';

import Posts from '../components/posts.jsx'
import Post from '../components/post.jsx'
import Contact from '../components/contact.jsx'
import About from '../components/about.jsx'
import NotFound from '../components/notFound.jsx'

export const routes = [
    {
        path: '/',
        exact: true,

        component: Posts
    }, {
        path: '/contact',
        exact: true,

        component: Contact
    }, {
        path: '/about',
        exact: true,

        component: About
    }, {
        path: '/post/:id',
        exact: true,

        component: Post
    }, {
        path: '*',
        restricted: false,
        component: NotFound
    }
]

export default class Routing extends Component {
    render() {
        return (


            <Switch>
                {renderRoutes(routes)}
            </Switch>
        )

    }
}


