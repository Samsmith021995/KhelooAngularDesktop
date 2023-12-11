export const config:any = {
    "gameCategory":{endURL:"GameV1/GetAllCategoryName",type:"GET",keyL:"gameCategory"},
    "gameList":{endURL:"GameV1/GetGameList",type:"GET",keyL:"gameList"},
    "login":{endURL:"LoginAPI/UserLogin",type:"GET",keyL:"login"},
    "otp":{endURL:"GameV1/GenerateOTP",type:"GET",keyL:"otp"},
    "verifyOtp":{endURL:"GameV1/VerifyOTP",type:"GET",keyL:"verifyOtp"},
    "signUp":{endURL:"GameV1/RegisterUser",type:"POST",keyL:"signUp"},
    "generateForpass":{endURL:"GameV1/GenerateOTPForgotPassword",type:"POST",keyL:"generateForpass"},
    "verifyOtppass":{endURL:"GameV1/ResetPassword",type:"POST",keyL:"verifyOtppass"},
    "changePassword":{endURL:"GameV1/ChangePassword",type:"POST",keyL:"changePassword"},
    "getUserProfile":{endURL:"MyProfileAPI/GetUserProfile",type:"GET",keyL:"getUserProfile"},
    
   

}