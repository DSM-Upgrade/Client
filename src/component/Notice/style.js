import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #F8FBFF;
`

export const Wrapper = styled.div`
  width: 73%;
  height: 54rem;
  margin: auto;
`

export const Inner = styled.div`
  width: 100%;
  max-height: 45.875rem;
  margin-top: 3.375rem;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0.1875rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.1875rem;
    background-color: #3987ee;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`