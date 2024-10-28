import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function SetupVoucherAside({ state }) {
    const [activeKey, setActiveKey] = useState(state?.data?.[0]?.name || "");

    const linkStyle = {
        fontSize: "16px",
        fontWeight: 700,
        color: "#000", // default color
    };

    const activeLinkStyle = {
        ...linkStyle,
        color: "#fff",
        backgroundColor: "#007bff",
    };

    return (
        <Nav
            variant="pills"
            className="flex-column"
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
        >
            {state?.data?.map((item) => (
                <Nav.Item key={item?.name}>
                    <Nav.Link
                        eventKey={item?.name}
                        style={activeKey === item.name ? activeLinkStyle : linkStyle}
                        className="my-2 border"
                    >
                        {item?.name}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default SetupVoucherAside;
