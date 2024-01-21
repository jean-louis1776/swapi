import React from "react"
import { Link } from "react-router-dom"
import { HeaderContainer } from "./styles"
import logo from "/img/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Logo Star Wars" />
      </Link>
    </HeaderContainer>
  )
}
