import Div100vh from "react-div-100vh"

import Header from "./header"
import Footer from "./footer"
import Ads from "./ads"
import UnderHeader from "./underheader"

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
