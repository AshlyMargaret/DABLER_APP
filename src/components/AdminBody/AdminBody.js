import React from 'react'
import Arrow from '../../assests/arrow.png';
import './AdminBody.css'
import ToggleButton from 'react-toggle-button'
import Details from '../../assests/Details.svg'
import Code from '../../assests/Code.svg';
import History from '../../assests/History.svg';
import Val from '../../assests/validation.svg';
import Folder from  '../../assests/folder_1.svg'
import DownArrow from '../../assests/Arrow - Down 2.png';
import Table from '../../assests/table_2.svg';

function AdminBody() {
    return (
        <div className='adminBody'>
            <div className="innerFlexContainer1">
                <div className="leftNavigation">
                    <div className="navigationBox 1">
                        <h5>Projects</h5>
                        <img src={Arrow} alt="arrowIcon" className='arrowIcon' /> 
                    </div>
                    <div className="navigationBox 2">
                        <h6>Projects</h6>
                        <img src={Arrow} alt="arrowIcon" className='arrowIcon' /> 
                    </div>
                    <div className="navigationBox 3">
                        <p>employee.Customer_Role</p>
                    </div>
                </div>
                <div className="rightNavigation">
                    <div className="togglebtn">
                    <ToggleButton
                    //   value={ self.state.value || false }
                    //   onToggle={(value) => {
                    //   self.setState({
                    //   value: !value,
                    //   })}} 
                      />
                      <p>Active</p>
                    </div>
                    <div className="saveBtn">
                        <button className='saveButton'>SAVE</button>
                    </div>
                    <div className="buildBtn">
                        <button className='buildButton'>BUILD</button>
                    </div>
                </div>
            </div>
            <div className="innerFlexContainer2">
                <div className="headerMenu">
                    <div className="menu menu1">
                        <img src={Details} alt="details" />
                        <p>Details</p>
                    </div>
                    <div className="menu menu2">
                        <img src={Code} alt="code" />
                        <p>Code</p>
                    </div>
                    <div className="menu menu3">
                        <img src={Val} alt="validation" />
                        <p>Validation</p>
                    </div>
                    <div className="menu menu4">
                        <img src={History} alt="history" />
                        <p>Build History</p>
                    </div>
                </div>
                <div className="testRun">
                   <button className='testRunBtn'>Test Run</button>
                </div>
            </div>
            <div className="innerFlexContainer3">
                <div className="leftSection3">
                    <div className="customerSection">
                        <div className="Section">
                           <img src={Folder} alt="folder" />
                           <p>Customer</p>
                        </div>
                       
                          <div className="tableSection">
                            <div className="table_display">
                            <img src={Arrow} alt="arrow" />
                            <img src={Table} alt="table" />
                            <p>Tables</p>
                            </div>
                            <div className="viewDisplay">
                            <img src={Arrow} alt="arrow" />
                            <img src={Table} alt="table" />
                            <p>Views</p>
                            </div>    
                          </div>
                    </div>
                    <div className="salesSection">
                        <div className="Section">
                           <img src={Folder} alt="sales" />
                           <p>Sales</p>
                        </div>
                      
                        <div className="tableSection">
                            <div className="table_display">
                            <img src={Arrow} alt="arrow" />
                            <img src={Table} alt="table" />
                            <p>Tables</p>
                            </div>
                            <div className="viewDisplay">
                            <img src={Arrow} alt="arrow" />
                            <img src={Table} alt="table" />
                            <p>Views</p>
                            </div>    
                          </div>
                    </div>
                </div>
                <div className="rightSection3"></div>
            </div>
            <div className="innerFlexContainer4">
                <div className="usersList">
                    <div className="user Name">
                        <p>Name</p>
                        <img src={DownArrow} alt="down_arrow" />
                    </div>
                    <div className="user Email">
                        <p>email</p>
                        <img src={DownArrow} alt="down_arrow" />
                    </div>
                    <div className="user Permission">
                        <p>Permission</p>
                        <img src={DownArrow} alt="down_arrow" />
                        </div>
                    <div className="user CreationDate">
                        <p> Create Date</p>
                        <img src={DownArrow} alt="down_arrow" />
                  </div>
                    <div className="user Action">
                        <p> DateAction</p>
                        <img src={DownArrow} alt="down_arrow" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminBody