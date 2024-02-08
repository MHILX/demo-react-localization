import logo from '../../logo.svg'
import './HomePage.css'

export default function HomePage() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    )
  }