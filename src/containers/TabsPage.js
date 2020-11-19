import React from 'react';
import Tabs from '../components/Tabs';

const TabsPage = () => (
    <>
        <a
            href="vscode://file//Users/kosovych/Documents/projects/react-a11y/src/components/Tabs/index.js"
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
