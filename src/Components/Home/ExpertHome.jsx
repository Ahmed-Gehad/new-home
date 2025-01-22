import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


//import imgs
import lImge from "../../imges/expert-1.jpg";
import rTopImge from "../../imges/expert-2.jpg";
import rBottomImge from "../../imges/expert-3.jpg";

const ExpertHome = () => {
    return (
        <div className='ExpertHome'>
            <Container>
                <Row className='mt-5'>
                    <Col lg={12}>
                        <h1 className='fw-bold '>
                            Our expert will help you
                            <br />
                            make the renovation
                        </h1>
                        <div className="line mt-4"></div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className="item mt-5 d-flex justify-content-around align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47.463" viewBox="0 0 48.2 47.463"><g transform="translate(0.1 0.101)"><g transform="translate(6.132)"><g transform="translate(5.593 15.246)"><path d="M763.611,150.617H739.874a.445.445,0,0,1-.446-.446v-15.2a.446.446,0,1,1,.891,0v14.75h22.846V134.949a.446.446,0,1,1,.891,0v15.222A.445.445,0,0,1,763.611,150.617Z" transform="translate(-739.428 -134.503)" stroke="#000" stroke-width="0.2"></path><g transform="translate(8.343 5.226)"><path d="M756.281,151.143a.446.446,0,0,1-.446-.446v-9.441h-6.157V150.7a.446.446,0,1,1-.891,0v-9.886a.446.446,0,0,1,.446-.446h7.048a.445.445,0,0,1,.446.446V150.7A.445.445,0,0,1,756.281,151.143Z" transform="translate(-748.787 -140.365)" stroke="#000" stroke-width="0.2"></path></g></g><path d="M765.891,135.614a.448.448,0,0,1-.282-.1l-14.587-11.883-14.587,11.883a.445.445,0,0,1-.627-.064l-2.553-3.135a.444.444,0,0,1,.064-.627L750.735,117.5a.441.441,0,0,1,.332-.1l.034,0a.431.431,0,0,1,.209.093l17.417,14.187a.447.447,0,0,1,.064.627l-2.554,3.135A.447.447,0,0,1,765.891,135.614Zm-14.869-13a.443.443,0,0,1,.282.1l14.523,11.83,1.992-2.444-16.8-13.681-16.8,13.681,1.992,2.444,14.523-11.83A.442.442,0,0,1,751.022,122.611Z" transform="translate(-733.154 -117.401)" stroke="#000" stroke-width="0.2"></path></g><g transform="translate(0 9.871)"><g transform="translate(35.92)"><path d="M778.2,157.413a.446.446,0,0,1-.446-.446V131.787a2.425,2.425,0,0,0-2.421-2.422h-8.321a.446.446,0,0,1,0-.891h8.321a3.317,3.317,0,0,1,3.313,3.314v25.181A.446.446,0,0,1,778.2,157.413Z" transform="translate(-766.569 -128.473)" stroke="#000" stroke-width="0.2"></path></g><path d="M770.963,161.379H729.589a3.317,3.317,0,0,1-3.313-3.313v-26.28a3.317,3.317,0,0,1,3.313-3.314h8.563a.446.446,0,0,1,0,.891h-8.563a2.425,2.425,0,0,0-2.421,2.422v26.28a2.424,2.424,0,0,0,2.421,2.421h41.375a2.424,2.424,0,0,0,2.421-2.421.446.446,0,1,1,.891,0A3.316,3.316,0,0,1,770.963,161.379Z" transform="translate(-726.276 -128.473)" stroke="#000" stroke-width="0.2"></path><g transform="translate(0 27.102)"><path d="M770.963,164.678H729.589a3.473,3.473,0,0,1-3.313-3.607V159.32a.446.446,0,0,1,.446-.446H773.83a.446.446,0,0,1,.446.446v1.752A3.473,3.473,0,0,1,770.963,164.678Zm-43.8-4.913v1.306a2.584,2.584,0,0,0,2.421,2.715h41.375a2.584,2.584,0,0,0,2.421-2.715v-1.306Z" transform="translate(-726.276 -158.874)" stroke="#000" stroke-width="0.2"></path></g><g transform="translate(20.565 32.015)"><path d="M749.79,169.762a.445.445,0,0,1-.446-.446v-4.485a.446.446,0,1,1,.891,0v4.485A.446.446,0,0,1,749.79,169.762Z" transform="translate(-749.344 -164.385)" stroke="#000" stroke-width="0.2"></path><g transform="translate(5.98)"><path d="M756.5,169.762a.445.445,0,0,1-.446-.446v-4.485a.446.446,0,0,1,.891,0v4.485A.446.446,0,0,1,756.5,169.762Z" transform="translate(-756.052 -164.385)" stroke="#000" stroke-width="0.2"></path></g></g><g transform="translate(17.104 36.5)"><path d="M758.809,170.307h-12.9a.446.446,0,1,1,0-.891h12.9a.446.446,0,1,1,0,.891Z" transform="translate(-745.462 -169.416)" stroke="#000" stroke-width="0.2"></path></g><g transform="translate(23.173 29.787)"><path d="M753.478,162.777h-.762a.446.446,0,1,1,0-.891h.762a.446.446,0,1,1,0,.891Z" transform="translate(-752.27 -161.886)" stroke="#000" stroke-width="0.2"></path></g></g></g></svg>
                            <div>
                                <h3 className='fw-bold text-orange'>Find inspiration</h3>
                                <p className='lead'>Sumo petentium ut per, at his wisim utinam adipis
                                    <br />
                                    cing. Est e graeco quod suavitate vix ad praesent.</p>
                            </div>
                        </div>
                        <div className="item mt-5 d-flex justify-content-around align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="37.762" viewBox="0 0 49 37.762"><g transform="translate(0.15 0.15)"><g transform="translate(41.749 0)"><g transform="translate(1.685)"><path d="M938.44,489.383h-2.849a.341.341,0,0,1-.292-.515c.373-.623.766-1.268,1.14-1.873a.673.673,0,0,1,.272-.247,1.115,1.115,0,0,1,.3-.069.669.669,0,0,1,.562.311c.381.606.782,1.252,1.162,1.875a.34.34,0,0,1-.29.517Zm-2.248-.68h1.642c-.277-.451-.559-.9-.832-1.336C936.741,487.8,936.464,488.25,936.192,488.7Z" transform="translate(-935.251 -486.68)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0 2.023)"><path d="M934.183,525.095a1.405,1.405,0,0,1-1.4-1.406l-.008-30.494c0-.165,0-.473,1.734-3.373a.339.339,0,0,1,.292-.165h2.849a.339.339,0,0,1,.29.163c1.763,2.9,1.762,3.206,1.761,3.373l.007,30.5a1.426,1.426,0,0,1-1.4,1.4Zm.806-34.759a15,15,0,0,0-1.54,2.872l.009,30.482v0a.725.725,0,0,0,.725.723l4.116,0a.745.745,0,0,0,.725-.725l-.007-30.5a15.629,15.629,0,0,0-1.563-2.856Z" transform="translate(-932.771 -489.656)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0 33.15)"><path d="M934.183,539.76a1.405,1.405,0,0,1-1.4-1.406l-.008-2.561a.34.34,0,0,1,.34-.341l6.246,0h0a.34.34,0,0,1,.34.339l.007,2.565a1.426,1.426,0,0,1-1.4,1.406Zm-.731-3.629.007,2.223a.725.725,0,0,0,.725.726l4.116,0a.745.745,0,0,0,.725-.725l-.007-2.226Z" transform="translate(-932.771 -535.449)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0.379 5.125)"><path d="M935.008,496.385a.34.34,0,0,1-.237-.1l-1.339-1.3a.34.34,0,0,1,.474-.487l1.1,1.067,1.121-1.151a.338.338,0,0,1,.239-.1h0a.334.334,0,0,1,.237.1l1.1,1.066,1.121-1.151a.34.34,0,0,1,.487.474l-1.359,1.4a.34.34,0,0,1-.481.005l-1.095-1.067-1.122,1.151a.341.341,0,0,1-.239.1Z" transform="translate(-933.329 -494.22)" stroke="#000" stroke-width="0.3"></path></g></g><g transform="translate(46.283 7.843)"><path d="M939.782,522.289a.34.34,0,0,1-.34-.34V498.559a.34.34,0,0,1,.68,0v23.391A.34.34,0,0,1,939.782,522.289Z" transform="translate(-939.442 -498.219)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0 0.246)"><path d="M891.008,524.258H871.692a.339.339,0,0,1-.34-.34V519.28a.34.34,0,1,1,.68,0v4.3h18.636v-8.157a.34.34,0,0,1,.34-.34h13.481V487.722H872.032v24.7h12.405v-4.135a.34.34,0,0,1,.68,0v4.475a.34.34,0,0,1-.34.34H871.692a.34.34,0,0,1-.34-.34V487.382a.34.34,0,0,1,.34-.34h33.137a.34.34,0,0,1,.34.34v28.039a.34.34,0,0,1-.34.34H891.348v8.157A.34.34,0,0,1,891.008,524.258Z" transform="translate(-871.352 -487.042)" stroke="#000" stroke-width="0.3"></path><g transform="translate(8.922 11.556)"><path d="M888.98,508.29h-4.163a.34.34,0,0,1,0-.68h3.823v-3.229a.34.34,0,0,1,.34-.34h20.052a.34.34,0,0,1,0,.68H889.32v3.229A.34.34,0,0,1,888.98,508.29Z" transform="translate(-884.477 -504.042)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0 15.124)"><path d="M875.091,509.972h-3.4a.34.34,0,1,1,0-.68h3.4a.34.34,0,0,1,0,.68Z" transform="translate(-871.352 -509.292)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(13.085)"><path d="M890.942,494.009a.339.339,0,0,1-.34-.34v-6.288a.34.34,0,0,1,.68,0v6.288A.34.34,0,0,1,890.942,494.009Z" transform="translate(-890.602 -487.042)" stroke="#000" stroke-width="0.3"></path></g></g></g></svg>
                            <div>
                                <h3 className='fw-bold text-orange'>Find architect/designer</h3>
                                <p className='lead'>Sumo petentium ut per, at his wisim utinam adipis
                                    <br />
                                    cing. Est e graeco quod suavitate vix ad praesent.</p>
                            </div>
                        </div>
                        <div className="item mt-5 d-flex justify-content-around align-items-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="45" height="42.795" viewBox="0 0 45.071 42.795"><g transform="translate(0.15 0.15)"><g transform="translate(19.943)"><g transform="translate(4.451)"><g transform="translate(12.553 6.8)"><path d="M773.907,495.011a.357.357,0,0,1-.358-.358v-2.395a.358.358,0,0,1,.715,0v2.395A.357.357,0,0,1,773.907,495.011Z" transform="translate(-773.549 -491.901)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(12.553 4.012)"><path d="M773.907,489.528a.357.357,0,0,1-.358-.358v-.81a.358.358,0,0,1,.715,0v.81A.358.358,0,0,1,773.907,489.528Z" transform="translate(-773.549 -488.003)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(6.276 4.223)"><path d="M765.134,493.986a.357.357,0,0,1-.358-.358v-4.972a.358.358,0,1,1,.715,0v4.972A.357.357,0,0,1,765.134,493.986Z" transform="translate(-764.776 -488.298)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(6.276 0.492)"><path d="M765.134,485.48a.358.358,0,0,1-.358-.358v-1.681a.358.358,0,1,1,.715,0v1.681A.358.358,0,0,1,765.134,485.48Z" transform="translate(-764.776 -483.084)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0.001 5.651)"><path d="M756.363,494.554a.357.357,0,0,1-.358-.358v-3.544a.358.358,0,0,1,.716,0V494.2A.358.358,0,0,1,756.363,494.554Z" transform="translate(-756.005 -490.294)" stroke="#000" stroke-width="0.3"></path></g><path d="M756.362,486.9a.357.357,0,0,1-.358-.358v-3.788a.358.358,0,1,1,.715,0v3.788A.357.357,0,0,1,756.362,486.9Z" transform="translate(-756.004 -482.396)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0 12.149)"><g transform="translate(10.728 4.009)"><path d="M765.135,518.917a.357.357,0,0,1-.358-.358v-3.168a1.259,1.259,0,0,1,.96-1.177l11.9-2.563c.325-.052.521-.241.521-.488v-5.1a.363.363,0,0,0-.363-.363h-2.011a.358.358,0,1,1,0-.715H777.8a1.08,1.08,0,0,1,1.078,1.079v5.1a1.23,1.23,0,0,1-1.106,1.191l-11.854,2.551a.563.563,0,0,0-.425.485v3.168A.357.357,0,0,1,765.135,518.917Z" transform="translate(-764.777 -504.98)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(8.528 17.23)"><path d="M765.82,536.576h-3.008a1.11,1.11,0,0,1-1.109-1.109V525.32c0-.433.346-1.861,1.109-1.861h3.008c.763,0,1.11,1.428,1.11,1.861v10.147A1.111,1.111,0,0,1,765.82,536.576Zm-.039-12.408-2.969.007a2.352,2.352,0,0,0-.393,1.145v10.147a.394.394,0,0,0,.393.394h3.008a.394.394,0,0,0,.394-.394V525.32A2.052,2.052,0,0,0,765.78,524.167Z" transform="translate(-761.703 -523.459)" stroke="#000" stroke-width="0.3"></path></g><path d="M769.478,508.11H752.184a2.4,2.4,0,0,1-2.4-2.4v-3.932a2.4,2.4,0,0,1,2.4-2.4h17.294a2.4,2.4,0,0,1,2.4,2.4v3.932A2.4,2.4,0,0,1,769.478,508.11Zm-17.294-8.018a1.687,1.687,0,0,0-1.686,1.685v3.932a1.687,1.687,0,0,0,1.686,1.685h17.294a1.687,1.687,0,0,0,1.686-1.685v-3.932a1.687,1.687,0,0,0-1.686-1.685Z" transform="translate(-749.783 -499.377)" stroke="#000" stroke-width="0.3"></path><g transform="translate(2.091 5.847)"><path d="M770.056,508.264H753.064a.358.358,0,1,1,0-.715h16.992a.358.358,0,1,1,0,.715Z" transform="translate(-752.706 -507.549)" stroke="#000" stroke-width="0.3"></path></g></g></g><g transform="translate(6.639 8.731)"><path d="M731.546,520.057a.352.352,0,0,1-.245-.1.357.357,0,0,1-.015-.506c2.461-2.609,2.821-3.879,3.121-5.663a8.121,8.121,0,0,0-.448-4.159c-.086-.23-.185-.478-.289-.738-.867-2.159-2.178-5.42,1.477-6.956,2.7-1.136,2.693-1.758,2.678-2.7l0-.255v-4.026a.358.358,0,0,1,.715,0l0,4.268c.021,1.274-.178,2.137-3.117,3.371-3,1.263-1.942,3.906-1.089,6.031.106.266.209.519.3.756a8.84,8.84,0,0,1,.483,4.526c-.314,1.861-.713,3.285-3.307,6.036A.357.357,0,0,1,731.546,520.057Z" transform="translate(-731.189 -494.599)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0.002 8.731)"><path d="M728.906,520.057a.356.356,0,0,1-.26-.112c-2.594-2.75-2.993-4.175-3.307-6.036a8.844,8.844,0,0,1,.483-4.526c.087-.237.19-.49.3-.756.853-2.124,1.915-4.768-1.09-6.031-2.938-1.235-3.137-2.1-3.117-3.371l0-.242v-4.026a.358.358,0,0,1,.716,0l0,4.28c-.015.942-.026,1.564,2.678,2.7,3.655,1.536,2.344,4.8,1.477,6.956-.1.26-.2.507-.29.738a8.147,8.147,0,0,0-.448,4.159c.3,1.784.66,3.054,3.122,5.663a.358.358,0,0,1-.015.506A.354.354,0,0,1,728.906,520.057Z" transform="translate(-721.911 -494.599)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0.006 12.35)"><path d="M735.547,500.373H722.275a.358.358,0,1,1,0-.716h13.273a.358.358,0,0,1,0,.716Z" transform="translate(-721.917 -499.657)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(0 2.519)"><path d="M735.545,493.857H722.267a.357.357,0,0,1-.358-.358v-7.225a.357.357,0,0,1,.358-.358h13.278a.358.358,0,0,1,.358.358V493.5A.357.357,0,0,1,735.545,493.857Zm-12.921-.715h12.563v-6.509H722.625Z" transform="translate(-721.909 -485.917)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(5.566 26.292)"><path d="M731.122,522.01a1.433,1.433,0,1,1,1.432-1.432A1.434,1.434,0,0,1,731.122,522.01Zm0-2.15a.717.717,0,1,0,.717.718A.719.719,0,0,0,731.122,519.86Z" transform="translate(-729.689 -519.145)" stroke="#000" stroke-width="0.3"></path></g><g transform="translate(9.959 2.771)"><path d="M736.186,492.325a.358.358,0,0,1-.358-.358v-5.34a.358.358,0,1,1,.715,0v5.34A.358.358,0,0,1,736.186,492.325Z" transform="translate(-735.828 -486.269)" stroke="#000" stroke-width="0.3"></path></g></g></svg>
                            <div>
                                <h3 className='fw-bold text-orange'>Begin renovation</h3>
                                <p className='lead'>Sumo petentium ut per, at his wisim utinam adipis
                                    <br />
                                    cing. Est e graeco quod suavitate vix ad praesent.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='px-3'>
                        <div className='d-flex '>
                            <div className="left-imge">
                                <img src={lImge} alt="lImge" className=' rounded-3 h-75 mt-5 h-75  ' style={{ width: "250px", marginRight: "20px" }} />

                            </div>
                            <div className="right-imge mt-5">
                                <img src={rTopImge} alt="rTopImge" className='w-100 rounded-3 ' />
                                <img src={rBottomImge} alt="rBottomImge" className='w-100 rounded-3 mt-5' />

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExpertHome

{/*  */ }