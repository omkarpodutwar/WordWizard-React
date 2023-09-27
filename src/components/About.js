import React from 'react'

export default function About(props) {
    
    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className="my-3">{props.about}</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Hello this is Omkar, creater of this website.</strong>
                        <br /><br />
                            🎓 I'm a CSE graduate from Savitrbai Phule Pune University '23.
                            <br /><br />
                            <strong>This website is created using React.js.</strong>
                           
                    </div>
                    </div>
                </div>
        </div>
        </div>
    )
}