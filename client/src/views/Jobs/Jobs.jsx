import React from 'react';

class Jobs extends React.Component{
    render(){
        return(
            <div id='jobs'>
                <h1 className='text-center mb-5 text-uppercase display-3'><strong>Internships & Jobs</strong></h1>

                <div className='text-center'>
                    <div class="card mb-4">
                        <a href='https://storage.googleapis.com/wzukusers/user-28372889/documents/5a5d85dd303dfcp3nyO8/admin%20coordinator%20intern%20(2).pdf' target='_blank'>
                            <div class="card-body">
                                <h3>Trees Please Admin Internship</h3>
                            </div>
                        </a>
                    </div>
                    <div class="card mb-4">
                        <a href='https://storage.googleapis.com/wzukusers/user-28372889/documents/5a5d85dd69a0bjSZ7BeD/garden%20operator%20intern.pdf' target='_blank'>
                            <div class="card-body">
                                <h3>Garden Caretaker Internship Position</h3>
                            </div>
                        </a>
                    </div>
                    <div class="card mb-4">
                        <a href='https://storage.googleapis.com/wzukusers/user-28372889/documents/5a5d85ddaa059nvLw3ss/wild%20hearts%20internship.pdf' target='_blank'>
                            <div class="card-body">
                                <h3>Rescue Rance Office Internship Position</h3>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Jobs;