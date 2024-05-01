import React from "react";
import { Link } from "react-router-dom";
import '../css/Nav.css';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/volcanoes">Volcanoes List</Link>
                </li>
                <li>
                    <Link to="/user/register">Register/Login</Link>
                </li>
            </ul>
        </nav>
    );
}  