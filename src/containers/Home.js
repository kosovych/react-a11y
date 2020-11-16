import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <Link to="/tabs">Tabs</Link>
        <br />
        <Link to="/table">Table</Link>
        <br />
        <Link to="/modal">Modal</Link>
    </>
);

export default Home;
