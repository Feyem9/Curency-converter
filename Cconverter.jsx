import React from "react";
import "./cconvert.css";
import Scrolltab from "./Scrolltab"
import { useState } from "react";
export default function () {
  const [name, setName] = useState({amount:"" ,  of:"" , toward:""});
  
  function handleSubmit(e){
    e.preventDefault();
    console.log(name);
    
  } 
  return (
    <div className="parentDiv">
      <div className="fChildDiv">
        <div className="fChildDivOne">
          <div className="fChildDivOneOne">
            <div className="fChildDivOneOneOne">
              <h1 className="hOne"> PayUnit Currency Converter </h1>
              <p className="pOne">
                Welcome to the world's most popular money tool.
              </p>
            </div>
            <div className="fChildDivOneOneTwo">
              <div className="fChildDivOneOneTwoOne">
              
                <Scrolltab />

              </div>
              <div className="fChildDivOneOneTwoTwo">
                <form action="">
                  <div className="fChildDivOneOneTwoTwoOne">
                    <label htmlFor="amount"> Amount </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      placeholder="1,00$"
                      value={name.amount}
                      onChange={(e) =>  setName({...name ,amount:e.target.value})}
                    />
                  </div>
                  <div className="fChildDivOneOneTwoTwoTwo">
                    <label htmlFor="of"> Of </label>
                    <select name="of" id="of" value={name.of} onChange={(e) =>  setName({...name ,of:e.target.value})} >
                      <option value="USD">USD = United States Dollar</option>
                      <option value="EUR">EUR = Euro </option>
                      <option value="GBP">GBP = Great Britain Pound</option>
                      <option value="JPY">JPY = Japanese Yen</option>
                      <option value="AUD">
                        AUD = Australian United Dollar
                      </option>
                      <option value="CAD">CAD = Canadian Dollar</option>
                      <option value="CHF">CHF = Swiss Franc</option>
                      <option value="CNY">CNY = Chinese Yuan</option>
                      <option value="DKK">DKK = Danish Krone</option>
                      <option value="DKK">FCFA = Franc Cfa </option>
                    </select>
                  </div>
                    
                  <div className="material-icons" >
                    swap_horiz
                  </div>

                  <div className="fChildDivOneOneTwoTwoFour">
                    <label htmlFor="towards"> Towards </label>
                    <select name="towards" id="towards" value={name.toward} onChange={(e) =>  setName({...name ,toward:e.target.value})} >
                      <option value="EUR">EUR = Euro </option>
                      <option value="JPY">JPY = Japanese Yen</option>
                      <option value="CAD">CAD = Canadian Dollar</option>
                      <option value="GBP">GBP = Great Britain Pound</option>
                      <option value="AUD">
                        AUD = Australian United Dollar
                      </option>
                      <option value="CHF">CHF = Swiss Franc</option>
                      <option value="DKK">FCFA = Franc Cfa </option>
                      <option value="CNY">CNY = Chinese Yuan</option>
                      <option value="DKK">DKK = Danish Krone</option>
                      <option value="USD">USD = United States Dollar</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="fChildDivOneOneTwoThree">
                <p>
                  {name.amount}{name.of} = <br />
                  <span className="chiffre">
                    0,93 847853
                    {name.toward}
                  </span><br />
                  1 EUR = 1,06527 USD
                </p>
              </div>
              <div className="fChildDivOneOneTwoFour">
                <span>
                  We use the mid-market rate for our converter. The rate is
                  given for information purposes only. You will not benefit from
                  this rate when sending money.
                  <a href="">Check shipping rates.</a>
                </span>
                <button type="submit" onClick={(e) => handleSubmit(e)}> Convert </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sChildDiv">
        <div className="sChildDivOne">
          <h1>Recommended by over 40,000 verified customers</h1>
        </div>
        <div className="sChildDivTwo">
          <div className="sChildDivTwoOne">
            <p>'Great'</p>
            <img src="/Vectorstars.png" alt="" /><br />
            <span>Based on 68,513 reviews</span>
            <div className="img">
              <img src="/Vectorstar.png" alt="" />
              <p>trustPilot</p>
            </div>
          </div>
          <div className="sChildDivTwoTwo">
            <div className="sChildDivTwoTwoOne">
              <img src="/Vectorstars.png" alt="" />
              <h3>I'd like to have French communication</h3>
              <p>I'd like to have French communication</p>
            </div>
            <div className="sChildDivTwoTwoTwo">
              <p>johanne Fréchette</p>
              <h4>22 hours , 57 minutes ago</h4>
            </div>
          </div>
          <div className="sChildDivTwoThree">
            <div className="sChildDivTwoThreeOne">
              <img src="/Vectorstars.png" alt="" />
              <h1>Good one more time</h1>
              <p>Good one more time</p>
            </div>
            <div className="sChildDivTwoThreeTwo">
              <p>FREDERIC COULLON</p>
              <h4>99 hours , 58 minutes ago</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tChildDiv">
        <div className="tChildDivOne">
          <img src="/Linkappstore.png" alt="" />
        </div>
        <div className="tChildDivTwo">
          <img src="/linkplaystore.png" alt="" />
        </div>
        <div className="tChildDivThree">
          <img src="/Linktrut.png" alt="" />
        </div>
      </div>
    </div>
  );


}
