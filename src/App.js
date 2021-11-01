import SectionTitle from './components/feedbackCounter/SectionTitle';
import Buttons from './components/feedbackCounter/Options';
import Statistic from './components/feedbackCounter/Statistic';
import Notification from './components/feedbackCounter/Notification';

export default function App() {
  return (
    <div>
      <SectionTitle>
        <Buttons />
        <Notification />
        <Statistic />
      </SectionTitle>
    </div>
  );
}
