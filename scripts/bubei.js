/*
https://sapi.beingfine.cn/v3/report/launch/
sapi.beingfine.cn
*/
let body = $response.body;

body = body.replace(/(\\"granted\\"):\d/g, '$1:1');
body = body.replace(/(\\"expire_date\\"):\d+/g, '$1:4079167311000');

$done(body);
