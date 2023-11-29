import React from 'react';
import s from './header.module.css';

import logo from './img/logo.svg';
import search from './img/search.svg';
import favorites from './img/favorites.svg';
import cart from './img/cart.svg';

function Header() {
    return (
        <header>
            <div className="container">
                <div className={s.header__wrapper}>
                    <a href="../../../public/index.html"><img src={logo} alt="logotype"/></a>
                    <ul className={s.menu__list}>
                        <li className={s.menu__item}><a href="../../../public/index.html" className={s.item__link}>HOME</a></li>
                        <li className={s.menu__item}><a href="#shop" className={s.item__link}>SHOP</a></li>
                        <li className={s.menu__item}><a href="#blog" className={s.item__link}>BLOG</a></li>
                        <li className={s.menu__item}><a href="#sale" className={s.item__link}>SALE</a></li>
                        <li className={s.menu__item}><a href="#contact-us" className={s.item__link}>CONTACT US</a></li>
                        <li className={s.menu__search}>
                            <a href="#search" className={s.search__item__link}>
                                <img src={search} alt="search-logo"/>
                                SEARCH
                            </a>
                        </li>
                    </ul>
                    <div className={s.users__corner}>
                        <ul className={s.loggin__list}>
                            <li className={s.loggin__item}>
                                <a href="#sign-in">SIGN IN</a>
                            </li>
                            <li className={s.loggin__item}>
                                <a href="#create-account">CREATE AN ACCOUNT</a>
                            </li>
                        </ul>
                        <div className={s.account}>
                            <div className={s.account__item}>
                                <a href="#favorites">
                                    <img src={favorites} alt="favorites"/>
                                </a>
                            </div>
                            <div className={s.shopping__cart}>
                                <a href="#cart">
                                    <img src={cart} alt="shopping-cart"/>
                                    <div>
                                        <h3>Shopping Cart</h3>
                                        <h2>0,00 EUR</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;