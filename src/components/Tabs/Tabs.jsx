import { useState } from "react";


export default function TabPanel({tabs}) {
    const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

    const toggleTab = (event) => {
        setActiveTab(event.target.textContent);
    };

    const MapedToggles = () => {
        const tabNames = Object.keys(tabs);

        return tabNames.map((element,index) => {
            return (
                <div key={index} className="catalog-tabs">
                    <button 
                        className={activeTab == element ? "tabs active-tabs" : "tabs"}
                        onClick={toggleTab}
                    >
                        <p>{element}</p>
                    </button>
                </div>
            );
        });
    }

    return (
        <>
            <div className="catalog-tabs">
                <MapedToggles />
            </div>
            <div className="content">
                {tabs[activeTab]}
            </div>
        </>
    );
}