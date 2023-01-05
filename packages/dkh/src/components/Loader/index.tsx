import styled from 'styled-components';
import Spinner from '../Spinner';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

function Loader({ isOn = false }: { isOn: boolean }) {
  return isOn ? (
    <Root>
      <Spinner />
    </Root>
  ) : null;
}

export default Loader;
