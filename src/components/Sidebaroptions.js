import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "../css/sidebaroption.css";

function Sidebaroptions() {
  return (
    <div className='sidebar__options'>
      <div className='sidebar__option'>
        <AddIcon />
        <p>Add Space</p>
      </div>
      <div className='sidebar__option'>
        <img
          src='https://qph.cf2.quoracdn.net/main-thumb-ti-1579454-100-yodgcmvdshmlhybhshprmxiwgndwgmfd.jpeg'
          alt=''
        />
        <p>Ionic</p>
      </div>
      <div className='sidebar__option'>
        <img
          src='https://qph.cf2.quoracdn.net/main-thumb-ti-1584740-100-guulfrqovyreyzikewsighewdgynctzv.jpeg'
          alt=''
        />
        <p>Android Apps</p>
      </div>
      <div className='sidebar__option'>
        <img
          src='https://qph.cf2.quoracdn.net/main-thumb-t-1393740-100-tjtbwiqofezszbgbqrtunqerutuchpmn.jpeg'
          alt=''
        />
        <p>Technology</p>
      </div>
      <div className='sidebar__option'>
        <img
          src='https://qph.cf2.quoracdn.net/main-thumb-t-886-100-G0cfWqYKutYOKFFFnJZhqk17gMAxT3p8.jpeg'
          alt=''
        />
        <p>Science</p>
      </div>

      <div className='sidebar__option'>
        <img
          src='https://qph.cf2.quoracdn.net/main-thumb-t-1297-100-cwgmbdmtfvjqincfuoxahtqhscxuxyum.jpeg'
          alt=''
        />
        <p>Medical Doctors</p>
      </div>
      <div className='sidebar__option'>
        <img
          src='https://qph.cf2.quoracdn.net/main-thumb-t-2083-100-ZIligJqj9z5X1wq9ICcvI9QNj9OBLdwS.jpeg'
          alt='Icon for Chemistry'
        />
        <p>Chemistry</p>
      </div>
      <div className='sidebar__option'>
        <img
          src='https://qph.cf2.quoracdn.net/main-thumb-t-1393903-100-tfltvquinjejunmevoauvdehgunarhat.jpeg'
          alt=''
        />
        <p>Business</p>
      </div>
    </div>
  );
}

export default Sidebaroptions;
