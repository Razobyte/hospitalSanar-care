import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function HealthPackages() {
  const [healthData, setData] = useState([]);
  let api = import.meta.env.VITE_API_BASE_URL

  const fetchDoctorsData = async () => {
    try {
      const res = await axios.post(api, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log('Full Response:', res);
      // console.log('Response data:', res.data);

      // Set the response data to state
      setData(res.data.response.packages || []);
    } catch (error) {
      // console.error('Error fetching doctors data:', error);
    }
  };

  useEffect(() => {
    fetchDoctorsData();
  }, []);

  return (
    <div className="health-packages-container py-5">
      <h1 className="text-center mb-4 hed2" style={{ color: "#46A4D9" }}>Our Health Packages</h1>
      <Row className="justify-content-center">
        <Col md={10}>
          <Row>
            {healthData.map((data, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Link to={`/health-package/${data.slug}`} className="text-decoration-none">
                  <Card className="h-100 shadow-sm border-light">
                    <Card.Img
                      variant="top"
                      src={data.image}
                      alt={data.title}
                      style={{ objectFit: 'cover', height: '200px' }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title className="text-center" style={{ color: "#46A4D9" }}>
                          {data.title}
                        </Card.Title>
                        <Card.Text className="text-center mt-2">
                          {data.short_description}
                        </Card.Text>
                        <Card.Text className="text-center mt-2" style={{ color: "#00AC26", fontWeight: "bold" }}>
                          <span style={{ color: "#585454", textDecoration: "line-through", fontWeight: "normal" }}>
                            ₹{data.mrp}
                          </span> ₹{data.price}
                        </Card.Text>
                      </div>
                      <div className="text-center mt-3 d-flex justify-content-center align-items-center">
                        <Button className="buttonfirst scan-button-sm m-0">Enquire Now</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>


        </Col>
      </Row>
    </div>
  );
}
