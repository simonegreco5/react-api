// sezione import
import { useEffect, useState } from "react"

export default function AppMain(){

    // chiamate api
    const api_attori = 'https://lanciweb.github.io/demo/api/actors/'
    const api_attrici = 'https://lanciweb.github.io/demo/api/actresses/'

    const [attori, setAttori] = useState([])
    const [attrici, setAttrici] = useState([])

    // attori
    useEffect(() => {
        fetch(api_attori)
        .then(response => response.json())
        .then(data => {
            setAttori(data)
        })

    }, [])

    // attrici
    useEffect(() => {
        fetch(api_attrici)
        .then(response => response.json())
        .then(data => {
            setAttrici(data)
        })
    }, [])


    return (
        <main>
            <div className="container">
                <h2>Best Actors</h2>
                <div className="row g-5">
                    {
                        attori.map((item) => (
                            <>
                            <div className="col-md-4 g-3">
                              <div className="card w-75 h-100 bg-dark text-white" key={item.id}>
                                <img src={item.image} className="card-img-top img-card" alt="attore" />
                                <div className="card-body p-5">
                                  <h5 className="card-title">{item.name}</h5>
                                  <h6 className="card-subtitle mb-2 text-white">born in {item.nationality} in {item.birth_year}</h6>
                                  <h6 className="card-subtitle mb-2 text-awards">{item.awards}</h6>
                                  <p className="card-text">{item.biography}</p>
                                </div>
                              </div>
                            </div>
                            </>
                        ))
                    }
                </div>

                <h2>Best Actresses</h2>
                <div className="row g-5 mt-3">
                    {
                        attrici.map((item) => (
                            <>
                            <div className="col-md-4 g-3">
                              <div className="card w-75 h-100 bg-dark text-white" key={item.id}>
                                <img src={item.image} className="card-img-top img-card" alt="attrice" />
                                <div className="card-body p-5">
                                  <h5 className="card-title">{item.name}</h5>
                                  <h6 className="card-subtitle mb-2 text-white">born in {item.nationality} in {item.birth_year}</h6>
                                  <h6 className="card-subtitle mb-2 text-awards">{item.awards}</h6>
                                  <p className="card-text">{item.biography}</p>
                                </div>
                              </div>
                            </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </main>

    )
}