import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("UpperCase was Clicked")
        let uppercaseText = text.toUpperCase()
        setText(uppercaseText)
    }

    const handleLowClick = () => {
        let lowercaseText = text.toLowerCase()
        setText(lowercaseText)
    }

    const handleClearClick = () => {
        setText("")
    }

    const handleCamelClick = () => {
        let tempText = text.toLowerCase()
        let camelcaseText = tempText.split(" ").reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)))
        setText(camelcaseText)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard!", "Success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces were removed", "Success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : '#18122B' }}>Enter text to analyze</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder='Enter text here'
                        value={text}
                        onChange={handleOnChange}
                        id="exampleFormControlTextarea1"
                        rows={8}
                        style={{ backgroundColor: props.mode === 'dark' ? '#18122B' : 'white', color: props.mode === 'dark' ? 'white' : '#18122B' }}
                    />
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={handleClearClick}>CLEAR</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={handleCamelClick}>Convert to Camelcase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={handleCopyClick}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#18122B' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters.</p>
                <p>{0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    )
}
