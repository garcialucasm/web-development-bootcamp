function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const content = (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
  return content;
}

export default Footer;
