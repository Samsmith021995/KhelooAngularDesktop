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
    "fetchStatement":{endURL:"MyProfileAPI/GetUserStatement",type:"POST",keyL:"fetchStatement"},
    "withdrawReq":{endURL:"MyProfileAPI/WithdrawRequest",type:"POST",keyL:"withdrawReq"},
    "withdrawState":{endURL:"MyProfileAPI/GetWithdrawalStatement",type:"GET",keyL:"withdrawState"},
    "depositReq":{endURL:"MyProfileAPI/DepositeUserAmount",type:"POST",keyL:"depositReq"},
    "getTranscationId":{endURL:"AppPayment/DepositUserPaymentTransaction",type:"GET",keyL:"getTranscationId"},
    "getPaymentGateway":{endURL:"AppPayment/GetPaymentGatewayMasterDetails",type:"GET",keyL:"getPaymentGateway"},
    "getProvider":{endURL:"MyProfileApi/GetUrlBasedOnGameProvider",type:"GET",keyL:"getProvider"},
    "balance":{endURL:"MyProfileAPI/GetUserBalance",type:"GET",keyL:"balance"},
    "recent":{endURL:"GameV1/GetRecentWithdraw",type:"GET",keyL:"recent"},
    "cancelReq":{endURL:"MyProfileAPI/CancellWithdrawRequest",type:"POST",keyL:"cancelReq"},

    // MyProfileApi/GetUrlBasedOnGameProvider?game_id=2231

    
    // https://kheloo.com/MyProfile/CancellWithdrawRequest
    // Request Method:
    // POST

}