// Ragistration Value Store
var getRegFNameValue; //first name
var getRegLNameValue; //last name
var getRegUserNameValue; //user name
var getRegEmaulValue; //Email
var getRegPassValue; //password
var getRegConPassValue; //Confrom password

// Login Value Store
var logUserNameValue //usser name
var logPassValue //password

var loder_value = document.getElementById("loder_section");
var suss_msg_value = document.getElementById("suss_msg");
var errorMassageSectionValue = document.getElementById("error_msg_sec");
var errorMassageValue = document.getElementById("error_msg");

// --------------Form Validation Check----------------
function validation(){
    getRegFNameValue = document.getElementById('reg_fname').value; //first name
    getRegLNameValue = document.getElementById('reg_lname').value; //last name
    getRegUserNameValue = document.getElementById('user_name').value; //user name
    getRegEmaulValue = document.getElementById('email').value; //Email
    getRegPassValue = document.getElementById('reg_pass').value; //password
    getRegConPassValue = document.getElementById('Conform_reg_pass').value; //Confrom password

    function er_msg_hide(){
        errorMassageSectionValue.style.display = "none";
    }
            // fast name
    if (getRegFNameValue === ""){
        errorMassageSectionValue.classList.add("first_name_error_msg");
        document.getElementById("error_msg_txt").innerHTML = "Please fill this fild";
        errorMassageSectionValue.style.display = "block";
        setTimeout(er_msg_hide, 5000);
    }

    else if((getRegFNameValue.length <=2) ||(getRegFNameValue.length >=20) ){
        errorMassageSectionValue.classList.add("first_name_error_msg");
        document.getElementById("error_msg_txt").innerHTML = "User name must be 3 latters";
        errorMassageSectionValue.style.display = "block";
        setTimeout(er_msg_hide, 5000);
    }
    
    else if(!isNaN(getRegFNameValue)){
        errorMassageSectionValue.classList.add("first_name_error_msg");
        document.getElementById("error_msg_txt").innerHTML = "Number not allowed";
        errorMassageSectionValue.style.display = "block";
        setTimeout(er_msg_hide, 5000);
    }
        //last name
        else if(getRegLNameValue === ""){
            errorMassageSectionValue.classList.add("last_name_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Please fill this fild";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
    
        else if((getRegLNameValue.length <=2) ||(getRegLNameValue.length >=20) ){
            errorMassageSectionValue.classList.add("last_name_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "User name must be 3 latters";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
        
        else if(!isNaN(getRegLNameValue)){
            errorMassageSectionValue.classList.add("last_name_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Number not allowed";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }

        //user name
        else if(getRegUserNameValue === ""){
            errorMassageSectionValue.classList.add("user_name_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Please fill this fild";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
    
        else if((getRegUserNameValue.length <=2) ||(getRegUserNameValue.length >=20) ){
            errorMassageSectionValue.classList.add("user_name_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "User name must be 3 latters";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
        
        else if(!isNaN(getRegUserNameValue)){
            errorMassageSectionValue.classList.add("user_name_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Number not allowed";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
        //email
        else if(getRegEmaulValue === ""){
            errorMassageSectionValue.classList.add("email_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Please fill this fild";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
    
        else if(getRegEmaulValue.indexOf('@') <= 0){
            errorMassageSectionValue.classList.add("email_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "invalid email address";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
        else if((getRegEmaulValue.charAt(getRegEmaulValue.length-4)!='.') && (getRegEmaulValue.charAt(getRegEmaulValue.length-3)!='.')){
            errorMassageSectionValue.classList.add("email_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "invalid email address";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
        
        else if(!isNaN(getRegUserNameValue)){
            errorMassageSectionValue.classList.add("email_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "invalid email address";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
        //password
        else if(getRegPassValue === ""){
            errorMassageSectionValue.classList.add("pass_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Please fill this fild";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
    
        else if(getRegPassValue.length < 6){
            errorMassageSectionValue.classList.add("pass_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Password must be 6 character";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }

        //Conform Pawwword
        else if(getRegConPassValue === ""){
            errorMassageSectionValue.classList.add("Con_pass_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Please fill this fild";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
        else if(getRegConPassValue !== getRegPassValue){
            errorMassageSectionValue.classList.add("Con_pass_error_msg");
            document.getElementById("error_msg_txt").innerHTML = "Possword Not Match";
            errorMassageSectionValue.style.display = "block";
            setTimeout(er_msg_hide, 5000);
        }
        else{
            suss_msg_fun();
        }



}//for end

// -----------------suss_msg-------------
function suss_msg_fun(){
    suss_msg_value.style.display = "block";
}

// -----------------Login Cancle-------------
function login_cancle(){
    suss_msg_value.style.display = "none";
}

// -----------Loder----------------
//Run for sing up
function loder(){
    loder_value.style.display = "block";  //loder revel
    suss_msg_value.style.display = "none";  //Success msg hide
    setTimeout(reg, 2000);
}

  // -----------Registration Funtion----------------
function reg(){

    // getRegUserNameValue = document.getElementById('user_name').value;
    // getRegPassValue = document.getElementById('Conform_reg_pass').value;
    var storRegFormQury = document.getElementById("container").querySelectorAll(".reg_Form");

    // --Registration From Hide--
    storRegFormQury[0].style.display = "none"; 
    storRegFormQury[1].style.display = "none"; 
    storRegFormQury[2].style.display = "none"; 
    storRegFormQury[3].style.display = "none"; 
    storRegFormQury[4].style.display = "none"; 
    storRegFormQury[5].style.display = "none"; 
    storRegFormQury[6].style.display = "none"; 
    storRegFormQury[7].style.display = "none"; 
    // -------Loder-------
    loder_value.style.display = "none";
    suss_msg_value.style.display = "none";

    //--Login Form Revel--
    var storLogFormQury = document.getElementById("container").querySelectorAll(".log_Form");

    storLogFormQury[0].style.display = "block";
    storLogFormQury[1].style.display = "block";
    storLogFormQury[2].style.display = "block";
    storLogFormQury[3].style.display = "block";
    storLogFormQury[4].style.display = "block";
    storLogFormQury[5].style.display = "block";
    storLogFormQury[6].style.display = "block";
    storLogFormQury[7].style.display = "block";
}

//--I Have No Account Function--
// -----------Loder----------------
//Run for No account
function loder_for_noacc(){ 
    loder_value.style.display = "block";
    setTimeout(noacc, 2000);
}

function noacc(){ 
    //--Registration Form Revel--
    var storRegFormQury = document.getElementById("container").querySelectorAll(".reg_Form");
    storRegFormQury[0].style.display = "block"; 
    storRegFormQury[1].style.display = "block"; 
    storRegFormQury[2].style.display = "block"; 
    storRegFormQury[3].style.display = "block"; 
    storRegFormQury[4].style.display = "block"; 
    storRegFormQury[5].style.display = "block"; 
    storRegFormQury[6].style.display = "block"; 
    storRegFormQury[7].style.display = "block"; 
    // -------Loder-------
    loder_value.style.display = "none";

    //--Login Form Hide--
    var storLogFormQury = document.getElementById("container").querySelectorAll(".log_Form");
    storLogFormQury[0].style.display = "none";
    storLogFormQury[1].style.display = "none";
    storLogFormQury[2].style.display = "none";
    storLogFormQury[3].style.display = "none";
    storLogFormQury[4].style.display = "none";
    storLogFormQury[5].style.display = "none";
    storLogFormQury[6].style.display = "none";
    storLogFormQury[7].style.display = "none";
}

// ===================Login Panel======================
function login(){
    logUserNameValue = document.getElementById('log_user_name').value; //User name
    logPassValue = document.getElementById('log_pass').value; //User name

    if(logUserNameValue === getRegUserNameValue && logPassValue === getRegConPassValue){
        alert("Login Successfull");
    }else{
        alert("Incorrect Password");
    }
}