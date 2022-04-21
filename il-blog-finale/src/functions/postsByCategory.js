import { PostByCategory } from "../models/PostsByCategory";
import { categoryObjToModel } from "./categories"

export const getPostsByCategory = (categoriesid) => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/posts${categoriesid ? `?categories=${categoriesid}` : ``}`)
    .then(resp => resp.json())
    .then(
        postsByCategory => postsByCategory.map(
            postByCategory => postByCategoryObjToModel(postByCategory)
        )
    );
};

export const postByCategoryObjToModel = postByCategory => new PostByCategory(postByCategory.id, postByCategory.title.rendered, postByCategory.content.rendered, postByCategory.categories);