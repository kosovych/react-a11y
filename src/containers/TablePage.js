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
        <Table columns={columns} data={data} title="List of workers" />
    </>
);

export default TablePage;
