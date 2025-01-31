import React, { useState } from "react";

function BookForm({ onAddBook }) {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    publisher: "",
    publishedDate: "",
    description: "",
    category: "Computers",
    imageLink: "",
    price: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newBook) => {
        onAddBook(newBook); // Update the parent state
        setFormData({
          title: "",
          authors: "",
          publisher: "",
          publishedDate: "",
          description: "",
          category: "Computers",
          imageLink: "",
          price: 0,
        });
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="form-section mb-8">
      <form className="NewBook border p-4 rounded-lg shadow-md bg-white" onSubmit={handleSubmit}>
        <h3 className="text-lg font-bold mb-4">Add a New Book</h3>

        <div className="grid gap-4">
          {/* Select Category */}
          <div>
            <label className="block mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="Computers">Computers</option>
              <option value="History">History</option>
              <option value="Asian">Asian</option>
              <option value="Genealogy">Genealogy</option>
              <option value="African Literature">African Literature</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Authors */}
          <div>
            <label className="block mb-1">Authors</label>
            <input
              type="text"
              name="authors"
              value={formData.authors}
              onChange={handleChange}
              placeholder="Authors"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Publisher */}
          <div>
            <label className="block mb-1">Publisher</label>
            <input
              type="text"
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
              placeholder="Publisher"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Published Date */}
          <div>
            <label className="block mb-1">Published Date</label>
            <input
              type="number"
              name="publishedDate"
              value={formData.publishedDate}
              onChange={handleChange}
              placeholder="Published Date"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Image Link */}
          <div>
            <label className="block mb-1">Image Link</label>
            <input
              type="text"
              name="imageLink"
              value={formData.imageLink}
              onChange={handleChange}
              placeholder="Image Link"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Description */}
          <div>
            
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows="4"
              className="w-full border rounded p-2"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;
