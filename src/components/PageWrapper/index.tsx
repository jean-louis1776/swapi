import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { PageContainer } from "./styles"

export function PageWrapper() {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  )
}
