import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // loading data
  useEffect(() => {
    // fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/menu");
        const data = await response.json();
        // console.log(data)
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // call the function
    fetchData();
  }, []);

  //  filtering data
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    // setCurrentPage(1);
  };

  //  for showing all data
  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  // sorting  on A-Z, Z-A Low high pricing
  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // block code
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //   console.log(filteredItems);
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-prigmayBG">
      <div className="bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% ">
        {/* products banner */}

        <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% ">
          <div className="py-24 flex flex-col  items-center justify-center gap-8  ">
            {/* texts */}
            <div className=" text-center px-4 space-y-7 ">
              <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                For the Love of Quality{" "}
                <span className="text-green">Dairy Products</span>
              </h2>
              <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
                Join us online and experience the satisfaction of high-quality
                dairy products at affordable prices.Our state-of-the-art cattle
                management ensures you receive fresh, nutritious, and affordable
                dairy products every time.
              </p>
              <button className="bg-green hover:bg-gray-400 font-semibold btn text-white hover:text-black px-8 py-3 rounded-full">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* products shop */}
        <div className="section-container bg-gray-100 ">
          <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8 bg-gray-100">
            {/* all category buttons */}
            <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap bg-gray-100">
              <button
                onClick={showAll}
                className={selectedCategory === "all" ? "active" : ""}
              >
                All
              </button>
              <button
                onClick={() => filterItems("milk")}
                className={selectedCategory === "milk" ? "active" : ""}
              >
                Milk
              </button>
              <button
                onClick={() => filterItems("cheese")}
                className={selectedCategory === "cheese" ? "active" : ""}
              >
                Cheese
              </button>
              <button
                onClick={() => filterItems("butter")}
                className={selectedCategory === "butter" ? "active" : ""}
              >
                Butter
              </button>
              <button
                onClick={() => filterItems("yogurt")}
                className={selectedCategory === "yogurt" ? "active" : ""}
              >
                Yogurt
              </button>
              <button
                onClick={() => filterItems("paneer")}
                className={selectedCategory === "paneer" ? "active" : ""}
              >
                Paneer
              </button>
              <button
                onClick={() => filterItems("ice-cream")}
                className={selectedCategory === "ice-cream" ? "active" : ""}
              >
                Ice-cream
              </button>
              <button
                onClick={() => filterItems("bread")}
                className={selectedCategory === "bread" ? "active" : ""}
              >
                Bread
              </button>
              <button
                onClick={() => filterItems("honey")}
                className={selectedCategory === "honey" ? "active" : ""}
              >
                Honey
              </button>
            </div>

            {/* filter options */}
            <div className="flex justify-end mb-4 rounded-sm bg-gray-100">
              <div className="bg-black p-2 ">
                <FaFilter className="text-white h-4 w-4" />
              </div>
              <select
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className="bg-black text-white px-2 py-1 rounded-sm"
              >
                <option value="default"> Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>

          {/* product card */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 bg-gray-100">
            {currentItems.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center  bg-gray-100">
          {Array.from({
            length: Math.ceil(filteredItems.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-green text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
