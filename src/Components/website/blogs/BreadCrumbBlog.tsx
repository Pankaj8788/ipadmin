import { blogBreadcrumb, blogpageimg2 } from "@/src/Assets/blogs";
import React, { useState } from "react";

export default function BreadCrumbBlog() {
  const [showMoreContent, setShowMoreContent] = useState(false);

  // Function to toggle the visibility of additional content
  const toggleShowMoreContent = () => {
    setShowMoreContent(!showMoreContent);
  };

  return (
    <section
      className="main-container w-full justify-start items-start relative"
      style={{
        backgroundImage: `url(${blogpageimg2.src})`,
        backgroundSize: "cover", // This property ensures the background image covers the entire container
        backgroundRepeat: "no-repeat", // Prevents the background image from repeating
        backgroundPosition: "center", // Centers the background image horizontally and vertically
        minHeight: "75vh", // Sets the minimum height of the container to 75% of the viewport height
      }}
    >
      {/* Overlay to decrease background image visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="center relative z-10 flex flex-col">
        <p className="text-bold text-5xl font-bold mt-12 text-white">
          <span className="bg-black bg-opacity-100 p-2">Our Latest</span>{" "}
          <span className="text-red-500 bg-opacity-100 p-2">Blogs</span>
        </p>
        {/* Read more button */}
        <button
          className="bg-white text-black px-4 py-2 rounded-md mt-8"
          onClick={toggleShowMoreContent}
        >
          Read More
        </button>
        {/* Additional content */}
        {showMoreContent && (
          <div className="text-white mt-4">
            <p>
              iPaisa is a digital financial services platform that aims to
              revolutionize the way people manage their finances. With iPaisa,
              users can access a wide range of financial services conveniently
              through their mobile devices, offering a seamless and
              user-friendly experience. From mobile payments and transfers to
              bill payments, loans, and insurance, iPaisa provides a
              comprehensive suite of services tailored to meet the diverse needs
              of its users. One of the key features of iPaisa is its robust
              security measures, ensuring that user transactions and personal
              information are safeguarded against unauthorized access and fraud.
              This instills trust and confidence in users, encouraging
              widespread adoption of the platform. iPaisa also prioritizes
              financial inclusion, aiming to reach underserved communities and
              empower them with access to essential financial services. By
              leveraging technology and partnerships, iPaisa bridges the gap
              between traditional banking services and the unbanked population,
              facilitating financial empowerment and economic growth.
              Furthermore, iPaisa is committed to innovation and continuous
              improvement, constantly evolving its offerings to stay ahead of
              the curve and provide cutting-edge solutions to its users. With
              its customer-centric approach and dedication to excellence, iPaisa
              is poised to reshape the landscape of digital finance and
              contribute to financial inclusion and economic development on a
              global scale.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
