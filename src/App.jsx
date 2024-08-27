
import { Container } from 'react-bootstrap'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Doctors from './Components/Doctors/Doctors'
import Contact from './Components/ContactUs/Contact'
import Health from './Components/HealthPackage/Health'
import Blog from './Components/BlogPage/Blog';
import BookScans from './Components/BookScansPage/BookScans';
import DigitalXray from './Components/BookScansPage/DigitalXray/DigitalXray'
import UltraSound from './Components/BookScansPage/UltraSounds/UltraSounds'
import CtScan from './Components/BookScansPage/CtScan/CtScan'
import Mri from './Components/BookScansPage/MriScans/Mri'
import Ecg from './Components/BookScansPage/Ecg/Ecg'
import Echo from './Components/BookScansPage/Echo/Echo'
import Tmt from './Components/BookScansPage/Tmt/Tmt'
import Pet from './Components/BookScansPage/Pet/Pet'
import Eeg from './Components/BookScansPage/Eeg/Eeg'
import Dexa from './Components/BookScansPage/Dexa/Dexa'
import Pft from './Components/BookScansPage/Pft/Pft'
import Mammography from './Components/BookScansPage/Mammography/Mammography';
import Abdominal from './Components/BookScansPage/DigitalXray/Abdominal-x-ray/Adominal-x-ray'
import Pelvis from './Components/BookScansPage/DigitalXray/PelvisXray/Pelvis'
import KneeXray from './Components/BookScansPage/DigitalXray/KneeX-Ray/KneeX-ray'
import Cervical from './Components/BookScansPage/DigitalXray/Cervical/Cervical'
import ChestXray from './Components/BookScansPage/DigitalXray/ChestXray/Chest'
import AbdominalUltrasound from './Components/BookScansPage/UltraSounds/Abdominal/Abdominal'
import BreastUltrasound from './Components/BookScansPage/UltraSounds/Breast/Breast'
import KidneyUltrasound from './Components/BookScansPage/UltraSounds/Kidney/Kidney'
import Level2Ultrasound from './Components/BookScansPage/UltraSounds/Level2/Levelultrasound'
import PelvisUltrasound from './Components/BookScansPage/UltraSounds/Pelvis/Pelvis'
import PregnancyUltrasound from './Components/BookScansPage/UltraSounds/Pregnancy/Pregnancy'
import DopplerScan from './Components/BookScansPage/UltraSounds/Doppler/Doppler'
import NTScan from './Components/BookScansPage/CtScan/Nt/Nt'
import ScrotalUltrasound from './Components/BookScansPage/UltraSounds/Scrotal/Scrotal'
import TIFFAScan from './Components/BookScansPage/CtScan/Tiffa/Tiffa'
import TVSUltrasound from './Components/BookScansPage/UltraSounds/Tvs/Tvs';
import AbdominalCTScan from './Components/BookScansPage/CtScan/Abdominal/Abdominal'
import BrainCTScan from './Components/BookScansPage/CtScan/Brain/Brain'
import CBCTScan from './Components/BookScansPage/CtScan/Cbct/Cbct'
import CECTScan from './Components/BookScansPage/CtScan/Cect/Cect'
import CTKUBScan from './Components/BookScansPage/CtScan/CTkub/Ctkub'
import CTPNSScan from './Components/BookScansPage/CtScan/CTpns/Ctpns'
import ChestCTScan from './Components/BookScansPage/CtScan/Chest/Chest'
import HeartCTScan from './Components/BookScansPage/CtScan/Heart/Heart'
import HRCTScan from './Components/BookScansPage/CtScan/Hrct/Hrct'
import SinusCTScan from './Components/BookScansPage/CtScan/Sinus/Sinus'
import BrainMriScan from './Components/BookScansPage/MriScans/BrainMriScans/BrainMri'
import AnkleMri from './Components/BookScansPage/MriScans/AnklMri/Anklmri'
import PelvisMriScan from './Components/BookScansPage/MriScans/Pelvis/Pelvis'
import MriLumber from './Components/BookScansPage/MriScans/MriLubmber/MriLumber'
import MriShoulder from './Components/BookScansPage/MriScans/Shoulder/Shoulder'
import ThreeTMri from './Components/BookScansPage/MriScans/ThreeTmRI/Threetmri'
import MrCpScan from './Components/BookScansPage/MriScans/MrcpScan/MrcpScan'
import MriKnee from './Components/BookScansPage/MriScans/MriKnee/MriKnee'
import MriAngiogram from './Components/BookScansPage/MriScans/MriAngiogram/MriAngriogram'
import MriCervical from './Components/BookScansPage/MriScans/MriCervical/MriCervical'
import MriDorsal from './Components/BookScansPage/MriScans/MriDorsal/MriDorsal'
import PftTest from './Components/BookScansPage/Pft/AterialBloodGasTest/AterialBloodGasTest'
import DexaTest from './Components/BookScansPage/Dexa/DexScanTest.jsx/DexaTest'
import EcgTest from './Components/BookScansPage/Ecg/EcgTest/Ecgtest'
import EchoTest from './Components/BookScansPage/Echo/EchoTest/EchoTest'
import TmtTest from './Components/BookScansPage/Tmt/TmtTest/TmtTest'
import EegTest from './Components/BookScansPage/Eeg/EegTest/EegTest'
import MammographyTest from './Components/BookScansPage/Mammography/MammographyTest/MammographyTest'
import HeartPetTest from './Components/BookScansPage/Pet/heartPetScanTest/heartPetTest'
import PsmaTest from './Components/BookScansPage/Pet/Psmatest/PsmaTest'
import DotanocScan from './Components/BookScansPage/Pet/Dotanoc/Dotanoc'
import AterialBloodGasTest from './Components/BookScansPage/Pft/AterialBloodGasTest/AterialBloodGasTest'
import BodyPlethysmography from './Components/BookScansPage/Pft/BodyPlethysmography/BodyPlethysmography'
import BronchialProvocationTest from './Components/BookScansPage/Pft/BronchialProvocationTest/BronchialProvocationTest'
import DlcoTest from './Components/BookScansPage/Pft/DlcoTest/DlcoTest'
import PulseOximetry from './Components/BookScansPage/Pft/PulseOximetryTest/PulseOximetryTest'
import SpirometryTest from './Components/BookScansPage/Pft/SpirometryTest/SpirometryTest'
import { useEffect } from 'react'
import HealthPackageDetail from './Components/HealthPackage/SubPages/SubfirstPage'
import BlogDetail from './Components/BlogPage/BlogDetails'



