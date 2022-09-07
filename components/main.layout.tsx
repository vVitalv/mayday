import Div100vh from "react-div-100vh"

import Header from "./header/header"
import Footer from "./footer"
import Ads from "./ads"
import UnderHeader from "./header/underheader"

export default function MainLayout({ children }) {
  return (
    <Div100vh>
      <Header />
      <div className="bg-image" />
      <div className='page_container'>
        <main>{children}</main>
        <Ads />
      </div>
      <Footer />
    </Div100vh>
  )
}
