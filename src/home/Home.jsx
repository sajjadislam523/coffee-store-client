import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className="py-8 bg-gray-100">
            <div className="container px-4 mx-auto">
                {/* Header Section */}
                <div className="mb-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        <span className="text-yellow-600">Sip & Savor</span>
                    </h2>
                    <h3 className="text-2xl font-semibold text-gray-800">
                        Our Popular Products
                    </h3>
                    <button className="px-6 py-2 mt-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600">
                        Add Coffee
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid w-3/4 grid-cols-1 gap-6 mx-auto md:grid-cols-2">
                    {coffees.map((coffee) => (
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
