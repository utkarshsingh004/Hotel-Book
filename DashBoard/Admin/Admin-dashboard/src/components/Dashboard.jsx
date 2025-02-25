import { useState } from 'react';

const listings = [
  { id: 1, name: 'Cozy Apartment', price: 100, location: 'Downtown' },
  { id: 2, name: 'Beach House', price: 200, location: 'Beachfront' },
  { id: 3, name: 'Mountain Cabin', price: 150, location: 'Mountains' },
];

const bookings = [
  { id: 1, listingId: 1, date: '2024-03-01', status: 'confirmed' },
  { id: 2, listingId: 2, date: '2024-03-05', status: 'pending' },
];

const reviews = [
  { id: 1, listingId: 1, rating: 5, comment: 'Amazing stay!', approved: false },
  { id: 2, listingId: 2, rating: 4, comment: 'Nice place but a bit noisy.', approved: true },
];

const AdminDashboard = () => {
  const [listingsData, setListingsData] = useState(listings);
  const [reviewsData, setReviewsData] = useState(reviews);

  const deleteListing = (id) => {
    setListingsData(listingsData.filter(l => l.id !== id));
  };

  const toggleReviewApproval = (id) => {
    setReviewsData(reviewsData.map(r => r.id === id ? { ...r, approved: !r.approved } : r));
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen bg-gray-100 px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      {/* Listings Management */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Manage Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8">
        {listingsData.map(l => (
          <div key={l.id} className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900">{l.name}</h3>
            <p className="text-gray-600">{l.location} - ${l.price}/night</p>
            <div className="flex justify-center gap-3 mt-4">
              <button className="text-blue-600 hover:text-blue-700">✏️</button>
              <button onClick={() => deleteListing(l.id)} className="text-red-600 hover:text-red-700">🗑️</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bookings Overview */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8">
        {bookings.map(b => (
          <div key={b.id} className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="font-semibold text-gray-900">Listing {b.listingId}</h3>
            <p className="text-gray-600">{new Date(b.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <span className={`px-3 py-1 rounded-full text-sm mt-2 inline-block ${b.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{b.status}</span>
          </div>
        ))}
      </div>

      {/* Reviews Moderation */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Manage Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8">
        {reviewsData.map(r => (
          <div key={r.id} className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="font-semibold text-gray-900">Listing {r.listingId}</h3>
            <p className="text-gray-600 flex justify-center gap-2">
              {[...Array(r.rating)].map((_, i) => <span key={i} className="text-yellow-400">⭐</span>)}
            </p>
            <p className="text-gray-600">{r.comment}</p>
            <button
              onClick={() => toggleReviewApproval(r.id)}
              className={`mt-4 py-2 px-4 rounded-lg text-white font-semibold transition duration-300 ${r.approved
                  ? 'bg-red-600 hover:bg-red-700 opacity-100'
                  : 'bg-green-600 hover:bg-green-700 opacity-100'
                }`}
            >
              {r.approved ? '❌ Reject' : '✅ Approve'}
            </button>


          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
