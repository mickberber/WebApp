import Dispatcher from "../dispatcher/Dispatcher";

module.exports = {

  signOut: function (){
    Dispatcher.loadEndpoint("voterSignOut", {sign_out_all_devices: true});
  },

  retrieveVoter: function () {
    Dispatcher.loadEndpoint("voterRetrieve");
  },

  retrieveAddress: function (id){
    Dispatcher.loadEndpoint("voterAddressRetrieve", { voter_device_id: id});
  },

  saveAddress: function (text){
    Dispatcher.loadEndpoint("voterAddressSave", { text_for_map_search: text });
  }
};
