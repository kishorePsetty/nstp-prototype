import './Login.css';
// import LoanImage from "."
import logo from './pl-imge.jpg';

function Login() {
    return (
        // <form action="action_page.php" method="post">
        //     <div class="imgcontainer">
        //         <img src="img_avatar2.png" alt="Avatar" class="avatar" />
        //     </div>
        //     <div class="container">
        //         <label for="uname">
        //             <b>Username</b>
        //         </label>
        //         <input type="text" placeholder="Enter Username" name="uname" required />
        //         <label for="psw">
        //             <b>Password</b>
        //         </label>
        //         <input type="password" placeholder="Enter Password" name="psw" required />

        //         <button type="submit">Login</button>
        //         <label>
        //             <input type="checkbox" checked="checked" name="remember" /> Remember me
        //         </label>

        //         <div class="container" style={{ background: "#f1f1f1" }}>
        //             <button type="button" class="cancelbtn">Cancel</button>
        //             <span class="psw">Forgot <a href="#">password?</a></span>
        //         </div>
        //     </div>
        // </form>




        <><div class="container">
            <div class="image">
                <h2>Loan Processing Made easy!</h2>
                <h4>Easy process with quality,seamless and digital experience.</h4>

                <img src={logo} className="pl-image" alt="logo" />

                {/* <img src="./../pl-imge.jpg" alt="Girl in a jacket" width="500" height="600" /> */}
            </div>

            <div class="login-form">
                <form id="loginForm" onsubmit="return handleLogin(event)">
                    <h4>Please enter your credentials to Login.</h4>

                    <label for="userID">User ID:</label>
                    <input type="text" id="userID" name="userID" placeholder="Enter your user ID" required />
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                    <label for="role">Product Type</label>
                    <select id="role" name="role" required>
                        <option value="" disabled selected>Personal Loan</option>
                    </select>

                    <button type="submit"> Login</button>
                    <div className="link-container">
                        <div class="link" onclick="forgotUsername()">Forgot Username?</div>
                        <div class="link" onclick="forgotPassword()">Forgot Password?</div></div>
                </form>

            </div></div>
        </>
    );
}

export default Login;
