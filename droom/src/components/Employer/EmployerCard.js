import React from 'react';

// company_name: "Apple Inc"
// description: "Creating the best products for you"
// industry: "Technology"
// mission_statement: "Make your wallet bleed."
// imgUrl: ""
// openPositions: "Developers, Desginers"


const EmployerCard = props => {
    return (
        <div>
            <div>
                <h1>{props.item.company_name}</h1>
                <img src={props.item.imgUrl} />
            </div>
            <div>
                <p>{props.item.description}</p>
                <p>{props.item.mission_statement}</p>
                <p>{props.item.industry}</p>
                <p>{props.openPositions}</p>
            </div>

        </div>
    )
}

export default EmployerCard