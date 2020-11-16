import React, { useState, useRef } from 'react';
import './index.css';

const Tabs = ({children, name}) => {
    const childrenArray = children.length >= 0 ? children : [children];
    const [activeTab, setActiveTab] = useState(0);
    const [focusedTab, setFocusedTab] = useState(0);
    const buttonRefs = useRef([]);
    const tabPanelRef = useRef();

    const tablistFocusHandler = (evt) => {
        const indexOfFocusedElement = buttonRefs.current.indexOf(evt.target);
        buttonRefs.current[indexOfFocusedElement].focus();
        setFocusedTab(indexOfFocusedElement);
    }

    const keyEventHandler = (evt) => {
        switch (evt.keyCode) {
            case 9: // Tab
                console.log('Tab');
                if(!evt.nativeEvent.shiftKey) {
                    evt.nativeEvent.preventDefault();
                    tabPanelRef.current.focus();
                }

                if(evt.nativeEvent.shiftKey && activeTab !== focusedTab) {
                    setFocusedTab(() => {
                        buttonRefs.current[activeTab].focus();
                        return activeTab
                    })
                }
                break;
            case 36: // Home
                console.log('Home');
                setFocusedTab(() => {
                    buttonRefs.current[0].focus();
                    return 0;
                })
            break;
            case 35: // End
                console.log('End');
                setFocusedTab(() => {
                    buttonRefs.current[buttonRefs.current.length - 1].focus();
                    return buttonRefs.current.length - 1;
                })
            break;
            case 39: // Arrow Right
                console.log('Arrow Right');
                setFocusedTab((focusedTab) => {
                    const activeTab = focusedTab + 1 >= buttonRefs.current.length ? 0 : focusedTab + 1;
                    buttonRefs.current[activeTab].focus();
                    return activeTab
                });
                break;
            case 37: // Arrow Left
                console.log('Arrow Left');
                setFocusedTab((focusedTab) => {
                    const activeTab = focusedTab <= 0 ? buttonRefs.current.length - 1 : focusedTab - 1;
                    buttonRefs.current[activeTab].focus();
                    return activeTab
                });           
                break;
            default:
                break;
        }
    }

    const tabpanelHandler = (evt) => {
        switch (evt.keyCode) {
            case 9: // Tab
                if(evt.nativeEvent.shiftKey) {
                    evt.preventDefault();
                    setFocusedTab(() => {
                        buttonRefs.current[activeTab].focus();
                        return activeTab
                    })
                }
                break;
            default:
                break;
        }
    }

    return(
        <div className="tabs" aria-live="polite">
            <div
                role="tablist"
                className="tabs__tablist"
                onFocus={(evt) => tablistFocusHandler(evt)}
                onKeyDown={(evt) => keyEventHandler(evt)}
            >
                {childrenArray.map((child, i) => (
                    <button
                        role="tab"
                        type="button"
                        key={`tab-${name}-${i}`}
                        id={`tab-${name}-${i}`}
                        className={`tabs__tab ${activeTab === i && 'tabs__tab--active'}`}
                        aria-controls={`${name}-${i}`}
                        onClick={() => setActiveTab(i)}
                        tabIndex={ i === activeTab ? '0' : '-1' }
                        ref={el => buttonRefs.current[i] = el}
                        aria-selected={i === activeTab ? 'true' : 'false'}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            {childrenArray.map((tabpanel, i) => (
                activeTab === i && (
                    <div
                        role="tabpanel"
                        className="tabs__tabpanel"
                        key={`tabpanel-${name}-${i}`}
                        id={`${name}-${i}`}
                        ref={tabPanelRef}
                        onKeyDown={(evt) => tabpanelHandler(evt)}
                        tabIndex="0"
                        aria-labelledby={`tab-${name}-${i}`}
                    >
                        {tabpanel}
                    </div>
                )
            ))}
        </div>
    );
};

export default Tabs;
