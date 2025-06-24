"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Kannada", "Tamil", "Telugu"];
const feeOptions = ["$300 - $800", "$500 - $1000", "$700 - $1200", "$1000 - $1500"];

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  categories: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  fee: Yup.string().required("Fee range is required"),
  location: Yup.string().required("Location is required"),
});

export default function Onboard() {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert("Form submitted in console ✅");
    reset();
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white">
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 my-10 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          🎭 Artist Onboarding
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            {...register("name")}
            placeholder="Full Name"
            className="w-full p-3 border rounded focus:ring focus:ring-green-300 font-medium text-gray-900"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>

          {/* Bio */}
          <textarea
            {...register("bio")}
            placeholder="Short Bio"
            className="w-full p-3 border rounded focus:ring focus:ring-green-300 font-medium text-gray-900"
          ></textarea>
          <p className="text-red-500 text-sm">{errors.bio?.message}</p>

          {/* Categories */}
          <div>
            <p className="mb-2 text-gray-800 font-semibold text-sm">Select Categories:</p>
            {categories.map((cat) => (
              <label key={cat} className="block text-sm text-gray-800">
                <input
                  type="checkbox"
                  value={cat}
                  {...register("categories")}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
            <p className="text-red-500 text-sm">{errors.categories?.message}</p>
          </div>

          {/* Languages */}
          <div>
            <p className="mb-2 text-gray-800 font-semibold text-sm">Languages Spoken:</p>
            {languages.map((lang) => (
              <label key={lang} className="block text-sm text-gray-800">
                <input
                  type="checkbox"
                  value={lang}
                  {...register("languages")}
                  className="mr-2"
                />
                {lang}
              </label>
            ))}
            <p className="text-red-500 text-sm">{errors.languages?.message}</p>
          </div>

          {/* Fee Dropdown */}
          <select
            {...register("fee")}
            className="w-full p-3 border rounded focus:ring focus:ring-green-300 text-gray-900"
          >
            <option value="">Select Fee Range</option>
            {feeOptions.map((fee) => (
              <option key={fee} value={fee}>
                {fee}
              </option>
            ))}
          </select>
          <p className="text-red-500 text-sm">{errors.fee?.message}</p>

          {/* Location */}
          <input
            type="text"
            {...register("location")}
            placeholder="City / Location"
            className="w-full p-3 border rounded focus:ring focus:ring-green-300 font-medium text-gray-900"
          />
          <p className="text-red-500 text-sm">{errors.location?.message}</p>

          {/* Profile Image */}
          <div>
            <p className="mb-2 text-gray-800 font-semibold text-sm">Profile Image (Optional):</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-3 w-32 h-32 object-cover rounded"
              />
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
