import Header from '../components/Header';
import Details from '../containers/HospitalAccordion';
import Doctor from '../components/Doctor';

export default function hospitalAppointment() {
  return (
    <div style={{ width: '100%' }}>
      <Header />
      <Doctor />
      <Details />
    </div>
  );
}
