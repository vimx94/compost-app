import Navbar from '../components/organisms/Navbar'

interface homeLayoutProps {
  children?: React.ReactNode
}

export function HomeLayout(props:homeLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
    </>
  )
}