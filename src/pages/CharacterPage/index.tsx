import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCharacter } from "../../hooks/useCharacter"
import { api } from "../../api"
import { Character } from "../../types/Character.type"
import { CharacterContainer, Container } from "./styles"
import logo from "/img/logo.svg"

export default function CharacterPage() {
  const [data, setData] = useState<Character>()
  const { homeWorld, isLoading: isLoadingCharacter } = useCharacter(data)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { id } = useParams()

  const getCharacterData = useCallback(async () => {
    try {
      const response = await api.get(`/people/${id}`)
      setData(response.data)
    } catch {
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getCharacterData()
  }, [getCharacterData])

  return (
    <Container>
      {isLoading && isLoadingCharacter ? (
        <div className="loading">
          <span>Ищем информацию о персонаже с помощью Силы...</span>
        </div>
      ) : (
        <CharacterContainer>
          <div className="character-data">
            <div className="character-data-details">
              <div className="left-data">
                <img src={logo} alt="img" />
              </div>

              <div className="right-data">
                <h1>{data?.name}</h1>
                <p>
                  Родная планета: <span>{homeWorld.name}</span>
                </p>

                <p>
                  Дата рождения: <span>{data?.birth_year}</span>
                </p>

                <p>
                  Пол: <span>{data?.gender}</span>
                </p>

                <p>
                  Рост: <span>{data?.height} cm</span>
                </p>

                <p>
                  Вес: <span>{data?.mass} kg</span>
                </p>

                <p>
                  Цвет кожи: <span>{data?.skin_color}</span>
                </p>

                <p>
                  Цвет глаз: <span>{data?.eye_color}</span>
                </p>

                <p>
                  Цвет волос: <span>{data?.hair_color}</span>
                </p>
              </div>
            </div>
          </div>
        </CharacterContainer>
      )}
    </Container>
  )
}
