import React, { useState } from 'react';
import { FiSearch, FiCalendar, FiStar, FiMapPin, FiDollarSign } from 'react-icons/fi';
import { format } from 'date-fns';

const listings = [
  { id: 1, name: 'Cozy Apartment', price: 100, location: 'Downtown', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500' },
  { id: 2, name: 'Beach House', price: 200, location: 'Beachfront', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500' },
  { id: 3, name: 'Mountain Cabin', price: 150, location: 'Mountains', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500' },
];

const Dashboard = () => {
  const [search, setSearch] = useState('');
  const [bookings, setBookings] = useState([{ id: 1, listingId: 1, date: '2024-03-01', status: 'confirmed' }]);
  const [review, setReview] = useState({ listingId: '', rating: 5, comment: '' });

  const filteredListings = listings.filter(l => l.name.toLowerCase().includes(search.toLowerCase()) || l.location.toLowerCase().includes(search.toLowerCase()));

  const handleBooking = (id) => {
    const date = prompt('Enter booking date (YYYY-MM-DD):');
    if (date) setBookings([...bookings, { id: bookings.length + 1, listingId: id, date, status: 'pending' }]);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.listingId && review.comment.trim()) alert('Review submitted successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Customer Dashboard</h1>
      
      {/* Search */}
      <div className="relative w-full max-w-lg mx-auto mb-6">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 w-full border rounded-lg" value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      
      {/* Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map(l => (
          <div key={l.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img src={l.image} alt={l.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{l.name}</h3>
            <div className="text-gray-600 flex gap-2 mt-2"><FiMapPin /> {l.location}</div>
            <div className="text-gray-600 flex gap-2 mt-1"><FiDollarSign /> ${l.price}/night</div>
            <button onClick={() => handleBooking(l.id)} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Book Now</button>
          </div>
        ))}
      </div>
      
      {/* Bookings */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">My Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map(b => {
          const listing = listings.find(l => l.id === b.listingId);
          return (
            <div key={b.id} className="bg-white p-4 shadow-lg rounded-lg flex items-center gap-4">
              <FiCalendar className="text-blue-500 text-xl" />
              <div>
                <h3 className="font-semibold text-gray-900">{listing?.name}</h3>
                <p className="text-gray-600">{format(new Date(b.date), 'MMMM d, yyyy')}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-sm mt-2 ${b.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{b.status}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Reviews */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Leave a Review</h2>
      <form onSubmit={handleReviewSubmit} className="bg-white p-6 shadow-lg rounded-lg max-w-2xl">
        <select className="w-full border px-4 py-2 rounded-lg mb-4" value={review.listingId} onChange={e => setReview({ ...review, listingId: Number(e.target.value) })}>
          <option value="">Select a listing...</option>
          {listings.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
        </select>
        
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map(s => (
            <button key={s} type="button" onClick={() => setReview({ ...review, rating: s })} className={`text-2xl ${s <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}><FiStar /></button>
          ))}
        </div>
        
        <textarea className="w-full border px-4 py-2 rounded-lg min-h-[100px] mb-4" placeholder="Write your review..." value={review.comment} onChange={e => setReview({ ...review, comment: e.target.value })} />
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" disabled={!review.listingId || !review.comment.trim()}>Submit Review</button>
      </form>
    </div>
  );
};

export default Dashboard;
