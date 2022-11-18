import { OrdersBoard } from '../OrdersBoard';
import {Container} from './styles';
import { Order } from '../../types/Order';

const orders:Order[] = [
    {
        '_id':'fvvuvrvitgi1hi3h74',
        'table':'123',
        'status':'DONE',
        'products':[
            {
                'product':{
                    'name':'Pizza quatro queijo',
                    'imagePath':'1672172267546-4queijos.png',
                    'price':40,
                },
                'quantity':3,
                "_id":'152658458925'
            },

            {
                'product':{
                    'name':'Coca cola',
                    'imagePath':'1672172267546-4queijos.png',
                    'price':12,
                },
                'quantity':1,
                "_id":'1626585688925'
            }
        ]
    }
]

export function Orders(){
    return(
        <Container>

            <OrdersBoard
                icon="🕛"
                title="Fila de espera"
                orders={orders}
            />

             <OrdersBoard
                icon="👨‍🍳"
                title="Em preparação"
                orders={[]}
            />

             <OrdersBoard
                icon="✅"
                title="Pronto!"
                orders={[]}
            />
        </Container>

    );
}
