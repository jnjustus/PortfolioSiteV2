import * as React from 'react'
import { Link } from 'gatsby';
import './Header.scss';

export const Header = ({path}) => {
console.log('header', path);

return (
<header className="headerContainer">
    <div className={
        path === '/ThreeDee' ? 'active' : 'inactive'
    }>
        <Link to='/ThreeDee'>3D</Link>
    </div>
    <div className={
        path === '/' ? 'active' : 'inactive'
    }>
        <Link to='/'>About Me</Link>
    </div>
    <div className={
        path === '/TwoDee' ? 'active' : 'inactive'
    }>
        <Link to='/TwoDee'>2D</Link>
    </div>
</header>
);
}
