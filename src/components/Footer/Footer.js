let style = {
  backgroundColor: "rgb(206 153 4 / 65%)",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

let phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>{children}</div>
    </div>
  );
}

export default Footer;
