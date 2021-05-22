import React, { useState } from 'react'

export default function InputForm({ handleSearchTerm }) {
    const [term, setTerm] = useState('')

    const handleChange = (e) => {
        setTerm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearchTerm(term)

    }

    return (
        <div>
            <header>
                <img className="logo" src="https://content.codecademy.com/courses/intermediate-javascript-requests/wanderlust/logo.svg"
                    alt="logo" />
            </header>

            <main>
                <h1>Where do you want to land?</h1>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" id="city" value={term} onChange={handleChange} />
                    <button id="button" type="submit" >Submit</button>
                </form>
            </main>
        </div>
    )
}
