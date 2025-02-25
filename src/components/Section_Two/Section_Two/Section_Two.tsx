// STYLED COMPONENTS
import { Wrapper } from "./Section_Two.styles"

// BOOTSTRAP COMPONENTS
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//COMPONENTS
import Trending_Product from "../Trending_Product/Trending_Product";





const Section_Two = () => {
    return (
        <>
            <Wrapper className="container p-0">
               
                <div className="left">
                    <Tabs
                        defaultActiveKey="new-arrivals"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >   
                        <Tab eventKey="trending-product" title="TRENDING PRODUCT" className="trending-title" disabled ></Tab>
                        <Tab eventKey="new-arrivals" title="New Arrivals" className="tab-content">
                            <div className="tab-content container p-0">
                                <Trending_Product />
                                <Trending_Product />
                                <Trending_Product />
                                <Trending_Product />
                                <Trending_Product />
                                <Trending_Product />
                                <Trending_Product />
                                <Trending_Product />
                            </div>
                        </Tab>
                        <Tab eventKey="featured" title="Featured">
                            <div className="">
                                Tab content for Featured
                            </div>
                        </Tab>
                        <Tab eventKey="top -selling" title="Top Selling" >
                            <div className="">
                                Tab content for Top
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <div className="right">
                    dfghjkfghjkl
                </div>
            </Wrapper>
        </>
    )
}

export default Section_Two