function App() {
  const location =useLocation();
  useEffect(()=>{
    window.scrollTo({top:0})
  },[location])
  
  return (
    <>
      <Header />
 
      <Container fluid  className='noscroll'>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/doctors' element={<Doctors />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          {/* <Route path='/blog/blogdetails1' element={<BlogDetails1/>}></Route>
          <Route path='/blog/blogdetails2' element={<BlogDetails2/>}></Route>
          <Route path='/blog/blogdetails3' element={<BlogDetails3/>}></Route>
          <Route path='/blog/blogdetails4' element={<BlogDetails4/>}></Route>
          <Route path='/blog/blogdetails5' element={<BlogDetails5/>}></Route>
          <Route path='/blog/blogdetails6' element={<BlogDetails6/>}></Route> */}
          <Route path='/bookscans' element={<BookScans />}></Route>
          <Route path='/bookscans/digital-xray/gurugram' element={<DigitalXray />}></Route>
          <Route path='/bookscans/ultrasound/gurugram' element={<UltraSound />}></Route>
          <Route path='/bookscans/ct-scan/gurugram' element={<CtScan />}></Route>
          <Route path='/bookscans/mri-scan/gurugram' element={<Mri />}></Route>
          <Route path='/bookscans/ecg-test/gurugram' element={<Ecg />}></Route>
          <Route path='/bookscans/echo-test/gurugram' element={<Echo />}></Route>
          <Route path='/bookscans/tmt-test/gurugram' element={<Tmt />}></Route>
          <Route path='/bookscans/pet-scan/gurugram' element={<Pet />}></Route>
          <Route path='/bookscans/eeg-test/gurugram' element={<Eeg />}></Route>
          <Route path='/bookscans/dexa-scan/gurugram' element={<Dexa />}></Route>
          <Route path='/bookscans/pft-test/gurugram' element={<Pft />}></Route>
          <Route path='/bookscans/mammography/gurugram' element={<Mammography />}></Route>
          <Route path='/bookscans/digital-xray/abdominal-x-ray/gurugram' element={<Abdominal />}></Route>
          <Route path='/bookscans/digital-xray/pelivis-x-ray/gurugram' element={<Pelvis />}></Route>
          <Route path='/bookscans/digital-xray/knee-x-ray/gurugram' element={<KneeXray />}></Route>
          <Route path='/bookscans/digital-xray/chest-x-ray/gurugram' element={<ChestXray />}></Route>
          <Route path='/bookscans/digital-xray/cervical-x-ray/gurugram' element={<Cervical />}></Route>
          <Route path='/bookscans/ultrasound/adbominal-ultrasound/gurugram' element={<AbdominalUltrasound />} />
          <Route path='/bookscans/ultrasound/breast-ultrasound/gurugram' element={<BreastUltrasound />} />
          <Route path='/bookscans/ultrasound/kidney-ultrasound/gurugram' element={<KidneyUltrasound />} />
          <Route path='/bookscans/ultrasound/level2-ultrasound/gurugram' element={<Level2Ultrasound />} />
          <Route path='/bookscans/ultrasound/pelvis-ultrasound/gurugram' element={<PelvisUltrasound />} />
          <Route path='/bookscans/ultrasound/pregnancy-ultrasound/gurugram' element={<PregnancyUltrasound />} />
          <Route path='/bookscans/ultrasound/scrotal-ultrasound/gurugram' element={<ScrotalUltrasound />} />
          <Route path='/bookscans/ultrasound/doppler-scan/gurugram' element={<DopplerScan />} />
          <Route path='/bookscans/ultrasound/tvs-ultrasound/gurugram' element={<TVSUltrasound />} />
          <Route path='/bookscans/ctscan/nt-scan/gurugram' element={<NTScan />} />
          <Route path='/bookscans/ctscan/tiffa-scan/gurugram' element={<TIFFAScan />} />
          <Route path='/bookscans/ctscans/heart-ct-scan/gurugram' element={<HeartCTScan />} />
          <Route path='/bookscans/ctscans/sinus-ct-scan/gurugram' element={<SinusCTScan />} />
          <Route path='/bookscans/ctscans/abdominal-ct-scan/gurugram' element={<AbdominalCTScan />} />
          <Route path='/bookscans/ctscans/brain-ct-scan/gurugram' element={<BrainCTScan />} />
          <Route path='/bookscans/ctscans/chest-ct-scan/gurugram' element={<ChestCTScan />} />
          <Route path='/bookscans/ctscans/ct-kub-scan/gurugram' element={<CTKUBScan />} />
          <Route path='/bookscans/ctscans/ctpns-scan/gurugram' element={<CTPNSScan />} />
          <Route path='/bookscans/ctscans/cbct-scan/gurugram' element={<CBCTScan />} />
          <Route path='/bookscans/ctscans/cect-scan/gurugram' element={<CECTScan />} />
          <Route path='/bookscans/ctscans/hrct-scan/gurugram' element={<HRCTScan />} />
          <Route path='/bookscans/mri-scan/brain-mri-scans/gurgram' element={<BrainMriScan />} />
          <Route path='/bookscans/mri-scan/lumbar-spine-scans/gurugram' element={<MriLumber />} />
          <Route path='/bookscans/mri-scan/pelvis-mri-scan/gurugram' element={<PelvisMriScan />} />
          <Route path='/bookscans/mri-scan/mri-knee/gurugram' element={<MriKnee />} />
          <Route path='/bookscans/mri-scan/ankle-mri/gurugram' element={<AnkleMri />} />
          <Route path='/bookscans/mri-scan/shoulder-mri/gurugram' element={<MriShoulder />} />
          <Route path='/bookscans/mri-scan/mri-3t/gurugram' element={<ThreeTMri />} />
          <Route path='/bookscans/mri-scan/mrcp-scan/gurugram' element={<MrCpScan />} />
          <Route path='/bookscans/mri-scan/angiogram-scan/gurgram' element={<MriAngiogram />} />
          <Route path='/bookscans/mri-scan/cervical-spin-scan/gurugram' element={<MriCervical />} />
          <Route path='/bookscans/mri-scan/dorsal-spine-mri/gurugram' element={<MriDorsal />} />
          <Route path='/bookscans/dexa-scan/dexa-scans/gurugram' element={<DexaTest />} />
          <Route path='/bookscans/ecg-test/ecg-tests/gurugram' element={<EcgTest />} />
          <Route path='/bookscans/echo-test/echo-tests/gurugram' element={<EchoTest />} />
          <Route path='/bookscans/tmt-test/tmt-tests/gurugram' element={<TmtTest />} />
          <Route path='/bookscans/eeg-test/eeg-tests/gurugram' element={<EegTest />} />
          <Route path='/bookscans/mammography/mammographys/gurugram' element={<MammographyTest />} />
          <Route path='/bookscans/pet-scan/heart-pet-test/gurugram' element={<HeartPetTest />} />
          <Route path='/bookscans/pet-scan/psma-pet-test/gurugram' element={<PsmaTest />} />
          <Route path='/bookscans/pet-scan/dotanoc-pet-test/gurugram' element={<DotanocScan />} />
          <Route path="/bookscans/pft-tests/arterial-blood-gas-test/gurugram" element={<AterialBloodGasTest />} />
          <Route path="/bookscans/pft-tests/body-plethysmography/gurugram" element={<BodyPlethysmography />} />
          <Route path="/bookscans/pft-tests/bronchial-provocation-test/gurugram" element={<BronchialProvocationTest />} />
          <Route path="/bookscans/pft-tests/dlco-test/gurugram" element={<DlcoTest />} />
          <Route path="/bookscans/pft-tests/pulse-oximetry-test/gurugram" element={<PulseOximetry />} />
          <Route path="/bookscans/pft-tests/spirometry-test/gurugram" element={<SpirometryTest />} />
          <Route path="/health-package" element={<Health />} />
          <Route path="/health-package/:slug" element={<HealthPackageDetail />} />
      
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blogdetails/:slug" element={<BlogDetail />} />





          ...


        </Routes>
        <Footer />

      </Container>
    </>
  )
}

export default App
