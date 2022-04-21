import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsByCategory } from "../../functions/postsByCategory";
import PostsByCategoryRow from "../posts-by-category-row/PostsByCategoryRow";

export default function ShowPostsByCategory() {
    const [postsByCategory, setPostsByCategory] = useState([]);
    const { categoryId } = useParams();

    getPostsByCategory(categoryId)
    .then(postsByCategory => setPostsByCategory(postsByCategory));

    return (
        <section>
            <div>
                {postsByCategory.map(postByCategory => 
                    <
                        PostsByCategoryRow key={postByCategory.id} postByCategory={postByCategory} 
                    />
                )}
            </div>
        </section>

    
    );
}