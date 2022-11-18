import { Board, OrdersContainer } from './styles';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';

interface OrdersBoardProps {
  icon: string;
  title: string;
   orders: Order[];
}

export function OrdersBoard({icon, title, orders}:OrdersBoardProps){

    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleOpenModal() {
        setIsModalVisible(true);
    }

    return(
         <Board>

             <OrderModal
                visible={isModalVisible}
            />
                <header>
                    <span>{icon}</span>
                    <strong>{title}</strong>
                    <span>({orders.length})</span>
                </header>


            {orders.length > 0 &&
                <OrdersContainer>
                    {orders.map(order => (
                    <button type='button' key={order._id} onClick={() => handleOpenModal()}>
                        <strong>Mesa {order.table}</strong>
                        <span>{order.products.length} itens</span>
                    </button>
                    ))}
                </OrdersContainer>
            }
        </Board>
    );
}
