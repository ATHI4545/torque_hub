import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSave = () => {
    alert("Profile saved successfully!");
    console.log({ name, dob, pincode, state, district, photo });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center p-6 overflow-y-auto">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 space-y-8">
        <h2 className="text-4xl font-bold text-purple-800 text-center">Edit Your Profile</h2>

        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-4 border-purple-500 bg-gray-200 overflow-hidden mb-4 shadow-lg">
            {photo ? (
              <img src={photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Photo
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="text-sm text-purple-700"
          />
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          {[
            { label: "Name", value: name, onChange: setName, type: "text" },
            { label: "Date of Birth", value: dob, onChange: setDob, type: "date" },
            { label: "Pincode", value: pincode, onChange: setPincode, type: "text" },
            { label: "State", value: state, onChange: setState, type: "text" },
            { label: "District", value: district, onChange: setDistrict, type: "text" }
          ].map(({ label, value, onChange, type }) => (
            <div key={label}>
              <label className="block font-semibold text-purple-800">{label}</label>
              <input
                type={type}
                value={value}
                placeholder={`Enter your ${label.toLowerCase()}`}
                onChange={(e) => onChange(e.target.value)}
                className="w-full mt-1 px-4 py-2 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={handleSave}
          className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 rounded-xl font-semibold shadow-lg transition duration-300"
        >
          Save
        </button>

        <Link to="/" className="block">
          <button className="w-full mt-3 bg-white text-purple-700 hover:bg-purple-100 border border-purple-300 py-2 rounded-xl font-semibold shadow transition duration-300">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
