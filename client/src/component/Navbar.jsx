import React from 'react'


export default function Navbar() {

    let style1 = {
        backgroundColor: "#9DDE8B",
        margin: "0px",
        padding: "2px",
        borderRadius: "5px"
    }
    let style12 = {
        backgroundColor: "#9DDE8B",
        margin: "0px",
        padding: "2px",
        borderRadius: "5px",
        innerWidth:"100%"
    }

    let style2 = {
        backgroundColor: "#40A578",
        margin: "0px",
        padding: "2px",
        borderRadius: "5px"
    }
    return (
        <div className='App' >
            <nav className="navbar navbar-expand-lg" style={style12} >
                <div className="container-fluid" style={style1}>
                    <a className="navbar-brand" href="/">Diet Planner</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/">Features</a>
                            <a className="nav-link" href="/">Pricing</a>
                        </div>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" type="submit" style={{ backgroundColor: "white" }}>Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}
