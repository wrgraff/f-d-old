var sendForm = function(id_form) {
    //if everything's ok, continue with Ajax form submit
    var post_url = $(id_form).attr("action"); //get form action url
    var request_method = $(id_form).attr("method"); //get form GET/POST method
    var form_data = new FormData(id_form); //Creates new FormData object

    $.ajax({ //ajax form submit
      url : post_url,
      type: request_method,
      data : form_data,
      dataType : "json",
      contentType: false,
      cache: false,
      processData:false
    }).done(function(res){ //fetch server "json" messages when done
      if(res.type == "error"){
          showAlert('Задача не отправлена 😢. Попробуйте еще раз или сообщите о проблеме', 'Закрыть');
      }

      if(res.type == "done"){
          showAlert('Задача отправлена 🤘. Всё будет сделано в лучшем виде', 'Закрыть');
      }
    });
};

$("#setTask form").on("submit", function(ev) {
  ev.preventDefault();
  var id_form = document.querySelector('#setTask form');
  sendForm(id_form);
});
