export default function CategoriesRow(props) {
    return (
        <div>
            <p>{props.category.id}</p>
            <p>{props.category.slug}</p>
        </div>
    );
}