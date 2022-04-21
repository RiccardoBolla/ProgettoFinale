import { Category } from "../models/Categories";

export const getCategories = () => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/categories`)
    .then(resp => resp.json())
    .then(categories => categories.map(category => categoryObjToModel(category)));
};

export const categoryObjToModel = category => new Category(category.id, category.slug, category.name);