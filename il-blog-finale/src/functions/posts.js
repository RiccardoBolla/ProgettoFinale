import { Post } from "../models/Posts";

export const getPosts = () => {
    return fetch('http://wordpress.test/wp-json/wp/v2/posts')
    .then(resp => resp.json())
    .then(posts => posts.map(post => postObjToModel(post)));
};

export const postObjToModel = post => new Post(post.id, post.date, post.title.rendered, post.content.rendered, post.format.image); 