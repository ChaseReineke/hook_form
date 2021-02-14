import React from 'react';


const UserForm = (props) => {

    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        });
    };

    return(

        <form>
            <div>
                <label>First Name: </label> 
                <input 
                    type="text" 
                    name="firstName" 
                    onChange={onChange}
                />
                <p className="text-danger"> {(inputs.firstName.length > 2 || inputs.firstName.length === 0) ? "" : "Field must be at least 2 characters"}</p>
            </div>

            <div>
                <label>Last Name: </label> 
                <input 
                    type="text" 
                    name="lastName" 
                    onChange={onChange}
                />
                <p className="text-danger"> {(inputs.lastName.length > 2 || inputs.lastName.length === 0) ? "" : "Field must be at least 2 characters"}</p>
            </div>

            <div>
                <label>Email: </label>
                <input 
                    type="text" 
                    name="email" 
                    onChange={onChange}
                />
                <p className="text-danger"> {(inputs.email.length > 4 || inputs.email.length === 0) ? "" : "Email must be at least 5 characters"}</p>
            </div>

            <div>
                <label>Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={onChange}
                />
                <p className="text-danger">{(inputs.password.length > 7 || inputs.password.length === 0) ? "" : "Password must be at least 8 characters"}</p>
            </div>

            <div>
                <label>Confirm Password: </label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    onChange={onChange} 
                />
                <p className="text-danger">{(inputs.pw_confirm === inputs.password) ? "" : "Passwords do not match"}</p>            
            </div>

            {/* <input type="submit" value="Create User"/> */}
        </form>

    );
};

export default UserForm;