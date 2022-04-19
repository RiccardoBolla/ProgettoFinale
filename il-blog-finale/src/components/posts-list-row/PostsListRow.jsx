export default function PostsListRow(props) {
    return (
        <tr>
            <td>{props.post.id}</td>
            <td>{props.post.date}</td>
            <td>{props.post.title}</td>
            <td>{props.post.content}</td>
        </tr>
    );
}