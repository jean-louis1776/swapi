import { useCallback, useEffect, useState } from "react"
import { Character } from "../types/Character.type"

type HomeWorld = {
  name: string
  url: string
}

export function useCharacter(data: Character | undefined) {
  const [homeWorld, setHomeWorld] = useState<HomeWorld>({
    name: "",
    url: "",
  })
  const [isLoading, setIsLoading] = useState(true)

  const getHomeWorld = useCallback(async () => {
    try {
      if (!data?.homeworld) return
      const response = await fetch(data.homeworld)
      const homeWorldData = await response.json()
      setHomeWorld({
        name: homeWorldData.name,
        url: homeWorldData.url,
      })
    } catch {
    } finally {
      setIsLoading(false)
    }
  }, [data?.homeworld])

  useEffect(() => {
    getHomeWorld()
  }, [getHomeWorld])

  return {
    homeWorld,
    isLoading,
  }
}
