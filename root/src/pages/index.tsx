import CenterDiv from '@/components/centerDiv';

const App: React.FC<{ label?: string }> = ({ label }) => {
  return <CenterDiv>Page 🖥️ {label}</CenterDiv>;
};

export default App;
