import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPages } from "../../functions/pages";
import PageRow from "../page-row/PageRow";

export default function ShowPage() {
    const [pages, setPages] = useState([]);
    const { slug } = useParams();

    getPages(slug).then(pages => setPages(pages));

    return (
        <section>
            <div>
                {pages.map(page => <PageRow key={page.id} page={page} /> )}
            </div>
        </section>
    );
}