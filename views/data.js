var cData;
var orgs = ['Rotary Blood Bank', 'Indian Red Cross Society',  'Khoon Organization', 'Sankalp India Foundation', 'Save Life India', 'Lions Blood Bank', 'Think Foundation', 'Athar Blood Bank', 'Heroes', 'Raktam'];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sendData(k , j) {
 if(cData){
    for(i = k; i<j; i++){

      var organization = 'NA';
      orgs.forEach(element => {
        if(cData[i][1].toLowerCase().indexOf(element.toLowerCase()) > -1 ){
          organization = element;
        }
      });
      // if(cData[i][1].toLowerCase().indexOf('rotary blood bank') > -1 ){
      //   var organization = 'Rotary Blood Bank';
      // } else if(cData[i][1].toLowerCase().indexOf('indian red cross society') > -1 ){
      //   var organization = 'Indian Red Cross Society';
      // } else if(cData[i][1].toLowerCase().indexOf('khoon organization') > -1 ){
      //   var organization = 'Khoon Organization';
      // } else if(cData[i][1].toLowerCase().indexOf('sankalp india foundation') > -1 ){
      //   var organization = 'Sankalp India Foundation';
      // } else if(cData[i][1].toLowerCase().indexOf('save life india') > -1 ){
      //   var organization = 'Save Life India';
      // } else if(cData[i][1].toLowerCase().indexOf('lions blood bank') > -1 ){
      //   var organization = 'Lions Blood Bank';
      // } else if(cData[i][1].toLowerCase().indexOf('think foundation') > -1 ){
      //   var organization = 'Think Foundation';
      // } else if(cData[i][1].toLowerCase().indexOf('athar blood bank') > -1 ){
      //   var organization = 'Athar Blood Bank';
      // } else if(cData[i][1].toLowerCase().indexOf('heroes') > -1 ){
      //   var organization = 'Heroes';
      // } else if(cData[i][1].toLowerCase().indexOf('raktam') > -1 ){
      //   var organization = 'Raktam';
      // } else{
      //   var organization = 'NA';
      // }
      for(var s = 1; s < cData[i].length; s++) {
        if(cData[i][s]) {
          cData[i][s] = cData[i][s].replace(/[^\x20-\x7E]/gmi, '');
        }
      }

      var dataToSend = {
        name : cData[i][1],
        state : cData[i][2],
        district : cData[i][3],
        city : cData[i][4],
        address : cData[i][5],
        pincode : cData[i][6],
        number : cData[i][7],
        mobile_number : cData[i][8],
        helpline : cData[i][9],
        fax : cData[i][10],
        email: cData[i][11],
        website:cData[i][12],
        nodal_officer : cData[i][13],
        contact_nodal : cData[i][14],
        mobile_nodal : cData[i][15],
        email_nodal : cData[i][16],
        qual_nodal : cData[i][17],
        category : cData[i][18],
        blood_component: cData[i][19],
        apheresis : cData[i][20],
        serv_time : cData[i][21],
        license:cData[i][22],
        date_license: cData[i][23],
        renewal_license: cData[i][24],
        latitude : cData[i][25],
        longitude: cData[i][26],
        organization : organization
    }
    $.ajax({
      type: 'POST',
      url: '/putdata',
      dataType: "json",
      async:false,
      data: dataToSend,
      success: function(data) {
        console.log('inserted');
      }    
    });
  }
 }
}

$(document).ready(function() {
  $.ajax({
      url: 'https://data.gov.in/node/3287321/datastore/export/json',
      dataType: 'json',
      success: async function(data) {
          cData = data;
          var hh = document.getElementById('josndata');
          hh.innerHTML = "<pre>"+cData[1]+"</pre>";
          var j = 100;
          for (i = 1; i < cData.length; ) {
            sendData(i, j);
            i = j;
            j +=100; 
            await sleep(4000);
          }
      }
  });
  // console.log(this.cData[1][1]);
  
    
  });
