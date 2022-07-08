import React from 'react'




function Search() {
  return (
    <div className="row ">
        <div className="col-lg-16 mx-auto border-radius-7 searchinput">
            <div className="input-group">
            <span className="btn btn-outline-secondary bg-white border-start-1 border-bottom-1 border border-end-0 border ms-n5" >
                        <i className="fa fa-search"></i>
                    </span>
                <input className="form-control border-end-1 border border-start-0 border" placeholder="search" id="example-search-input"/>
                <span className="input-group-append">

                </span>
            </div>
        </div>
    </div>
  )
}

export default Search 
