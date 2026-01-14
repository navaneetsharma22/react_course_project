import React from "react";
import Card from "./Card";

function Cards({ courses }) {

  // safety check (VERY IMPORTANT)
  if (!courses) {
    return <div>Loading...</div>;
  }

  function getCourses() {
    let allCourses = [];

    Object.values(courses).forEach((array) => {
      array.forEach((course) => {
        allCourses.push(course);
      });
    });

    return allCourses;
  }

  return (
    <div>
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
