import React, { useCallback, useEffect, useState } from "react"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { debounce } from "lodash"
import { useSelector } from "react-redux"
import { Card } from "../../components/Card"
import { SearchInput } from "../../components/SearchInput"
import { api } from "../../api"
import { Character } from "../../types/Character.type"
import { Container } from "./styles"
import { PaginationBtn } from "../../components/PaginationBtn"
import { PaginationDataType } from "../../types/PaginationData.type"
import { getUrlId } from "../../utils/getUrlId"
import { SelectBtn } from "../../components/SelectBtn"
import { RootState } from "../../store"
import { FavouriteCharacter } from "../../store/slices/Character.slice"

export default function Home() {
  const [data, setData] = useState<PaginationDataType>()
  const [characters, setCharacters] = useState<Character[]>([])
  const [searchInput, setSearchInput] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [favouriteSelected, setFavouriteSelected] = useState<boolean>(false)

  const favouriteCharacter = useSelector((state: RootState) => state.character)

  const getData = useCallback(async () => {
    try {
      const response = await api.get(`people/?page=${currentPage}`)

      const returnedData = await response.data

      setData(returnedData)
      setCharacters(returnedData.results)
    } catch {
    } finally {
      setIsLoading(false)
    }
  }, [currentPage])

  const getFilteredData = useCallback(async () => {
    try {
      const response = await api.get(`people/?search=${searchInput}`)

      const returnedData = await response.data

      setData(returnedData)
      setCharacters(returnedData.results)
    } catch {
    } finally {
      setIsLoading(false)
    }
  }, [searchInput])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value)
  }

  const debouncedOnChange = debounce(handleInputChange, 500)

  useEffect(() => {
    setIsLoading(true)
    getData()
  }, [getData])

  useEffect(() => {
    setIsLoading(true)
    getFilteredData()
  }, [getFilteredData])

  return (
    <Container>
      <div className="header">
        {!searchInput && !favouriteSelected && (
          <div className="pagination">
            {currentPage === 1 ? (
              <div />
            ) : (
              <PaginationBtn onClick={() => setCurrentPage(currentPage - 1)}>
                <MdArrowBackIosNew />
              </PaginationBtn>
            )}

            {currentPage < 3 ? (
              <>
                <PaginationBtn
                  isActive={currentPage === 1}
                  onClick={() => setCurrentPage(1)}>
                  1
                </PaginationBtn>
                <PaginationBtn
                  isActive={currentPage === 2}
                  onClick={() => setCurrentPage(2)}>
                  2
                </PaginationBtn>
                <PaginationBtn
                  isActive={currentPage === 3}
                  onClick={() => setCurrentPage(3)}>
                  3
                </PaginationBtn>
              </>
            ) : (
              <>
                <PaginationBtn onClick={() => setCurrentPage(currentPage - 1)}>
                  {currentPage - 1}
                </PaginationBtn>
                <PaginationBtn isActive>{currentPage}</PaginationBtn>
                {data?.next && (
                  <PaginationBtn
                    onClick={() => setCurrentPage(currentPage + 1)}>
                    {currentPage + 1}
                  </PaginationBtn>
                )}
              </>
            )}

            {!data?.next ? (
              <div />
            ) : (
              <PaginationBtn onClick={() => setCurrentPage(currentPage + 1)}>
                <MdArrowForwardIos />
              </PaginationBtn>
            )}
          </div>
        )}

        <div className="select">
          <SelectBtn
            type="button"
            isSelected={favouriteSelected === false}
            onClick={() => setFavouriteSelected(false)}>
            Все персонажи
          </SelectBtn>
          <SelectBtn
            isSelected={favouriteSelected === true}
            onClick={() => setFavouriteSelected(true)}>
            Ваши избранные
          </SelectBtn>
        </div>

        {!favouriteSelected && (
          <SearchInput
            type="text"
            placeholder="Введите имя персонажа..."
            onChange={(event) => debouncedOnChange(event)}
          />
        )}
      </div>

      {isLoading ? (
        <div className="loading">
          <span>Ищем персонажей с помощью Силы...</span>
        </div>
      ) : !favouriteSelected ? (
        <div className="cards">
          {characters.map((character) => (
            <Card
              name={character.name}
              key={character.name}
              id={getUrlId(character.url)}
              isFavourited={favouriteCharacter.some(
                (favourite) => favourite.name === character.name
              )}
            />
          ))}
        </div>
      ) : (
        <div className="cards">
          {favouriteCharacter.length > 0 &&
            favouriteCharacter.map((character: FavouriteCharacter) => (
              <Card
                name={character.name}
                key={character.name}
                id={character.id}
                isFavourited
              />
            ))}

          {favouriteCharacter.length === 0 && (
            <div className="no-favourites">
              <span>Вы не добавили ни одного персонажа в избранное 🥺</span>
            </div>
          )}
        </div>
      )}
    </Container>
  )
}
