import { Row, Col, Form, Card } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import DoctorCard from './DoctorsCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SectionFirst() {
    const [doctorsData, setDoctorsData] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [filteredDepartments, setFilteredDepartments] = useState([]);
    const [doctorSearch, setDoctorSearch] = useState('');
    const [departmentSearch, setDepartmentSearch] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    let api = import.meta.env.VITE_API_BASE_URL;

    const fetchData = async () => {
        try {
            const doctorData = new FormData();
            doctorData.append('view', 'doctor');
            doctorData.append('search', '');
            doctorData.append('department', '');

            const res = await axios.post(api, doctorData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.data && res.data.message === 'success') {
                const responseData = res.data.response;
                if (responseData) {
                    setDoctorsData(responseData.doctors || []);
                    setFilteredDoctors(responseData.doctors || []);
                    setDepartments(responseData.departments || []);
                    setFilteredDepartments(responseData.departments || []);
                }
            }
        } catch (error) {
            console.error('Error fetching doctor data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = doctorsData.filter(doctor =>
            doctor.name.toLowerCase().includes(doctorSearch.toLowerCase())
        );
        setFilteredDoctors(filtered);
        setSelectedDoctor(filtered.length === 1 ? filtered[0] : null);
    }, [doctorSearch, doctorsData]);

    useEffect(() => {
        const filtered = departments.filter(department =>
            department.name.toLowerCase().includes(departmentSearch.toLowerCase())
        );
        setFilteredDepartments(filtered);
    }, [departmentSearch, departments]);

    return (
        <Row className='py-xl-5 py-lg-5 py-md-5 py-0 d-md-flex justify-content-center align-items-start'>
            {/* Sidebar Section */}
            <Col xl={3} lg={4} md={4} className="px-0 py-lg-3 py-md-3 py-xl-3 d-flex flex-column gap-4">
                {/* By Doctors Section */}
                <Card className="shadow p-3 mb-4 rounded-3" style={{ backgroundColor: "#ffffff", border: 'none' }}>
                    <h4 className='hed4 px-2 mb-3' style={{ color: "#333333", fontWeight: "bold", fontSize: "1.25rem" }}>
                        Search by Doctors</h4>
                    <Form className="d-flex flex-column">
                        <div className="position-relative mb-4">
                            <Form.Control
                                type="search"
                                aria-label="Search"
                                placeholder='Enter Doctor Name'
                                className='form-control-search-page'
                                style={{ padding: "10px 45px 10px 15px", borderRadius: "30px", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)" }}
                                value={doctorSearch}
                                onChange={(e) => setDoctorSearch(e.target.value)}
                            />
                            <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y" style={{ marginRight: "15px" }} />
                        </div>
                        <div className='d-flex flex-column gap-2'>
                            {filteredDoctors.map((doctor, index) => (
                                <div key={index} className="p-2 rounded-3 shadow-sm" style={{ backgroundColor: "#F9F9F9" }}>
                                    <h5 className='m-0' style={{ fontSize: "14px", color: "#555" }}>{doctor.name}</h5>
                                </div>
                            ))}
                        </div>
                    </Form>
                </Card>

                {/* By Department Section */}
                <Card className="shadow p-3 mb-4 rounded-3" style={{ backgroundColor: "#ffffff", border: 'none' }}>
                    <h4 className='hed4 px-2 mb-3' style={{ color: "#333333", fontWeight: "bold", fontSize: "1.25rem" }}>Search by Department</h4>
                    <Form className="d-flex flex-column">
                        <div className="position-relative mb-4">
                            <Form.Control
                                type="search"
                                aria-label="Search"
                                placeholder='Enter Department Name'
                                className='form-control-search-page'
                                style={{ padding: "10px 45px 10px 15px", borderRadius: "30px", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)" }}
                                value={departmentSearch}
                                onChange={(e) => setDepartmentSearch(e.target.value)}
                            />
                            <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y" style={{ marginRight: "15px" }} />
                        </div>
                        <div className='d-flex flex-column gap-2'>
                            {filteredDepartments.map((department, index) => (
                                <div key={index} className="p-2 rounded-3 shadow-sm" style={{ backgroundColor: "#F9F9F9" }}>
                                    <h5 className='m-0' style={{ fontSize: "14px", color: "#555" }}>{department.name}</h5>
                                </div>
                            ))}
                        </div>
                    </Form>
                </Card>
            </Col>

            {/* Doctor Cards Section */}
            <Col xl={7} lg={7} md={7} className="d-flex flex-column align-items-start">
                {selectedDoctor && <DoctorCard doctor={selectedDoctor} />}
            </Col>
        </Row>
    );
}