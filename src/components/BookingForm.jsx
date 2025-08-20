import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Select from 'react-select';
import Pixel from '../pixel'; // Debe exportar { init, trackGetQuote }

function BookingForm() {
  useEffect(() => {
    // Scroll al cargar
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // Iniciar Pixel de forma segura
    try {
      if (Pixel && typeof Pixel.init === 'function') {
        Pixel.init();
      }
    } catch (e) {
      console.warn('Pixel init error:', e);
    }
  }, []);

  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    time: '',
    guest: '',
    budget: '',
    details: '',
    venue: [], // <-- sin "as string[]"
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      bookingData.details.trim() !== '' &&
      bookingData.firstName.trim() !== '' &&
      bookingData.email.trim() !== '';
    setFormValid(isValid);
  }, [bookingData.details, bookingData.firstName, bookingData.email]);

  const eventTypeOptions = [
    { value: 'Birthday', label: 'Birthday' },
    { value: 'Friends day out', label: 'Friends day out' },
    { value: 'Corporate event', label: 'Corporate event' },
    { value: 'Christmas party', label: 'Christmas party' },
    { value: 'School celebration', label: 'School celebration' },
    { value: 'Wedding', label: 'Wedding' },
    { value: 'Engagement', label: 'Engagement' },
    { value: 'Overnight hire', label: 'Overnight hire' },
    { value: 'Other', label: 'Other' },
  ];

  // Lo dejo como en tu código original (aunque no se usa en el UI actual)
  const timeOptions = [
    { value: 'Anytime', label: 'Anytime' },
    { value: 'Morning', label: 'Morning' },
    { value: 'Afternoon', label: 'Afternoon' },
    { value: 'Evening', label: 'Evening' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  // handler genérico para react-select
  const handleSelectChange = (option, name) => {
    setBookingData((prev) => ({
      ...prev,
      [name]: option ? option.value : '',
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setBookingData((prev) => {
      if (checked) {
        if (prev.venue.includes(value)) return prev;
        return { ...prev, venue: [...prev.venue, value] };
      } else {
        return { ...prev, venue: prev.venue.filter((v) => v !== value) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValid) {
      alert('Please complete the required fields (First name, Email, Details).');
      return;
    }

    // Construir mailto con los datos del formulario
    const subject = encodeURIComponent(
      `Booking inquiry from ${bookingData.firstName} ${bookingData.lastName}`.trim()
    );

    const bodyLines = [
      `First Name: ${bookingData.firstName}`,
      `Last Name: ${bookingData.lastName}`,
      `Email: ${bookingData.email}`,
      `Phone: ${bookingData.phone}`,
      `Event Type: ${bookingData.eventType}`,
      `Preferred Date: ${bookingData.date}`,
      `Preferred Time: ${bookingData.time}`,
      `Guests: ${bookingData.guest}`,
      `Budget: ${bookingData.budget}`,
      `Venue: ${bookingData.venue.join(', ')}`,
      `Details:`,
      `${bookingData.details}`,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    // Destinatario solicitado
    const mailtoUrl = `mailto:info@lakebarrine.com.au?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    // Tracking opcional
    try {
      if (Pixel && typeof Pixel.trackGetQuote === 'function') {
        Pixel.trackGetQuote({
          firstName: bookingData.firstName,
          lastName: bookingData.lastName,
          email: bookingData.email,
          phone: bookingData.phone,
          eventType: bookingData.eventType,
          budget: bookingData.budget,
        });
      }
    } catch (err) {
      console.warn('Pixel track error:', err);
    }

    // Si querés limpiar el formulario después:
    // setBookingData({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   eventType: '',
    //   date: '',
    //   time: '',
    //   guest: '',
    //   budget: '',
    //   details: '',
    //   venue: [],
    // });
  };

  return (
    <div className="bg-[#F7F7F7] relative">
      <Helmet>
        <title>Book Venue or Private Boat | Lake Barrine Teahouse</title>
      </Helmet>

      <div className="mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Texto */}
          <div className="text-center md:text-left font-rufina text-sm md:text-sm lg:text-sm text-custom-green mt-20 mb-20">
            <h1 className="text-2xl font-bold">
              Ready to hire our venue or private boat for a function?
            </h1>
            <p className="mt-4">
              Complete the form and let us know a bit more about your function or event.
              We’ll get back to you within the day and get to work on finding the right package.
            </p>

            <h2 className="text-xl font-semibold mt-6">Why hire our venue or boat?</h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Idyllic Location:</strong> Nestled in lush rainforest surroundings
                with picturesque lake and beautiful views.
              </li>
              <li>
                <strong>Distinctive Atmosphere:</strong> Our historic Teahouse offers unique charm.
              </li>
              <li>
                <strong>Personalized Service:</strong> Friendly and professional team with tailored options.
              </li>
              <li>
                <strong>Versatile Options:</strong> From rustic indoor spaces to scenic outdoor areas.
              </li>
            </ul>

            <p className="mt-6">
              Choosing Lake Barrine Teahouse means an unforgettable experience, blending natural beauty with exceptional service.
            </p>

            <h2 className="text-xl font-semibold mt-6">Sounds good, right? Let's get started!</h2>
          </div>

          {/* Formulario */}
          <div className="bg-white shadow-md rounded-lg p-6 md:mt-20">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 mt-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={bookingData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="md:w-1/2 mt-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={bookingData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 mt-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                    placeholder="your-email@example.com"
                    required
                  />
                </div>
                <div className="md:w-1/2 mt-1">
                  <label htmlFor="phone" className="block text sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
                  Event type
                </label>
                <Select
                  inputId="eventType"
                  name="eventType"
                  options={eventTypeOptions}
                  value={eventTypeOptions.find((o) => o.value === bookingData.eventType) || null}
                  onChange={(option) => handleSelectChange(option, 'eventType')}
                  isClearable
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 mt-1">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                  />
                </div>
                <div className="md:w-1/2 mt-1">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  What venue are you interested in?
                </label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {['Boat Cruise', 'Outdoor area', 'Teahouse building'].map((v) => (
                    <label key={v} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={v}
                        onChange={handleCheckboxChange}
                        checked={bookingData.venue.includes(v)}
                        className="form-checkbox"
                      />
                      <span className="ml-2">{v === 'Teahouse building' ? 'Teahouse' : v}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 mt-1">
                  <label htmlFor="guest" className="block text-sm font-medium text-gray-700">
                    Approximate Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guest"
                    name="guest"
                    value={bookingData.guest}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                    placeholder="Number of Guests"
                    min="0"
                  />
                </div>
                <div className="md:w-1/2 mt-1">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                    Estimated Budget
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={bookingData.budget}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                    placeholder="Budget"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                  Details about your event *
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={bookingData.details}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5"
                  placeholder="Provide any additional details here"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className={`mt-2 px-4 py-2 bg-custom-green text-white rounded-md hover:bg-green-700 focus:outline-none ${
                    !formValid ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={!formValid}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;