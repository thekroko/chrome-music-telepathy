// Saves options to localStorage.
function doSave() {
  var store = new Object();

  // Saves all options
  /*var entries = $('#entries input');
  for (var i = 0; i < entries.length; i += 2) {
    key = entries[i].value;
    val = entries[i+1].value;

    if (key != '' && val != '') {
      store[key] = val;
    }
  }
  chrome.storage.sync.set({'urlrewrite' : store});*/

  // Update status to let user know options were saved.
  $("#status").html("Changes saved").show().delay(1000).fadeOut();
}

// Restores select box state to saved value from localStorage.
function onLoad() 
{
  // Restore all options
  /*chrome.storage.sync.get('urlrewrite', function(store) {
      store = store.urlrewrite;
      for (var key in store) {
        addRow(key, store[key]);
      }
    });*/

  // Register click handlers
  $("#save").click(doSave);
}

$(document).ready(onLoad);
