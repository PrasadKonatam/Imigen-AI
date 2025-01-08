import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(assets.sample_img_1);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const clipdrop_api =
    "bbcfb6a822e5d372753f3cda4ae19fdbb707cd18de93c6d4530b599e1f7c88ebf5d8dedd5086e2342ed70fe7fe470f3b";

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append("prompt", input || "shot of vaporwave fashion dog in miami");

    try {
      const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
        method: "POST",
        headers: {
          "x-api-key":
            "bbcfb6a822e5d372753f3cda4ae19fdbb707cd18de93c6d4530b599e1f7c88ebf5d8dedd5086e2342ed70fe7fe470f3b",
        },
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const buffer = await response.arrayBuffer();
      const blob = new Blob([buffer], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      setImage(url);
      setImageLoaded(true);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
        <div className="relative">
          <img className="w-80" src={image} alt="Generated content" />
          <span
            className={`absolute bottom-0 left-0 border h-1 bg-blue-600 
              ${loading ? "w-full transition-all duration-[10s]" : "w-0"}`}
          />
        </div>
        <p>{loading ? "Loading..." : ""}</p>
      </div>
      {!imageLoaded && (
        <div className="mt-10 p-0.5 text-sm flex bg-neutral-500 text-white w-full max-w-xl rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent outline-none max-sm:w-20 flex-1 ml-8 cursor-default"
            type="text"
            value={input}
            placeholder="Describe what you want to generate"
          />
          <button
            onClick={handleGenerate}
            className="bg-zinc-900 sm:px-16 py-2 rounded-full"
            disabled={loading}
          >
            Generate
          </button>
        </div>
      )}

      {imageLoaded && (
        <div className="flex mt-10 gap-2">
          <p
            onClick={() => setImageLoaded(false)}
            className="sm:px-16 py-2 rounded-full border-2 cursor-pointer"
          >
            Generate another
          </p>
          <a
            href={image}
            download="generated-image.jpg"
            className="bg-zinc-900 sm:px-16 py-2 rounded-full text-white cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
