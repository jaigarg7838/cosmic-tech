import React, { Component, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../shared/applyJob.css";
import { OpenJob } from "../shared/career";


const API_URL = 'https://vc8wacpiv5.execute-api.ap-south-1.amazonaws.com/default/applyjob';
const UPLOAD_API_URL = 'https://vc8wacpiv5.execute-api.ap-south-1.amazonaws.com/default/resume';

var emailRegex = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
var mobileRegex = /^[1-9][0-9]+$/;

const MAX_IMAGE_SIZE = 2100000;
var upload_file = null;

function onFileChange(e) {
    console.log(e)
    let files = e.target.files || e.dataTransfer.files
    if (!files.length) return;
    console.log(files[0])
    _createImage(files[0]);
}

function _createImage(file) {
    let reader = new FileReader()
    reader.onload = (e) => {
        if (!e.target.result.includes('data:application/pdf')) {
            document.getElementById('resume').value = null;
            return alert('Wrong file type - PDF only.')
        }
        if (e.target.result.length > MAX_IMAGE_SIZE) {
            document.getElementById('resume').value = null;
            return alert('File is loo large.')
        }
        upload_file = e.target.result;
    }
    reader.readAsDataURL(file)
}


function c(str) {
    return document.getElementById(`job-${str}`);
}

function _error(e, c) {
    let next = document.getElementById(`validation-${c}`);
    next.innerText = e;
    next.style.display = "block";
}

async function handler(e) {
    e.preventDefault();
    let ee = c('email'), email = ee.value,
        ne = c('name'), name = ne.value,
        moe = c('mobile'), mobile = moe.value,
        pe = c('profile'), profile = pe.value,
        se = c('skype_id'), skype_id = se.value,
        me = c('message'), message = me.value,
        suc_e = c('success'), ee_e = c('error'),
        le_e = c('loading'), error = false;

    ee_e.style.display = 'none';
    suc_e.style.display = 'none';
    // remove all errors

    suc_e.innerText = ee_e.innerText = "";

    // email error, class name validation-e
    if (email.length === 0 || !emailRegex.test(email)) {
        console.log("email;")
        ee_e.innerText = "Please enter a valid email id"
        error = true;
    }

    // name error, class name validation-n
    if (name.length < 3) {
        ee_e.innerText = "Please enter at least 3 chars";
        error = true;
    }

    // subject error, class name validation-s
    if (mobile.length < 8) {
        ee_e.innerText = "Please enter a valid mobile number";
        error = true;
    }

    // subject error, class name validation-s
    if (profile.length < 8) {
        ee_e.innerText = "Please select a job profile";
        error = true;
    }

    // message error, class name validation-m
    if (message.length === 0) {
        error = true;
        ee_e.innerText = "Please write something for us";
    }

    if (!upload_file) {
        error = true;
        ee_e.innerText = "Please upload your resume";
    }

    if (error) {
        ee_e.style.display = 'block';
        return;
    }

    le_e.style.display = 'block';

    try {
        // Get the presigned URL
        const response = await fetch(UPLOAD_API_URL)
        let res = await response.json();

        let binary = atob(upload_file.split(',')[1])
        let array = []
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i))
        }
        let blobData = new Blob([new Uint8Array(array)], { type: 'application/pdf' })

        await fetch(res.uploadURL, {
            method: 'PUT',
            body: blobData
        })

        // Final URL for the user doesn't need the query string params
        let uploadURL = res.uploadURL.split('?')[0]


        res = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                mobile,
                profile,
                skype_id,
                resume: uploadURL,
                message
            })
        })

        if (res.status == 200) {
            ee.value = "";
            ne.value = "";
            moe.value = "";
            pe.value = "";
            se.value = "";
            me.value = "";
            suc_e.style.display = 'block';
            suc_e.innerText = 'Application sent successfully';
        }
        else {
            ee_e.style.display = 'block';
            ee_e.innerText = "Some error occurred while submitting response";
        }

    } catch (err) {
        console.log(err);
        ee_e.style.display = 'block';
        ee_e.innerText = "Some error occurred while submitting response";
    } finally {
        le_e.style.display = 'none';
    }

    return false;
}
// document.getElementById('job-form').addEventListener("submit", handler);
// document.getElementById('resume').addEventListener("change", onFileChange);


function ApplyJob() {
    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration : 2000
          });
      }, []);
      
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
   
        return (
            <>
                <header id="header" className="header header-same" data-scrollto-offset="0" data-aos="fade-up"></header>
                <div className="form-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-8 col-md-8 mx-auto">
                                <h4 className="ApplyJobContent"><b>Application Form</b></h4>
                                <div className="form-div px-5 py-5">
                                    <form id="job-form" onSubmit={handler}>
                                        <div className="row gy-2">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Name<span>*</span></label>
                                                    <input type="text" id="job-name" name="name" className="form-control input"/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Email<span>*</span></label>
                                                    <input type="text" id="job-email" name="email" className="form-control input"/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Mobile Number<span>*</span></label>
                                                    <input type="text" id="job-mobile" name="mobile" className="form-control input"/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Applying For<span>*</span></label>
                                                    
                                                    <select name="profile" id="job-profile" className="form-control input">
                                                    <option defaultValue={"select"}></option>
                                                       {
                                                       OpenJob.map((item,id)=>{
                                                        return(
                                                           <option >{item.Jobname}</option> 
                                                        )
                                                       })}

                                                    </select>
                                        
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>LinkedIn/GitHub Id</label>
                                                    <input type="text" id="job-skype_id" name="skype_id" className="form-control input"/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>File Upload<span>*</span></label>
                                                    <input
                                                        type="file" id="resume" name="file" className="form-control input"
                                                        accept="application/pdf" multiple={false} onChange={onFileChange}
                                                    />
                                                        Note: File Size should be less than 2MB
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Message<span>*</span></label>
                                                    <textarea name="message" id="job-message" className="form-control input"
                                                        rows="8"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="loading text-info ApplyJob1" id="job-loading" >Loading...</div>
                                                <div className="error-message text-danger" id='job-error'></div>
                                                <div className="sent-message text-success" id='job-success'></div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn mb-4">SEND</button>
                            </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
		)
    }


export default ApplyJob;