var userid   = '679256982',
    usrtoken = '679256982.401c5ac.0a183542db5f4ae1b51caae21acadc1e';

$('#nofilter').pongstgrm({
    accessId: userid,
    accessToken: usrtoken,
    column: 'col-xs-6 col-sm-6',  // you use customized columns
    count: 4,                      // set the number of media to display
    show: 'nofilter'
});