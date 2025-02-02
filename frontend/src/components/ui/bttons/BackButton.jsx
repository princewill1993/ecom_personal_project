import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex text-sky-600 font-semibold text-lg mb-6 cursor-pointer"
    >
      <ArrowLeft />
      <span>back</span>
    </button>
  );
};

export default BackButton;
