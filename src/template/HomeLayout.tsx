import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'

interface homeLayoutProps {
  children?: React.ReactNode
}

export function HomeLayout(props:homeLayoutProps) {
  return (
    <>
      <Navbar />
        <main>
          { props.children }
        </main>
      <Footer/>
    </>
  )
}