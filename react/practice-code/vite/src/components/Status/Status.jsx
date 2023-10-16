function Status() {
    var inUse = true;
  
    const decorationIsAvailable = { textDecoration: "line-through", color: "gray"};
  
    return <div style={inUse && decorationIsAvailable}>Bike in use</div>;
  }
  
  export default Status;
  