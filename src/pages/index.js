import React, { useState } from 'react';

export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Validate phone number input
    if (name === 'phone') {
      const phoneNumberRegex = /^\d+$/;
      if (!phoneNumberRegex.test(value)) {
        return;
      }
    }

    setNewCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (newCustomer.phone.length < 10 || newCustomer.phone.length > 11) {
      alert('Please enter a valid phone number!');
      return;
    }
    setCustomers((prevState) => [...prevState, newCustomer]);
    setNewCustomer({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  const handleDelete = (index) => {
    setCustomers((prevState) =>
      prevState.filter((customer, i) => i !== index)
    );
  };

  return (
    <div className="min-h-screen p-6 bg-slate-100 items-center justify-center">
      <form onSubmit={handleSubmit} className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Customer Information Management</h2>
          <div className="bg-white rounded shadow-lg p-4 px-4 mt-5 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={newCustomer.name}
                      onChange={handleInputChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                  </div>

                  <div className="md:col-span-3">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={newCustomer.email}
                      onChange={handleInputChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                  </div>

                  <div className="md:col-span-2">
                    <label for="email">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={newCustomer.phone}
                      onChange={handleInputChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                  </div>

                  <div className="md:col-span-5">
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      value={newCustomer.address}
                      onChange={handleInputChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                  </div>

                  <div className="md:col-span-5 text-right mt-5">
                    <div className="inline-flex items-end">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="items-center justify-center mt-4 max-w-screen-lg mx-auto">
        <h2 className="font-semibold text-xl text-gray-600 my-5">Registered Customers</h2>
        <div className="container m-w-full mx-auto overflow-x-auto rounded shadow-lg">
          <table className=" w-full">
            <thead className="bg-white border-b">
              <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 w-1 text-left">
                  #
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                  Full Name
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                  Email
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                  Phone
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                  Address
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"> 
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                  <td className="text-sm text-gray-900 font-light px-2 py-4 lg:break-all sm:break-keep">{customer.name}</td>
                  <td className="text-sm text-gray-900 font-light px-2 py-4 lg:break-all sm:break-keep">{customer.email}</td>
                  <td className="text-sm text-gray-900 font-light px-2 py-4 lg:break-all sm:break-keep">{customer.phone}</td>
                  <td className="text-sm text-gray-900 font-light px-2 py-4 lg:break-all sm:break-words lg:max-w-xs">{customer.address}</td>
                  <td className="px-6 py-4"><button onClick={() => handleDelete(index)} className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
