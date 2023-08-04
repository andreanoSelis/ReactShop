import React from 'react'
import './Footer.css'
function Footer(){
    return(
        <div className="footer_area">
            <div className="footer_area_top">
                <p>Back to Top</p>
            </div>
            <div className="footer_area_links">
                <div className="footer_area_links_area">
                    <span>Contact Us</span>
                </div>
                <div className="footer_area_links_area">
                    <span>About Us</span>
                </div>
                <div className="footer_area_links_area">
                    <span>Help</span>
                </div>
                <div className="footer_area_links_area">
                    <span>FAQs</span>
                </div>
            </div>
            <div className="footer_copyright">
                <p>Copyright © 2020-2021, shopeazy.com, Inc. or its affiliates</p>
            </div>
        </div>
    )
}
export default Footer