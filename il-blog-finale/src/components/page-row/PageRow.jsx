export default function PageRow(props) {
    return (
        <div>
            <h1>{props.page.title}</h1>
            <elem dangerouslySetInnerHTML={{ __html: props.page.content }} />
        </div>
    );
}