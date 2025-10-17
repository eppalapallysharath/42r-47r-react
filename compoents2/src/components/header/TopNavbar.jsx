const TopNavbar = () => {
  const price = 50;
  return (
    <nav style={{ height:"50px", backgroundColor:"black", color:"#b5aec4", display:"flex", padding: "0px 15px", justifyContent:"space-around"}}>
      <div>
        <p>free shipping on all u.s orders over ${price} </p>
      </div>
      <div>
        <ul style={{ listStyleType:"none",  display:"flex", gap:"10px"}}>
          <li>USD</li>
          <li>English</li>
          <li>My Account</li>
        </ul>
      </div>
    </nav>
  )
};
export default TopNavbar;
