import Table from '../components/Table';
import RealTable from '../components/RealTable';

const data = [
    {
        img: 'https://randomuser.me/api/portraits/women/83.jpg',
        name: 'Sarah Bishop',
        email: 'sarah.bishop@example.com',
        address: '8843 Wheeler Ridge Dr',
        id: '1',
    },
    {
        img: 'https://randomuser.me/api/portraits/men/66.jpg',
        name: 'Virgil Green',
        email: 'virgil.green@example.com',
        address: '6781 Hillcrest Rd',
        id: '2',
    },
    {
        img: 'https://randomuser.me/api/portraits/women/56.jpg',
        name: 'Toni Grant',
        email: 'toni.grant@example.com',
        address: '8405 Fincher Rd',
        id: '3',
    },
    {
        img: 'https://randomuser.me/api/portraits/men/62.jpg',
        name: 'Joel Richards',
        email: 'joel.richards@example.com',
        address: '4607 Camden Ave',
        id: '4',
    },
];

const columns = [
    {
        name: "Avatar",
        accessor: "img",
    },
    {
        name: "First / Last Name",
        accessor: 'name',
    },
    {
        name: 'Email',
        accessor: 'email'
    },
    {
        name: 'Address',
        accessor: 'address'
    }
];

const TablePage = () => (
    <>
        <RealTable columns={columns} data={data} title="List of workers" />
        <a
            href="vscode://file/Users/kosovych/Documents/projects/react-a11y/src/components/Table/index.js"
            aria-label="Link to file"
        >
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 234 235.1" width="40" height="52">
                <path
                    class="st0"
                    fill="#0179cb"
                    d="M83.3 143.9l-58 45.2L0 176.5V58.7L25.2 46l57.6 45.3L174 0l60 23.9v186.9l-59.7 24.3-91-91.2zm88.9 15.9V75.3l-54.6 42.3 54.6 42.2zM27.3 144.6L56 118.5 27.3 89.9v54.7z"
                />
            </svg>
        </a>
        <Table columns={columns} data={data} title="List of workers" />
    </>
);

export default TablePage;
