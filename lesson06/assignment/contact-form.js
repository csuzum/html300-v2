document.addEventListener("DOMContentLoaded", function(){

  // Find the the form, and handle its submit event
  const form = document.querySelector('#contactForm')

  form.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
    event.preventDefault()
  
  // create array from form inputs
  var serializeArray = function (form) {
    var arr = [];
    Array.prototype.slice.call(form.elements).forEach(function (field) {
      if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1) return;
      if (field.type === 'select-multiple') {
        Array.prototype.slice.call(field.options).forEach(function (option) {
          if (!option.selected) return;
          arr.push({
            name: field.name,
            value: option.value
          });
        });
        return;
      }
      // include data if checkbox and radio buttons are checked
      if (['checkbox', 'radio'].indexOf(field.type) >-1 && !field.checked) return;
      arr.push({
        name: field.name,
        value: field.value
      });
    });
    return(arr);
  };

  var form = document.querySelector('#contactForm');
  var data = serializeArray(form);
  console.log(data);
  // alert when form has been successfully submitted
  alert('Hang in there, help is on the way! You will be contacted by a Changes representative.')
  })
})
