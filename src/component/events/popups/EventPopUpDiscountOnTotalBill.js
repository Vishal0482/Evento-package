import React from 'react'
import { Link } from 'react-router-dom'

function EventPopUpDiscountOnTotalBill({handleClose}) {
  return (
	//   <!--  Discount On Total Bill  -->
	  <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-7 space-y-7">
            <h2 className="h1 w-full max-w-xs text-center mx-auto"> Discount On Total Bill </h2>
            <form>
              <div className="w-full inputHolder">
                <label className="input-titel">Discount On Total Bill</label>
                <input className="input option" type="text" />
              </div>
            </form>
            <ul className="space-y-2.5">
              <li className="text-xs font-medium">* Terms & Conditions</li>
              <li className="text-10 leading-5 font-medium text-japaneseIndigo pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
              <li className="text-10 leading-5 font-medium text-japaneseIndigo pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
            </ul>
            <div className="flex items-center space-x-5">
			<button onClick={()=>handleClose(false)} className="btn-primary btn-cancel w-full">CANCEL</button>
              
              <Link to="/" className="btn-primary w-full">APPLY</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EventPopUpDiscountOnTotalBill