

import logo from '../assets/img/logoSA.png'

export  const Logo =  (props) => {

    // console.log(props)
    return(
        <div className='header__logo__container'>
            <img src={logo} alt="" />
        </div>
    )
}