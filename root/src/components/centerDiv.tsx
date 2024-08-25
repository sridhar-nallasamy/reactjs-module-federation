const CenterDiv: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeContent: 'center',
        backgroundColor: '#000',
        color: '#fff',
      }}
    >
      {children}
    </div>
  );
};

export default CenterDiv;
