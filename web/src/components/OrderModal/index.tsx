import { Overlay} from './styles';

interface OrderModalProps {
  visible: boolean;
}


export function OrderModal({ visible }: OrderModalProps) {

 if(!visible){
    return null;
 }

  return (
    <Overlay></Overlay>
  );
}
