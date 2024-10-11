import Nav from 'react-bootstrap/Nav';
import './FilteringHomePage.css';
import { useState } from 'react';

interface FilteringHomePageProps {
    setFilter: (filter: string) => void;
}

function FilteringHomePage({ setFilter }: FilteringHomePageProps) {
    const [activeTab, setActiveTab] = useState<string>('all'); // state برای تب فعال

    const clickHandler = (event: React.MouseEvent<HTMLElement>, filter: string) => {
        event.preventDefault();
        setFilter(filter);
        setActiveTab(filter); // به‌روزرسانی تب فعال
    };

    return (
        <Nav className='Filtering_tabs' variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link
                    className='tab_name'
                    active={activeTab === 'all'}
                    href="/home"
                    onClick={(event) => clickHandler(event, 'all')}
                >
                    All
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    className='tab_name'
                    active={activeTab === "men's clothing"}
                    onClick={(event) => clickHandler(event, "men's clothing")}
                >
                    Men
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    className='tab_name'
                    active={activeTab === "women's clothing"}
                    onClick={(event) => clickHandler(event, "women's clothing")}
                >
                    Women
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    className='tab_name'
                    active={activeTab === 'jewelery'}
                    onClick={(event) => clickHandler(event, 'jewelery')}
                >
                    Jewelry
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    className='tab_name'
                    active={activeTab === 'electronics'}
                    onClick={(event) => clickHandler(event, 'electronics')}
                >
                    Electronics
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default FilteringHomePage;