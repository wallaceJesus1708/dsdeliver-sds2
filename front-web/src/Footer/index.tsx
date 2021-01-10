import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durate a 2º ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperio/" target="_new">
                    <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com/devsuperio.ig/">
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    )       
}

export default Footer;