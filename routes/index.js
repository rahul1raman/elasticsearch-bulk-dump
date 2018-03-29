var express = require('express');
var Q = require('q');
var router = express.Router();
var client = require('../elasticsearch/connectES');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

var i = 1;
router.all('/putdata', function(req, res, next){
  var data = req.body;
  i++;
  re = {"status": "ok" };
  client.index({
    index: 'vingsfinal',
    type: 'hospitals',
    // id : i,
    // id: "AWHnv7FnkcP4g5zbjE0R",
    body: {
        types: {
          hospital: false,
          blood_bank : true,
        },
        blood_bank : {
          "Blood Bank Name" : data.name,
          "State" : data.state,
          "District" :data.district,
          "City" : data.city,
          "Address" : data.address,
          "Pincode" : data.pincode,
          "Contact Number" : data.number,
          "Mobile" : data.mobile_number,
          "Helpline" : data.helpline,
          "Fax" : data.fax,
          "Email" : data.email,
          "Website" : data.website,
          "Nodal Officer" : data.nodal_officer,
          "Contact Nodal Officer" : data.contact_nodal,
          "Mobile Nodal Officer" : data.mobile_nodal,
          "Email Nodal Officer" : data.email_nodal,
          "Qualification Nodal Officer" : data.qual_nodal,
          "Category" : data.category,
          "Blood Component Available" : data.blood_component,
          "Apheresis" : data.apheresis,
          "Service Time" : data.serv_time,
          "License no." : data.license,
          "Date License Obtained" : data.date_license,
          "Date of renewal" : data.renewal_license,
          "Latitude" : data.latitude,
          "Longitude" : data.longitude,
          "tollfree" : "NA",
          "organization" : data.organization,
          "blood_component": "NA",
          "blood_group" : "NA" 
        }
    }}, function (error , response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
      i++;
    }
  });

  // client.deleteByQuery({
  //   index: 'vingsfinal',
  //   type: 'hospitals',
  //   body: {
  //     "query": {
  //       "bool": {
  //       "must": {
  //           "exists": {
  //               "field": "types"
  //           }
  //         }
  //       }
  //     }
  //   }
  // }, function (error, response) {
  //   if (error) {
  //         console.log(error);
  //       } else {
  //         console.log(response);
  //       }
  // }); 
  res.send(re);

});

module.exports = router;


