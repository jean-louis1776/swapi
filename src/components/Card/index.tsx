import { useState } from "react"
import { MdStarBorder, MdStar } from "react-icons/md"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
  setFavouriteCharacter,
  removeFavouriteCharacter,
} from "../../store/slices/Character.slice"
import { CardContainer } from "./styles"
import logo from "/img/logo.svg"

interface CardProps {
  name: string
  id: string
  isFavourited: boolean
}

export function Card({ name, id, isFavourited = false }: CardProps) {
  const [isFavourite, setIsFavourite] = useState<boolean>(isFavourited)
  const dispatch = useDispatch()

  function handleFavourite() {
    isFavourited === false
      ? dispatch(setFavouriteCharacter({ name, id }))
      : dispatch(removeFavouriteCharacter({ name, id }))

    setIsFavourite(!isFavourite)
  }

  return (
    <CardContainer>
      <button type="button" onClick={() => handleFavourite()}>
        {!isFavourite ? <MdStarBorder size={32} /> : <MdStar size={32} />}
      </button>

      <img src={logo} alt="img" />

      <div className="card-name">
        <Link to={`/characters/${id}`}>
          <span>{name}</span>
        </Link>
      </div>
    </CardContainer>
  )
}
