
import './sekhar.css'
function App() {
  return (
    <div >
      <div className="header"><h1 ><b style={{color:"blue"}}>INTELLISAVVY </b><br></br>Form Registration</h1></div>
      <div className="sim">
        <div className="sidebar"><p style={{fontSize:"30px"}}>please fill this form to contact with intellisavvy.</p></div>
        <div className="container">
          <form className="slam">
           <div>Name:<br></br><input type={"text"} required></input></div> 
           <div>Gmail:<br></br><input type={"email"} required></input></div>
           <div>Password:<br></br><input type={"password"} required></input></div>
           <div> Phone no:<br></br><input type={"number"} required></input></div>
          <div>Gender:<br></br><input type={"radio"} name={"gender"}></input>Male
          <input type={"radio"} name={"gender"}></input>Female
          </div>
           <div><input type={"submit"}></input></div>
          </form>
        </div>
      </div>
      <div className="footer"><h1 >for more Queries please login @intellisavvy.com</h1></div>
    </div>
  );
}

export default App;
