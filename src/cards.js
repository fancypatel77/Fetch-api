import React, { useEffect, useState } from 'react'

const Cards = () => {
    const[user, setUser] = useState([]);
    const[search, setSearch] = useState("");

    const fetchApi = () => {
        fetch("https://randomuser.me/api/?nat=us&results=9&page=1")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            let gagan = data.results
            console.log(gagan)
            setUser(gagan)
        })
    }
    useEffect(()=>{
        fetchApi();
    }, [])
  return (
  <>
  <input type='text' placeholder='search' onChange={(event)=>setSearch(event.target.value)}/>
  <div className="clearfix">
  <div className="row">
    {
        user.filter((data)=>{
          if(search == ""){
            return data
          }else if(data.name.first.toString().toLowerCase().includes(search.toString().toLowerCase())){
            return data;
          }
        })
        .map(data => (
      <div className="col-md-4 animated fadeIn" key={data.id.value}>
        <div className="card">
          <div className="card-body">
            <div className="avatar">
              <img
                src={data.picture.large}
                className="card-img-top"
                alt=""
              />
            </div>
            <h5 className="card-title">
              {data.name.first +
                " " +
                data.name.last}
            </h5>
            <p className="card-text">
              {data.location.city +
                ", " +
                data.location.state}
              <br />
              <span className="phone">{data.phone}</span>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

</div>

  </>
  )
}

export default Cards;
