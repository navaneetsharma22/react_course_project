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
      <Filter filterData={filterData} />

      <div>
        {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </>
  );
}

export default App;
