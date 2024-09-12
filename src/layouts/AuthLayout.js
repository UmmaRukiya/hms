import React from 'react';
import './assets_admin/css/bootstrap.css';
import './assets_admin/css/app.css';


function AuthLayout({ children}) {
    return(
        <div id="auth">

            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 mx-auto">
                        <div className="card pt-4">
                            <div className="card-body">
                               {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout