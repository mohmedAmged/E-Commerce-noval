import React, { useEffect, useState } from "react";
import "./searchfilter.css";
export default function Searchfilter(props) {
    
    const [filter, setfilter] = useState({
        search: "",
        category: '',
        min_price: "",
        max_price: "",
    });
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://shop-product-tj9k.onrender.com/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    function getFilteredData(filterQuery) {
        fetch(`https://shop-product-tj9k.onrender.com/shopProducts?${filterQuery.trim()}`)
            .then(res => res.json())
            .then(data => props.setProducts(data))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let filterArr = [];
        if(filter.category) filterArr.push('category='+filter.category);
        if (filter.min_price) filterArr.push('price_gte='+filter.min_price)
        if (filter.max_price) filterArr.push('price_lte='+filter.max_price)
        if (filter.search) filterArr.push('q='+filter.search)

        let filterQuery = filterArr.join('&')
        props.setCurrPage(1)
        getFilteredData(filterQuery)
    };
    const changeHandler = (e) => {
        const input = e.target;
        setfilter({
            ...filter,
            [input.name]: input.value
        })
    };
    const resetHandler = () => {
        setfilter({
            search: "",
            category: '',
            min_price: "",
            max_price: "",
        })
        getFilteredData('')
    }
    return (
        <div>
            <div className="searchFilter">
                <form onSubmit={submitHandler} action="">
                    <h4 className="sideBarTitle">search</h4>
                    <input
                        name="search"
                        value={filter.search}
                        onChange={changeHandler}
                        className="searchStyle"
                        placeholder="Search"
                    />

                    <h4 className="sideBarTitle mt-4">filter by price</h4>
                    <input
                        name="min_price"
                        value={filter.min_price}
                        onChange={changeHandler}
                        type="number"
                        className="searchStyle mb-4"
                        placeholder="min price"
                    />

                    <input
                        name="max_price"
                        value={filter.max_price}
                        onChange={changeHandler}
                        type="number"
                        className="searchStyle mb-4"
                        placeholder="max price"
                    />
                    <h4 className="sideBarTitle">filter by category</h4>
                    <select className="searchStyle" value={filter.category} name='category' onChange={changeHandler} id="">
                        <option value="" disabled >Select Category</option>
                        {categories.map((ele, idx) => {
                            return <option key={idx} value={ele}>{ele}</option>
                        })}
                    </select>
                    <div className="formActions d-flex justify-content-between ">
                        <button onClick={resetHandler} type="submit" className="">
                            reset
                        </button>
                        <button type="submit" className="resetBtn">
                            filter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
