import PropTypes from "prop-types";

export const ClientView = ({titulo, client}) => {
    const {
        name: nameClient, 
        lastname, 
        address : {
            country,
            city,
            street,
            number
        }
    } = client;
    return (
        <>
            <h1>{titulo}</h1>
            <ul className="list-group">
                <li className="list-group-item active">{nameClient} {lastname}</li>
                <li className="list-group-item">{country}</li>
                <li className="list-group-item">{city}</li>
                <li className="list-group-item">{street}</li>
                <li className="list-group-item">{number}</li>
            </ul>
        </>
    )
}
ClientView.propTypes = {
    titulo: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}