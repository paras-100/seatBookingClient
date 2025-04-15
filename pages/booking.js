import { bookSeats, getSeatsData, resetSeats } from "@/redux/thunks/userThunk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TicketBooking() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numSeats, setNumSeats] = useState("");
  const [totalSeats, setTotalSeats] = useState();
  const [showSeats, setShowSeats] = useState();

  const { seatsData, userDetails, bookedSeats } = useSelector(
    (state) => state.stateUserReducer
  );

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      seats.push(
        <button
          key={i}
          className={`p-1 w-8 sm:w-12 md:w-12 rounded-md ${
            selectedSeats.includes(i)
              ? "bg-yellow-400 text-black"
              : "bg-green-500 text-black"
          }`}
          disabled={selectedSeats.includes(i)}
        >
          {i}
        </button>
      );
    }
    return seats;
  };

  const handleBooking = () => {
    const seatsToBook = parseInt(numSeats);

    if (!seatsToBook || seatsToBook <= 0) {
      alert("Please enter a valid number of seats");
      return;
    }

    if (seatsToBook > 7) {
      alert("You can only book up to 7 seats at a time");
      return;
    }

    const remainingSeats = totalSeats - selectedSeats.length;
    if (seatsToBook > remainingSeats) {
      alert("Not enough seats available");
      return;
    }

    dispatch(bookSeats(numSeats));

    // alert(`Successfully booked seats: ${seatsToReserve.join(", ")}`);
  };

  const handleReset = () => {
    dispatch(resetSeats());
    setNumSeats("");
  };

  useEffect(() => {
    if (!userDetails) {
      router.push("/login");
    }

    if (!seatsData) {
      dispatch(getSeatsData());
    } else if (seatsData) {
      setTotalSeats(seatsData.totalSeats);
      setSelectedSeats(seatsData.bookedSeats);
    }

    if (bookedSeats) {
      setSelectedSeats(bookedSeats.updatedSeats);
      setShowSeats(bookedSeats.bookedSeats);
    }
  }, [seatsData, userDetails, bookedSeats]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center p-4 sm:p-6 bg-gray-300">
      <div className="w-full lg:w-[60%] flex flex-col items-center mb-6 lg:mb-0">
        <h1 className="text-xl sm:text-2xl text-black text-center font-bold mb-4 sm:mb-6">
          Ticket Booking
        </h1>

        <div className="grid grid-cols-7 sm:grid-cols-7 md:grid-cols-7 gap-y-1.5 gap-x-0.5 mb-4 sm:mb-6 w-full max-w-[29rem] bg-white pl-2 py-2 rounded-md text-black">
          {seatsData?.totalSeats ? renderSeats() : "Wait...."}
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center">
          <div className="bg-yellow-400 px-3 sm:px-4 py-2 rounded text-sm sm:text-base">
            Booked Seats = {selectedSeats.length}
          </div>
          <div className="bg-green-500 px-3 sm:px-4 py-2 rounded text-sm sm:text-base">
            Available Seats = {totalSeats - selectedSeats.length}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-auto">
        <div className="bg-white p-4 sm:p-5 rounded-md max-w-md mx-auto lg:mx-0">
          <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">
            Book Seats:{" "}
            {showSeats?.map((seat) => (
              <button
                key={seat}
                className={`p-1 mr-1 w-8 sm:w-12 md:w-12 rounded-md bg-yellow-400 text-black`}
              >
                {seat}
              </button>
            ))}
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <input
              type="number"
              value={numSeats}
              onChange={(e) => setNumSeats(e.target.value)}
              placeholder="Enter number of seats"
              className="px-4 py-2 border rounded-md w-full text-black"
            />
            <button
              onClick={handleBooking}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full sm:w-auto"
            >
              Book
            </button>
          </div>
          <button
            onClick={handleReset}
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Reset Booking
          </button>
        </div>
      </div>
    </div>
  );
}
