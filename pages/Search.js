import { useRouter } from 'next/router';
import {Store} from '../utils/Store';
import {Model} from '../components/Model';

const PAGE_SIZE = 2;

export default function Search(props){
    const router = useRouter();


    const { 
        query = 'all',
     } = router.query;

    const {product, pages} = props;

    const filterSearch = ({
        page,
        
    }) => {

        const {query} = router;
        if (page) query.page = page;
        
        router.push({
            pathname: '/search',
            query: query,
        });
    };
    const pageHandler = (page) => {
        filterSearch({ page });
    };

    const {state , dispatch} = useContext(Store);
    const addToCartHandler = async (product) => {
        const {data} = await axios.get(`/api/products/${product._id}`);
        if(data.countInStock <= 0){
            window.alert('Product is out of stock');
            return;
        }
        dispatch({type: 'CART_ADD_ITEM', payload: {...product, qty: 1}});
        router.push('/cart');
    }

}