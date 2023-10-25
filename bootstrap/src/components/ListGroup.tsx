import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./Screenshot 2023-10-24 203757.png";

function ListGroup() {
  const [selectedItem, setSelectedItem] = useState("");
  const cvEntries = [
    {
      title: "Personal Details and Photo",
      details: (
        <ul>
          <li>Curious</li>
          <li>Fast Learner</li>
          <li>Ambitious</li>
        </ul>
      ),
      imageSrc: image, // Replace with your image URL
    },
    {
      title: "Education Background",
      details: (
        <ul>
          <li>Primary and Secondary - Arya Vedic School (O Level)</li>
          <li>High School - Oshwal Senior High (A Level)</li>
          <li>Undergraduate - USIU (Doing Applied Computer Science Degree)</li>
        </ul>
      ),
    },
    {
      title: "Special Skills",
      details: (
        <ul>
          <li>Quick Problem Solving</li>
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>Marketing</li>
          <li>
            Wide Knowledge of Computer Languages such as Python, Java, C#, C++,
            etc
          </li>
        </ul>
      ),
    },
    {
      title: "Extra Curriculum Activities",
      details: (
        <ul>
          <li>Football</li>
          <li>Badminton</li>
          <li>Volleyball</li>
        </ul>
      ),
    },
    {
      title: "Hobbies and Interests",
      details: (
        <ul>
          <li>Playing Games</li>
          <li>Technology Advancements</li>
          <li>Music</li>
        </ul>
      ),
    },
  ];

  return (
    <div>
      <h1>Saahil's CV</h1>
      <div className="list-group">
        {cvEntries.map((entry, index) => (
          <button
            key={index}
            type="button"
            className={`list-group-item list-group-item-action ${
              selectedItem === entry.title ? "active" : ""
            }`}
            onClick={() => setSelectedItem(entry.title)}
          >
            {entry.title}
          </button>
        ))}
      </div>
      <div className="mt-3">
        {selectedItem && (
          <div>
            <h2>{selectedItem}</h2>
            {selectedItem === "Personal Details and Photo" && (
              <img
                src={
                  cvEntries.find((entry) => entry.title === selectedItem)
                    .imageSrc
                }
                style={{ width: "250px" }}
              />
            )}
            <div>
              {cvEntries.find((entry) => entry.title === selectedItem).details}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListGroup;
