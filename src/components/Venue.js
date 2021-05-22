import React, { Fragment } from 'react'

export default function Venue({ venues }) {
    return (
        <Fragment>
            <div className="sectiontitle">
                <h2>TOP ATTRACTIONS</h2>
            </div>
            <section id="venues">
                {venues.length > 0 && venues.map((venue) => (
                    <div className="venue" id="venue1">
                        <h2>{venue.name}</h2>
                        <img className="venueimage" src={venue.categories[0].icon.prefix + "bg_64" + venue.categories[0].icon.suffix} />
                        <h3>{venue.location.address}</h3>
                        <p>{venue.location.city}</p>
                        <p>{venue.location.country}</p>

                    </div>
                ))}
            </section>
        </Fragment>
    )
}
