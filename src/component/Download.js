import React, { Component } from 'react';

class Download extends Component {
    render() {
        return (
            <div>
               
                <section className="text-center content-section" id="download" style={{ backgroundColor: 'white' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2>Tải app</h2>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '50%', margin: 'auto' }}><img src="assets/img/bluezone.png" style={{ borderRadius: '75px', border: '2px solid #009cd7' }} /><a className="button" role="button" href="https://bluezone.gov.vn/" data-hover="Are you sure?" style={{ borderRadius: '70px' }} ><span>Tải Bluezone</span></a></div>
                                    <div style={{ width: '50%', margin: 'auto' }}><img src="assets/img/ncovi.png" style={{ borderRadius: '75px', border: '2px solid #009cd7' }} /><a className="button" role="button" href="https://ncovi.vnpt.vn/" data-hover="Are you sure?" style={{ borderRadius: '70px' }} ><span>Tải NCOVI</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
            </div>
        );
    }
}

export default Download;