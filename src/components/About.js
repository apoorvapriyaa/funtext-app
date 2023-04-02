import React from 'react'

export default function About(props) {

    let aboutStyle = {
        color: props.mode === 'dark' ? 'white' : '#18122B',
        backgroundColor: props.mode === 'dark' ? '#18122B' : 'white',
        borderColor: props.mode === 'light' ? 'black' : 'white'
    }

    let buttonStyle = {
        color: props.mode === 'dark' ? 'white' : '#393053',
        backgroundColor: props.mode === 'dark' ? '#393053' : 'white',
        borderColor: props.mode === 'light' ? 'black' : 'white'
    }

    return (
        <div className="container" style={aboutStyle} >
            <h1 className="my-3">About</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={buttonStyle}
                        >
                            Have Fun With Text
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={aboutStyle}>
                            <p>This is a really cool and simple-to-use website that you can use to manipulate your text.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={buttonStyle}
                        >
                            Free to Use
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={aboutStyle}>
                            <p>This website is made absolutely free to use! You can play around with text and even put it to use without paying a penny. Now isn't that great?</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={buttonStyle}
                        >
                            Contact
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={aboutStyle}>
                            <p>
                                email: beingapoorva77@gmail.com <br />
                                github: <a href="https://github.com/apoorvapriyaa">go to my github</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
