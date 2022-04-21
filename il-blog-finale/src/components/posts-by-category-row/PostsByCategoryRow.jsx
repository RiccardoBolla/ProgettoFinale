export default function PostsByCategoryRow(props) {
    return (
        <div>
            <h1>{props.postByCategory.title}</h1>
            <elem dangerouslySetInnerHTML={{ __html: props.postByCategory.content }} />
        </div>
    )
}