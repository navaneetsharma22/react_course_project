import React, { useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {

  // safety check
  if (!courses) {
    return <div>Loading...</div>;
  }

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    // All category
    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((courseArray) => {
        courseArray.forEach((course) => {
          allCourses.push(course);
        });
      });

      return allCourses;
    }

    // Specific category
    return courses[category] || [];
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
