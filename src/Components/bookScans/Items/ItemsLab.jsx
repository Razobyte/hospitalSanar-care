import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../home/Home.css'
import '../category/Category.css'

export default function ItemsLab() {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const api = import.meta.env.VITE_API_BASE_URL;

  const { category, item } = useParams();

  const ItemLabDetail = async () => {[]
    try {
      const formData = new FormData();
      formData.append('view', 'scan_detail');
      formData.append('slug', item);
      
      const res = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const labdata=res.data.response.labs
      setData(labdata)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    if (category && item) {
      ItemLabDetail();
    }
  }, [category, item]);


  const LoadMore = () => {
    setVisibleCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {data.slice(0, visibleCount).map((item, index) => (
        <div key={index} className='p-xl-2 p-md-2 p-lg-2'>
          <Card className='scan-card my-2'>
            <div className='d-flex justify-content-center align-items-center px-1'>
              <div className='scan-card-img-div'>
                <img variant="top" src={item.img} className='img-fluid' alt={item.lab_name} />
              </div>
              <Card.Body className='d-flex flex-column justify-content-center scan-card-body'>
                <h1 className="para fw-bold" style={{ color: "#46A4D9" }}>{item.lab_name}</h1>
                <p className="para subtitle d-md-block d-none" style={{fontSize:"12px"}}>{item.lab_location}</p>
              </Card.Body>
              <div className='d-flex align-items-center justify-content-center py-3 gap-3 scan-card-footer'>
                <div className="para d-flex align-items-center justify-content-center gap-2">
                  <span style={{ textDecoration: "line-through" }}>₹{item.mrp}</span>
                  <span className='scan-price'>₹{item.price}</span>
                </div>
                <div>
                  <button className="buttonfirst" style={{width:"180px",fontSize:"16px",height:"35px"}}>Book Now</button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {visibleCount < data.length && (
        <div className='d-flex justify-content-center align-items-center mt-3'>
          <button className="buttonfirst" onClick={LoadMore}>View More</button>
        </div>
      )}
    </div>
    
  );
}