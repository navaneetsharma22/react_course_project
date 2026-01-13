import React from "react";

const Filter = (props) =>{
    let filterData = props.filterData;
    return(
        filterData.map((data) => (
            <button key={data.title}> {data.title}</button>
        ))

    )



}

export default Filter;   