import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem name='Andrey P.' salary={800} />
            <EmployersListItem name='Stepan B.' salary={3000} />
            <EmployersListItem name='Alex E.' salary={5000} />
        </ul>
    )
}

export default EmployersList;