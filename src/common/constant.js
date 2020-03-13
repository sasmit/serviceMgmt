const SERVER_ADDRESS = {
    LOCAL_URL: "http://10.12.137.16:8000",
    API: {
        USER_LOGIN: "/user/login",
        USER_REGISTRATION :"/user/save",
        USER_DETAILS :"/user",
        user_by_id:"/user/:id", // ..../user/1
        user_delete:"/user/delete",
        user_update :"/user/update",

        vendor_login :"/vendoe/login",
        vendor_registration :"/vendor/save",
        vendor_details:"/vendor",
        vendor_by_id:"/vendor/:id",
        vendor_update :"/vendor/update",
        vendor_delete:"/vendoe/delete",

        owner_login:"/owner/login",
        owner_registration:"/owner/save",
        owner_details:"/owner",
        owner_by_id :"/owner/:id",
        owner_update:"/owner/update",
        owner_delete:"/owner/del/:id",


        issue_save:"/issue/save",
        issue_vendorname_update:"/issue/VNupdate",
        get_all_issue:"/issue",
        get_issue_by_status:"/issue/as/:st",
        get_issue_by_trkingid:"/issue/:tid"
    }
}

export default SERVER_ADDRESS;