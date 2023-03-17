import React from 'react'
import '../styles/List.css'

const List = () => {
    
  return (
    <div className='list'>
        <h2>Marketplace</h2>
        <span className='listcontent'>
           
            <span>Order 1 
            <button type="button" className="btn btn-primary listbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          View
        </button>
        
       
            </span>
            
            <span>Order 2
            <button type="button" className="btn btn-primary listbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          View
        </button>
       
       
            </span>
            
            <span>Order 3
            <button type="button" className="btn btn-primary listbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          View
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Marketplace</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <span className='modaldata'>Anish Ghogare</span>
                <span className='modaldata'>Mumbai</span>
                <span className='modaldata'>₹ 1000</span>
                <span className='modaldata'>Address</span>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
       
            </span>
            

        
        </span>
    </div>
  )
}

export default List
