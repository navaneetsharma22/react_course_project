import { useState, useEffect } from "react";
import Navbar from "./components/common/nav/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import "./App.css";
import { apiUrl, filterData } from "./data";
import { toast, Toaster } from "react-hot-toast";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Error fetching data");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <Navbar />

      <div
        className="bg-slate-950"
      >
        <Filter filterData={filterData} setCategory={setCategory}/>

        <div className="w-11/12 max-w-300 mx-auto flex flex-wrap justify-center min-h-[50vh] ">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        </div>
      </div>
    </>
  );
}

export default App;
