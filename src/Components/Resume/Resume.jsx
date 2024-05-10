import React from 'react'
import nrp_resume from '../../assets/nrp_resume.pdf'
// import './Resume.css'

const Resume = ()=> {
    document.title = 'Nikita Pardeshi Resume'
    return(
        <div className='resume'>
            <object id="my-resume" style={{paddingTop: 100}}width="100%" height="700" data={nrp_resume+'#toolbar=0'} type="application/pdf"></object>
            {/* <iframe
            title="pdf document"
            id="print-file"
            src={`https://docs.google.com/viewer?url=${nrp_resume}&embedded=true`} style="width:600px; height:500px;"
            /> */}
        </div>
    )
}

export default Resume;
