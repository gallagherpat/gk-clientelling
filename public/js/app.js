let oAppEnablementCommonInstance = new comGkSoftwareGkrAppEnablementApi.Common();
let oAppEnablementPosInstance = new comGkSoftwareGkrAppEnablementApi.Pos();
let oAppEnablementMasterdataInstance = new comGkSoftwareGkrAppEnablementApi.Masterdata();

oAppEnablementCommonInstance.registerListener(oAppEnablementCommonInstance.createRegisterListenerRequest("EVENT_CUSTOMER_REGISTERED", "getCustomerData", true));

var comAppenablementFunctions = comAppenablementFunctions || {};

comAppenablementFunctions.Connector = function(){
  "use strict"
  this._prefix = "comAppenablementFunctions.Connector/"
}

comAppenablementFunctions.Connector.prototype.ConnectionTest = (sConnection) => {
  console.log(sConnection)
  return sConnection
};
let itemDataTest;
//Get master data
comAppenablementFunctions.Connector.prototype.sendGetItemDataByID = (sItemID) => {
  console.log(sItemID);
  let createGetItemDataByIDRequest = JSON.stringify({
    "itemID": sItemID
  }); 
  oAppEnablementMasterdataInstance.getItemDataByID("itemData", "registerDataFailed", createGetItemDataByIDRequest);
  // console.log(itemDataTest);
  return itemDataTest
};

//Register line item
comAppenablementFunctions.Connector.prototype.sendRegisterItem = (sItemID) => {
  console.log(sItemID);
  let registerLineItemRequest = JSON.stringify({
      "itemID": sItemID
  });
  oAppEnablementPosInstance.registerLineItem("registerDataOk", "registerDataFailed", registerLineItemRequest); 
  return itemDataTest
}
  function registerDataOk() {
    console.log("Succesfully registered", "success");
  }
  function registerDataFailed() {
    console.error("Data registration failed");
  }

function itemData(oData) {
  // console.log(oData);
  itemDataTest = oData;
}


function dataFound(oData) {
  // console.log("hello world")
  // console.log("O data" + oData)
  console.log(oData)
  if(oData == undefined){
    return
  }else{
    localStorage.setItem("oData", JSON.stringify(oData));
    window.dispatchEvent(new Event('storage'));
  }
}
function noData(err){
    console.log("error")
    console.log(err);
}

function getCustomerData() {
  console.log("Getting item data.", "GET REQUEST");
  oAppEnablementPosInstance.getCurrentCustomerList("dataFound", "noData")
}

function oData() {
    return globalData
}



oAppEnablementCommonInstance.registerListener(oAppEnablementCommonInstance.createRegisterListenerRequest("FLOW_EVENT_CUSTOMER_FLOW_PAYMENTEND_TRANSACTION_FINISHED_ENTERED", "processEvent", true));


  function addEvent(text) {
    if(text == 'Transaction closed'){
      // console.log('reload')
      localStorage.removeItem('oData');
      location.reload(); 
    }
    if(text == 'Line Item Registered'){
      console.log("Item registered")
    }
    return text
}

  function processEvent(oEvent) {
    console.log(JSON.stringify(oEvent));
    switch (oEvent["messageHeader"]["messageKey"]) {
        case "EVENT_SALERETURNLINEITEM_UPDATED_REGISTERED":
            addEvent('Line Item Registered');
            break;
        case "EVENT_LINE_ITEM_CLOSED":
            addEvent('Line Item Closed');
            break;
        case "EVENT_SALERETURNLINEITEM_UPDATED_QUANTITY":
            addEvent('Quantity changed');
            break;
        case "EVENT_TRANSACTION_CLOSED":
            addEvent('Transaction closed');
            break;
        case "EVENT_SALERETURNLINEITEM_UPDATED_PRICE":
            addEvent('Item Price changed');
            break;
        case "EVENT_POS_INPUT_MSR_DATA":
            addEvent('MSR Scanned:\n' + oEvent["payload"]);
            break;
        case "FLOW_EVENT_INACTIVITY_TIMER":
            addEvent('Inactivity triggered - timeout');
            break;
        case "FLOW_EVENT_POS_LOCKED":
            addEvent('POS LOCKED');
            break;
        case "FLOW_EVENT_POS_UNLOCKED":
            addEvent('POS UNLOCKED');
            break;
        case "FLOW_EVENT_CUSTOMER_FLOW_PAYMENTEND_TRANSACTION_FINISHED_ENTERED":
          addEvent('Transaction closed');
          break;
        default:
            addEvent("Generic Event: " + oEvent["messageHeader"]["messageKey"]);
    }
}
 


// //WEBSOCKET TEST

// let socket = new WebSocket("ws://localhost:9099/services/stomp");

// socket.onopen = function(e) {
//   alert("[open] Connection established");
//   socket.send("Test")
// }

