import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    function displayMinRead(minutes){
        let output = ''
        if(minutes < 30){
            const coffees = Math.ceil(minutes / 5)
            for(let i=0; i<coffees; i++){output += '☕️'}
        } else {
            const bentos = Math.ceil(minutes / 10)
            for(let i=0; i<bentos; i++){output += '🍱'}
        }
        return output
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}{displayMinRead(minutes)}{minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article