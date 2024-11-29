/* eslint-disable react/prop-types */
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, photo, name, chef } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            const remaining = coffees.filter(
                                (cof) => cof._id !== _id
                            );
                            setCoffees(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg">
                {/* Product Image */}
                <img src={photo} alt="Coffee" className="w-20 h-20 rounded" />

                {/* Product Details */}
                <div className="flex-1 ml-4">
                    <h4 className="text-lg font-bold">Name: {name}</h4>
                    <p className="text-gray-600">Chef: {chef}</p>
                    <p className="text-gray-600">Price: 85 Taka</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col items-center space-y-2">
                    <button className="p-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                        <FaEye className="w-5 h-5" />
                    </button>
                    {/* Edit Button */}
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="p-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                            <FaEdit className="w-5 h-5" />
                        </button>
                    </Link>
                    {/* Delete Button */}
                    <button
                        onClick={() => {
                            handleDelete(_id);
                        }}
                        className="p-2 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                        <FaTrash className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
