import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
        };
        console.log(newCoffee);

        // send data to the server
        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        "Success!",
                        "New coffee added successfully!",
                        "success"
                    );
                    form.reset();
                }
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-input_bg">
            <div>
                <Link to="/">Back to home</Link>
            </div>
            <div className="w-full max-w-3xl p-8 text-center bg-[#F4F3F0] my-8 rounded-lg">
                <h1 className="mb-4 text-2xl font-bold text-gray-800">
                    Add New Coffee
                </h1>
                <p className="mb-6 text-gray-600">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using Content here.
                </p>
                <form onSubmit={handleAddCoffee} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-1 text-sm font-medium text-gray-700 text-start"
                            >
                                Coffee Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter coffee name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="chef"
                                className="block mb-1 text-sm font-medium text-gray-700 text-start"
                            >
                                Coffee Chef
                            </label>
                            <input
                                type="text"
                                id="chef"
                                name="chef"
                                placeholder="Enter coffee chef"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="supplier"
                                className="block mb-1 text-sm font-medium text-gray-700 text-start"
                            >
                                Supplier
                            </label>
                            <input
                                type="text"
                                id="supplier"
                                name="supplier"
                                placeholder="Enter coffee supplier"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="taste"
                                className="block mb-1 text-sm font-medium text-gray-700 text-start"
                            >
                                Taste
                            </label>
                            <input
                                type="text"
                                id="taste"
                                name="taste"
                                placeholder="Enter coffee taste"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="category"
                                className="block mb-1 text-sm font-medium text-gray-700 text-start"
                            >
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                placeholder="Enter coffee category"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="details"
                                className="block mb-1 text-sm font-medium text-gray-700 text-start"
                            >
                                Details
                            </label>
                            <input
                                type="text"
                                id="details"
                                name="details"
                                placeholder="Enter coffee details"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="photo"
                            className="block mb-1 text-sm font-medium text-gray-700 text-start"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            placeholder="Enter photo URL"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-black transition duration-300 bg-[#D2B48C] rounded-lg hover:bg-yellow-600"
                    >
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
