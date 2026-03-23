    import { useState } from "react";
    import { useDispatch } from "react-redux";
    import { addProduct } from "../redux/cartSlice";

    function Dashboard() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
        //fetches the profucts data 
    const fetchData = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const json = await res.json();
        setData(json.products);
    };

    return (
        <div>
        <h2>Product Dashboard</h2>

        <button className="btn" onClick={fetchData}>
        
            Load Products
        </button>

        <div className="dashboard">
            {data.slice(0, 5).map((item) => (
            <div className="card" key={item.id}>
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>

                <button
                className="btn"
                onClick={() =>
                    dispatch(addProduct({ id: item.id, name: item.title }))
                }
                >
                Add to Cart
                </button>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default Dashboard;