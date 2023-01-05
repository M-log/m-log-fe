import { createPortal } from 'react-dom';
import Loader from './components/Loader';

const LoaderPortal = ({ isOn }: { isOn: boolean }) => {
  const modalRoot = document.querySelector('#loader');
  return createPortal(<Loader isOn={isOn} />, modalRoot as Element);
};

export default LoaderPortal;
