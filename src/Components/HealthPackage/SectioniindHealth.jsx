import {Row,Col} from 'react-bootstrap'

export default function SectioniindHealth() {
    return (
        <>
            <Row className="d-flex justify-content-center align-items-center py-5"  style={{backgroundColor:"#DEF0FF"}}>
                <Col md={10} >
                    <h1 className="hed1 text-center pb-4">Health Packages Offers</h1>
                    <div className="text-center">
                        <p className="para">Every Indian home now has access to world-class health care services right outside their door because of the Internet. Due to increased
                            understanding, most people are now concerned about their personal health and the physical well-being of their families. However, tragically,
                            obesity and other life-altering illnesses are on the rise. But because of the media, people are becoming more aware of this.</p>
                            <p className="para">
                            To protect the health of ordinary people, various health check packages provided by hospitals, large and small, act as modern-day messiahs. These
                            health packages, if used occasionally, might easily save the user from paying hefty hospital fees in the future. Additionally, thanks to new
                            technologies, doctors can quickly perform various tests as part of health checkup packages and have findings. The availability of various health
                            checkup packages today is like a lifeline for folks because it was previously impossible.</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}