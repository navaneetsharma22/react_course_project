import React from "react";
import toast from "react-hot-toast";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
let setLikedCourses = props.setLikedCourses;
    
    const clickHandler = () => {

        //Logic
        if(likedCourses.includes(course.id)){
            //pehle se like hua pada tha 
            setLikedCourses((prev) => prev.filter((cid)=>(cid !== course.id)));
            toast.error("Like Removed!");
         
        }
       
        else{
            //pehle se like nahi hai ye course
            //insert karna h ye course liked course me 
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty array
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

  return (
    <div className="w-75 bg-slate-800 rounded-md overflow-hidden">
      <div className="relative">
        <img  src={course.image.url} />

        <div className="w-12 h-12 bg-white rounded-full absolute right-2
        bottom-3 grid place-items-center  ">
          <button onClick={clickHandler} className="cursor-pointer">
          {
            !likedCourses.includes(course.id) ?

             (<FcLikePlaceholder fontSize="1.75rem"/>) : ( <FcLike fontSize="1.75rem" />)
          }

          
           
          </button>
        </div>


      </div>

      <div>
        <p className="text-white font-semibold text-lg line-clamp-3 leading-6  ">{course.title}</p>
        <p className=" mt-2 text-white">
        {
            course.description.length >100 ?
             (course.description.substr(0,100)) + " ......": (course.description)
        }
        </p>
      </div>
    </div>
  );
};

export default Card;
