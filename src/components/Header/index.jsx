import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo.png'
import profile from '../../assets/프로필.png'
import { pullLogin } from '../../utils/login';
import { clearIdx } from '../../utils/idx';

function Header() {
    return (
        <S.HeaderDiv>
            <S.ContentsDiv>
                <Link to="/" onClick={clearIdx()}>
                    <S.LogoBox>
                        <img src={logo} alt="logo" />
                    </S.LogoBox>
                </Link>
                <Link to="/login">
                    {pullLogin() ? <S.UserBox><img src={profile} alt="user" />{pullLogin()}</S.UserBox> : <S.LoginBox><img src={profile} alt="logIn" /></S.LoginBox>}
                </Link>
            </S.ContentsDiv>
        </S.HeaderDiv>
    );
}

export default Header;