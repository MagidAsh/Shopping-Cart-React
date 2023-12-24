import React , {useContext, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from "axios";
// Context
// import {ProductsContext} from '../context/ProductContextProvider';

// style
import styles from './ProductDetails.module.css';

const ProductDetails = (props) => {

    const params = useParams();
    const id = params.id;
    console.log(id)

    const[data,setData] = useState([]);

//     useEffect(() => {
//         axios.get(`https://fakestoreapi.com/products/${id}`)
//          .then(response => setData(response.data)) 
//    },[])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setData(response.data)
        }

        fetchApi();
    },[])

    console.log(data);

    // const data = useContext(ProductsContext);
    // console.log(data);
    // const product = data[id - 1];
    const {image , title , description , price , category} = data;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product'/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category : </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}><p>{price} $</p></span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;