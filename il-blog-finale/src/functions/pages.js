import { Page } from "../models/Pages";

export const getPages = (slug) => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/pages${slug ? `?slug=${slug}` : ``}`)
    .then(resp => resp.json())
    .then(pages => pages.map(page => pageObjToModel(page)));
};

export const pageObjToModel = page => new Page(page.id, page.title.rendered, page.content.rendered, page.slug);