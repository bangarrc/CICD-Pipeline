import React from 'react';
import { useState } from 'react';

const BookingPage: React.FC = () => {
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        date: '',
    });

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });
            const data = await response.json();
            console.log('Booking response:', data);
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };

    return (
        <div>
            <h1>Booking Page</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookingPage;
