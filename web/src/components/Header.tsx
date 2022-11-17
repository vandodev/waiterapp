import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const Container = styled.header`
background: #D73035;
`;

export function Header(){
  return (
    <Container>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logo} alt="WAITERAPP" />
    </Container>
  )
}
