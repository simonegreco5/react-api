// sezione import
import { useState } from "react"

export default function AppMain(){

    // chiamate api
    const api_attori = 'https://lanciweb.github.io/demo/api/actors/'
    const api_attrici = 'https://lanciweb.github.io/demo/api/actresses/'

    const [attori, setAttori] = useState(api_attori)


    return (
        <main>
            <div className="container">
                    {
                        attori.map((item) => (
                            <>
                            <div className="card" key={item.id}>
                              <img src={item.image} class="card-img-top" alt="attore" />
                              <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{item.birth_year}{item.nationality}</h6>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{item.awards}</h6>
                                <p className="card-text">{item.biography}</p>
                              </div>
                            </div>
                            </>
                        ))
                    }
            </div>
        </main>

    )
}