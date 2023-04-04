import { Link } from 'react-router-dom';
import '../LandingPage/landing-page.scss';

export default function LandingPage () {
  return(
    <div className="landing-page">
      <Link className="link-to-enter" to="/characters">
        <h1 className="enter">click my terry fold</h1>
      </Link>
    </div>
  )
}