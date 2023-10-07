const currentDate = new Date;
const currentYear = currentDate.getFullYear();

const customStyle = {
  color: "gray",
  fontSize: "10px",
};

function Footer() {
  const text = (
    <div>
      <div style={customStyle}>Copyright {currentYear} </div>
    </div>
  );
  return text;
}

export default Footer;
