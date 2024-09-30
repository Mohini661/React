const DefaultMsg = ({ fData }) => {
  return (
    <div className="mt-4">
      {fData.length === 0 ? <h2>I am Still Hungry</h2> : null}
    </div>
  );
};
export default DefaultMsg;
