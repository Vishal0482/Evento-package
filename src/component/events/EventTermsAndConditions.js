import React ,{useState}from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from "../modal/Modal";
import EventPopUpTermsAndCondition from "./popups/EventPopUpTermsAndConditions";
import { useDispatch } from 'react-redux';
import StepProgressBar from './StepProgressBar';
import { toast} from 'react-toastify';
import { decrement, increment } from '../../redux/stepProgressCount';
import { baseUrl } from '../../config';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect } from 'react';

function EventTermsAndConditions() {
  const editorConfig  = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 
    '|', 'outdent', 'indent', 
    '|', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo']}
  const displayName = localStorage.getItem("displayName");
  const [isTermsAndConditionPopUpOpen, setIsTermsAndConditionPopUpOpen] = useState(false);
  const [terms, setTerms] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const eventId = localStorage.getItem("eventId");
  const eventType = params.eventType;

  const token = localStorage.getItem("Token");
	const header = {
		'Authorization': `Token ${token}`
	}

	const initialState = {
    facebook: "",
    youtube: "",
    twitter: "",
    pinterest: "",
    instagram: "",
    linkedin: ""
	}
  const [acceptTerm, setAcceptTerm] = useState(false);
	const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
      setValues({
        ...values,
        [name]: value,
      });
  };
	// console.log(values);
  // console.log(acceptTerm);

  const saveData = async() => {
    if(!acceptTerm) {
      toast.warn("Pleace Accept the Terms and Condition.");
      return
    }
    try {
      const requestObj = {...values, t_and_c: terms, status: acceptTerm, eventid: eventId};
      console.log(requestObj);
        const response = await axios.post(`${baseUrl}/organizer/events/tandc`, requestObj, {headers: header});
        console.log(response);
        if(response.data.IsSuccess) {
          toast.success(response.data.Message);
        } else {
          toast.error(response.data.Message);
        }
    } catch (error) {
      toast.error("Something Went Wrong.");
      console.log(error);
    }
  }

  const clickNextHandler = () => {
    dispatch(increment());
    toast.success("Data saved Successfully.");
		navigate(`../discounts`);
	}

  const clickBackHandler = () => {
		dispatch(decrement());
		navigate(-1);
	}

  const getTandC = async() => {
    try {
      const response = await axios.get(`${baseUrl}/organizer/events/tandc?eventid=${eventId}`, {headers: header});
      console.log(response);
      if(response.data.IsSuccess) {
        setValues(response.data.Data.tandc);
        setAcceptTerm(response.data.Data.tandc.status);
        setTerms(response.data.Data.tandc.t_and_c);
      }
    } catch (error) {
      toast.error("Error Occured While Fetching Data.")
      console.log(error);
    }
  }

  useEffect(()=> {
    getTandC();
  },[]);

  return (
		// <!-- Content In -->
        <div>
          <div className="wrapper min-h-full">
            
            <div className="space-y-8 h-full">
              {/* <!-- title-holder  --> */}
              <div className="flex justify-between items-center">
                <div className="flex items-center"><i className="icon-back-arrow mr-4 text-2xl"></i><h1>{displayName}</h1></div>
              </div>
              {/* <!-- step-progress-bar  --> */}
              <StepProgressBar eventType={eventType} />
              {/* <!-- main-content  --> */}
              <div className="space-y-5">
                <div className="w-full space-y-2.5">
                  <h3>Terms and Conditions</h3>
            
                 <CKEditor
                    config={editorConfig}
                    editor={ ClassicEditor }
                    data={terms}
                    onReady={ editor => {
                      // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setTerms(editor.getData());
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />

                </div>
                <div className="w-full">
                  <h3>Social Media</h3>
                  <div className="-mx-2">
                    <div className="w-full flex flex-wrap">
                      <div className="w-full md:w-1/2 p-2">
                        <div className="w-full p-3.5 bg-white rounded flex items-center space-x-4">
                          <div className="">
                            <div className="text-center w-6">
                              <svg className="mx-auto" width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.625 7.73633H7.5V4.98633C7.5 4.22733 8.116 3.61133 8.875 3.61133H10.25V0.173828H7.5C5.22163 0.173828 3.375 2.02045 3.375 4.29883V7.73633H0.625V11.1738H3.375V22.1738H7.5V11.1738H10.25L11.625 7.73633Z" fill="#1976D2"/>
                              </svg>
                            </div>
                          </div>
                          <input type="text" className="w-full outline-none" placeholder="Enter URL" name="facebook" value={values?.facebook} onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 p-2">
                        <div className="w-full p-3.5 bg-white rounded flex items-center space-x-4">
                          <div className="">
                            <div className="text-center w-6">
                              <svg className="mx-auto" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_11310)">
                                <path d="M22.1717 5.89269C21.9181 4.95023 21.1751 4.20735 20.2328 3.95357C18.5112 3.48242 11.6248 3.48242 11.6248 3.48242C11.6248 3.48242 4.73857 3.48242 3.01697 3.93561C2.09281 4.18922 1.33163 4.9504 1.07802 5.89269C0.625 7.61412 0.625 11.1842 0.625 11.1842C0.625 11.1842 0.625 14.7722 1.07802 16.4757C1.3318 17.418 2.07469 18.1611 3.01714 18.4148C4.7567 18.886 11.625 18.886 11.625 18.886C11.625 18.886 18.5112 18.886 20.2328 18.4328C21.1752 18.1792 21.9181 17.4361 22.1719 16.4938C22.6249 14.7722 22.6249 11.2023 22.6249 11.2023C22.6249 11.2023 22.643 7.61412 22.1717 5.89269Z" fill="#FF0000"/>
                                <path d="M9.43262 14.4831L15.159 11.1849L9.43262 7.88672V14.4831Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_11310">
                                <rect width="22" height="22" fill="white" transform="translate(0.625 0.173828)"/>
                                </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <input type="text" className="w-full outline-none" placeholder="Enter URL" name="youtube" value={values?.youtube} onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 p-2">
                        <div className="w-full p-3.5 bg-white rounded flex items-center space-x-4">
                          <div className="">
                            <div className="text-center w-6">
                              <svg className="mx-auto" width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.625 2.73233C23.7325 3.12383 22.7815 3.38333 21.79 3.50933C22.81 2.90033 23.5885 1.94333 23.9545 0.789828C23.0035 1.35683 21.9535 1.75733 20.8345 1.98083C19.9315 1.01933 18.6445 0.423828 17.2405 0.423828C14.5165 0.423828 12.3235 2.63483 12.3235 5.34533C12.3235 5.73533 12.3565 6.11033 12.4375 6.46733C8.347 6.26783 4.7275 4.30733 2.296 1.32083C1.8715 2.05733 1.6225 2.90033 1.6225 3.80783C1.6225 5.51183 2.5 7.02233 3.808 7.89683C3.0175 7.88183 2.242 7.65233 1.585 7.29083C1.585 7.30583 1.585 7.32533 1.585 7.34483C1.585 9.73583 3.2905 11.7218 5.527 12.1793C5.1265 12.2888 4.69 12.3413 4.237 12.3413C3.922 12.3413 3.604 12.3233 3.3055 12.2573C3.943 14.2058 5.752 15.6383 7.903 15.6848C6.229 16.9943 4.1035 17.7833 1.8025 17.7833C1.399 17.7833 1.012 17.7653 0.625 17.7158C2.8045 19.1213 5.3875 19.9238 8.173 19.9238C17.227 19.9238 22.177 12.4238 22.177 5.92283C22.177 5.70533 22.1695 5.49533 22.159 5.28683C23.1355 4.59383 23.956 3.72833 24.625 2.73233Z" fill="#03A9F4"/>
                              </svg>
                            </div>
                          </div>
                          <input type="text" className="w-full outline-none" placeholder="Enter URL" name="twitter" value={values?.twitter} onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 p-2">
                        <div className="w-full p-3.5 bg-white rounded flex items-center space-x-4">
                          <div className="">
                            <div className="text-center w-6">
                              <svg className="mx-auto" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.92379 0.173828C3.89414 0.173828 0.6875 4.03775 0.6875 8.25094C0.6875 10.2049 1.7793 12.6415 3.527 13.4143C3.79239 13.5339 3.93677 13.4831 3.9959 13.2369C4.04815 13.0499 4.27779 12.1492 4.38917 11.7243C4.42354 11.5882 4.40567 11.47 4.29566 11.3421C3.71539 10.6711 3.25474 9.44862 3.25474 8.30182C3.25474 5.36331 5.59097 2.51006 9.56627 2.51006C13.0039 2.51006 15.4089 4.74316 15.4089 7.93743C15.4089 11.547 13.499 14.0441 11.017 14.0441C9.64328 14.0441 8.62023 12.966 8.94475 11.6322C9.33664 10.044 10.1053 8.3362 10.1053 7.19077C10.1053 6.1636 9.52502 5.31381 8.33972 5.31381C6.94128 5.31381 5.80686 6.6985 5.80686 8.55758C5.80686 9.73876 6.22487 10.5363 6.22487 10.5363C6.22487 10.5363 4.84156 16.1245 4.58443 17.1682C4.14991 18.9352 4.64355 21.7967 4.68618 22.0428C4.71231 22.1789 4.86494 22.2216 4.95019 22.1102C5.08632 21.9314 6.7584 19.5457 7.22729 17.8214C7.3978 17.193 8.09771 14.645 8.09771 14.645C8.55835 15.4769 9.88804 16.174 11.3044 16.174C15.5175 16.174 18.5619 12.471 18.5619 7.87555C18.5468 3.46985 14.7764 0.173828 9.92379 0.173828Z" fill="#D32F2F"/>
                              </svg>
                            </div>
                          </div>
                          <input type="text" className="w-full outline-none" placeholder="Enter URL" name="pinterest" value={values?.pinterest} onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 p-2">
                        <div className="w-full p-3.5 bg-white rounded flex items-center space-x-4">
                          <div className="">
                            <div className="text-center w-6">
                              <svg className="mx-auto" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_11326)">
                                <path d="M1.87476 1.53539C0.303093 3.16789 0.624759 4.90206 0.624759 10.1704C0.624759 14.5454 -0.138574 18.9312 3.85643 19.9637C5.10393 20.2846 16.1573 20.2846 17.4031 19.9621C19.0664 19.5329 20.4198 18.1837 20.6048 15.8312C20.6306 15.5029 20.6306 4.84372 20.6039 4.50872C20.4073 2.00289 18.8648 0.558725 16.8323 0.266225C16.3664 0.198725 16.2731 0.178725 13.8831 0.174559C5.40559 0.178725 3.54726 -0.198775 1.87476 1.53539Z" fill="url(#paint0_linear_1_11326)"/>
                                <path d="M10.6233 2.79033C7.59751 2.79033 4.72417 2.52116 3.62667 5.33783C3.17334 6.50116 3.23917 8.012 3.23917 10.1753C3.23917 12.0737 3.17834 13.8578 3.62667 15.012C4.72167 17.8303 7.61834 17.5603 10.6217 17.5603C13.5192 17.5603 16.5067 17.862 17.6175 15.012C18.0717 13.837 18.005 12.3487 18.005 10.1753C18.005 7.29033 18.1642 5.42783 16.765 4.0295C15.3483 2.61283 13.4325 2.79033 10.62 2.79033H10.6233ZM9.96167 4.12116C16.2733 4.11116 17.0767 3.4095 16.6333 13.157C16.4758 16.6045 13.8508 16.2262 10.6242 16.2262C4.74084 16.2262 4.57167 16.0578 4.57167 10.172C4.57167 4.21783 5.03834 4.1245 9.96167 4.1195V4.12116ZM14.565 5.347C14.0758 5.347 13.6792 5.74366 13.6792 6.23283C13.6792 6.722 14.0758 7.11866 14.565 7.11866C15.0542 7.11866 15.4508 6.722 15.4508 6.23283C15.4508 5.74366 15.0542 5.347 14.565 5.347ZM10.6233 6.38283C8.52917 6.38283 6.83167 8.08116 6.83167 10.1753C6.83167 12.2695 8.52917 13.967 10.6233 13.967C12.7175 13.967 14.4142 12.2695 14.4142 10.1753C14.4142 8.08116 12.7175 6.38283 10.6233 6.38283ZM10.6233 7.71366C13.8775 7.71366 13.8817 12.637 10.6233 12.637C7.37001 12.637 7.36501 7.71366 10.6233 7.71366Z" fill="white"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_1_11326" x1="1.91311" y1="18.8971" x2="20.501" y2="2.80954" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFDD55"/>
                                <stop offset="0.5" stopColor="#FF543E"/>
                                <stop offset="1" stopColor="#C837AB"/>
                                </linearGradient>
                                <clipPath id="clip0_1_11326">
                                <rect width="20" height="20" fill="white" transform="translate(0.625 0.173828)"/>
                                </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <input type="text" className="w-full outline-none" placeholder="Enter URL" name="instagram" value={values?.instagram} onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 p-2">
                        <div className="w-full p-3.5 bg-white rounded flex items-center space-x-4">
                          <div className="">
                            <div className="text-center w-6">
                              <svg className="mx-auto" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.14795 1.55625C3.14775 1.96878 2.98172 2.36434 2.68639 2.6559C2.39107 2.94746 1.99063 3.11115 1.57319 3.11094C1.15575 3.11073 0.755481 2.94666 0.460451 2.6548C0.16542 2.36295 -0.000208525 1.96723 1.97032e-07 1.55469C0.000208919 1.14216 0.166238 0.746598 0.461564 0.455036C0.756889 0.163475 1.15732 -0.000206073 1.57476 1.94715e-07C1.99221 0.000206463 2.39247 0.164284 2.6875 0.456136C2.98253 0.747989 3.14816 1.14371 3.14795 1.55625ZM3.19517 4.26276H0.0472195V14H3.19517V4.26276ZM8.16894 4.26276H5.03673V14H8.13746V8.89028C8.13746 6.04378 11.8914 5.77935 11.8914 8.89028V14H15V7.83256C15 3.03394 9.44386 3.21282 8.13746 5.56936L8.16894 4.26276Z" fill="#007AB5"/>
                              </svg>
                            </div>
                          </div>
                          <input type="text" className="w-full outline-none" placeholder="Enter URL" name="linkedin" value={values?.linkedin} onChange={handleInputChange}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end">
                    <label className="checkbox rounded bg-white">
                        <input type="checkbox" checked={acceptTerm} onClick={() => setAcceptTerm(!acceptTerm)} />
                        <i className="icon-right"></i>                  
                    </label>
                    <span className="input-titel text-base ml-4" >Accept Your <button >Terms and Conditions</button></span>
                </div>
                <button className="btn-primary w-full" onClick={()=>setIsTermsAndConditionPopUpOpen(!isTermsAndConditionPopUpOpen)}>SAVE</button>
              </div>
            </div>
            <div className="prw-next-btn">
              <button type="button" className="flex items-center" onClick={clickBackHandler}><i className="icon-back-arrow mr-3"></i><h3>Back</h3></button>
              <button type="button" className="flex items-center btn-primary" onClick={clickNextHandler}>Go To Discount</button>
            </div>
          <Modal isOpen={isTermsAndConditionPopUpOpen}>
            <EventPopUpTermsAndCondition handleClose={setIsTermsAndConditionPopUpOpen} terms={terms} saveData={saveData} /> 
          </Modal>
          </div>
        </div>
  )
}

export default EventTermsAndConditions