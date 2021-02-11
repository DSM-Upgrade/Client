import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22.5rem;
  height: 100vh;
  /* background: #dddddd; */
`

export const SignWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 1.25rem;
  width: 67%;
  color: #3987ee;
`

export const SignText = styled.a`
  cursor: pointer;
  margin-bottom: 0.3125rem;
  text-decoration: none;
  outline: none;
  &:visited{
    color: #3987ee;
  }
  &:active{
    color: #3987ee;
  }
  &:link{
    color: #3987ee;
  }
`

export const NavWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

export const NavItem = styled(NavLink)`
  display: flex;
  position:relative;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 100%;
  cursor: pointer;
  font-size: 2.1875rem;
  text-decoration: none;
  &:visited{
    color: #393838;
  }
  &:active{
    color: #393838;
  }
  &:link{
    color: #393838;
  }
`

