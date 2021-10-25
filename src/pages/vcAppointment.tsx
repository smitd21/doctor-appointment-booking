import Header from '../components/Header';
import Details from '../containers/VcAccordion';
import Doctor from '../components/Doctor';

export default function onlineAppointment() {
  
  return (
    <div style={{ width: '100%' }}>
      <Header />
      <Doctor />
      <Details />
    </div>
  );
}
