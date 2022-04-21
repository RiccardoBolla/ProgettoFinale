import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { getCategories } from '../../functions/categories';

let init = false;

const Navbar = (props) => {

  const [categories, setCategories] = useState([]);

  if (!init) {
    getCategories().then(categories => {
      init = true;
      setCategories(categories);
    });

  }

  const links = categories.map(category => <li><NavLink className="dropdown-item" to={`/categories/${category.id}/posts`}>{ category.slug }</NavLink></li>);
  return (


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Il Blog</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/chi-siamo'>Chi Siamo</NavLink>
            </li>
            <li className="nav-item">
              <li><NavLink className="nav-link" to='/contatti'>Contatti</NavLink></li>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorie
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                { links }
              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>

  )
}

export default Navbar;