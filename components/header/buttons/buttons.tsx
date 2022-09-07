import LoginButton from "./login"
import ThemeButton from "./theme"

function HeaderButtons() {
  return (
    <div className='header-buttons'>
      <ThemeButton />
      <LoginButton />
    </div>
  )
}

export default HeaderButtons
