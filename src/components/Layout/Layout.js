import React from "react"
import "./layout.scss"
import { Title, Link, Meta, Style} from "react-head";
import { Header } from '../../components';

export function Layout({ path, children }) {
  return (
    <div>
      <Link rel="preconnect" href="https://fonts.googleapis.com"/>
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@300;400;600;700&display=swap" rel="stylesheet"/>
        <Header path={path}/>
        <div className="layout">{children}</div>
    </div>
  );
}