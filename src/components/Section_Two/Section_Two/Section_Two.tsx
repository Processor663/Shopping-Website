// STYLED COMPONENTS
import { Wrapper } from "./Section_Two.styles"

// HEADLESS UI COMPONENTS
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

//COMPONENTS
import Trending_Product from "../Trending_Product/Trending_Product";
import Testimonial from "../Testimonials/Testimonial";
import NewsLetter from "../NewsLetter/NewsLetter";



const tabs: string[] = ["New Arrivals", "Featured", "Top Selling"];


const Section_Two = () => {
    return (
        <>
            {<Wrapper className="container p-0">
                <div className="left">
                    <TabGroup>
                        <TabList className="tab-head">
                            <h5 className="trending-title">TRENDING PRODUCT</h5>
                            <div className="tab-navs">
                                {tabs.map( ( tab, index ) => (
                                    <Tab key={index} className={( { selected } ) => selected ? "text-[var(--brand-secondary)]" : "text-[var(--navbar-text-color)]"}>{tab}</Tab>

                                ) )}
                            </div>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div className="tab-content container p-0">
                                    <Trending_Product flag= "sale" />
                                    <Trending_Product flag="sold"/>
                                    <Trending_Product flag= "sale" />
                                    <Trending_Product flag="sold"/>
                                    <Trending_Product flag= "sale" />
                                    <Trending_Product flag="sold"/>
                                    <Trending_Product flag= "sale" />
                                    <Trending_Product flag="sold"/>
                                </div>
                            </TabPanel>
                            <TabPanel>Content 2</TabPanel>
                            <TabPanel>Content 3</TabPanel>
                        </TabPanels>
                    </TabGroup>
                    <div className="view-all-container">
                        <button className="view-all-button">VIEW ALL</button>
                    </div>


                </div>
                <div className="right">
                    <Testimonial />
                    <NewsLetter />
                </div>
            </Wrapper>}
        </>
    )
}

export default Section_Two;