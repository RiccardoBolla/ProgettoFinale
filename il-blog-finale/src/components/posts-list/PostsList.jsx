import React from "react";
import { getPosts } from "../../functions/posts";
import PostsListRow from "../posts-list-row/PostsListRow";

export default class PostsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        getPosts().then(posts => this.setState({ posts }));
    }

    render() {
        const rows = this.state.posts.map(post => <PostsListRow key={post.id} post={post} />)
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </>
        )
    }
}