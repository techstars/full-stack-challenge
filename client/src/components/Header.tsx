import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

import ROUTES from '../router/routes'

const NavContainer = styled.nav.attrs({ className: 'flex items-center justify-between bg-blue-700 p-6 mb-5' })`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(30px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  .balloon {
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
  }
  position: absolute;
  top: 0;
  left: 0;
  max-height: 80px;
  width: 100%;
`
const LogoContainer = styled.nav.attrs({ className: 'flex items-center flex-shrink-0 text-white mr-6' })`
  span {
    padding-left: 1rem;
  }
  a {
    ${tw`block inline-block mt-0 text-teal-200 hover:text-white mr-4`}
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to={ROUTES.companies}>
        <LogoContainer>
          <img
            className="balloon"
            src={
              'https://www.freepnglogos.com/uploads/hot-air-balloon-png/vintage-hot-air-balloon-photography-clipart-panda-37.png'
            }
            width={84}
            height={84}
            alt="logo"
          />
          <span className="font-semibold text-xl tracking-tight">nicecmpny</span>
        </LogoContainer>
      </Link>
    </NavContainer>
  )
}

export default Header
