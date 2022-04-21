import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCategories } from "../../functions/categories";
import CategoriesRow from "../categories-row/CategoriesRow";

export default function ShowCategory() {
    const [categories, setCategories] = useState([]);

    getCategories().then(categories => setCategories(categories));

    return (
        <div>
            {categories.map(category => <CategoriesRow key={category.id} category={category} />)}
        </div>
    )
}