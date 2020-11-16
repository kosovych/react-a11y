import React from 'react';
import Tabs from '../components/Tabs';

const TabsPage = () => (
    <>
        <button>1</button>
        <br/>
        <br/>
        <Tabs name="tabs" lang="en">
            <div key="1" label='test 1'>Content Test 1</div>
            <div key="2" label='test 2'>Content Test 2</div>
            <div key="3" label='test 3'>Content Test 3</div>
        </Tabs>
        <br/>
        <br/>
        <button>2</button>
    </>
);

export default TabsPage;
