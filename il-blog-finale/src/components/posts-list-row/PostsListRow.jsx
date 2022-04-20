export default function PostsListRow(props) {
    return (
        <div>         
            <h1>{props.post.title}</h1>
            <elem dangerouslySetInnerHTML={{ __html: props.post.content }} />
        </div>
    );
}

