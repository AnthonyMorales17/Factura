import PropTypes from "prop-types"

export const CompanyView = ({titulo, company}) => {
    return (
        <>
            <h1>{titulo}</h1>
            <ul className="list-group">
                <li className="list-group-item active">
                    {company.name}
                </li>
                <li className="list-group-item">
                    {company.ruc}
                </li>
            </ul>
        </>
    )
}
CompanyView.propTypes = {
    titulo: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired
}