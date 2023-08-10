import axios from 'axios';
import React, {useNavigate} from 'react'

const Logout = () => {
    const navigateTo = useNavigate();

    const handleLogout = () => {
        axios
        .post("http://localhost:8001/logout")
      .then((response) => {
        if (response.status === 200) {
          navigateTo("/login"); 
        } else {
        }
      }
      )
      .catch((error) => {
        console.log(error);
      });
    } 
  return (
    <div>
    <h1>hiiiiii</h1>
      <button style={{height: '80px', width:'80px', background: '#fff' , color:'#111'}} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
