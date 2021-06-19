<?php
echo $_POST['username'];
echo information();
                        function information() {
                        fetch('numbers.json')
                            .then(function (response) {
                            return response.json();
                        })
                            .then(function (data) {
                            appendData(data);
                        })
                            .catch(function (err) {
                            console.log(err);
                        });
                        function appendData(data) {
                            for (var i = 0; i < data.length; i++) {
                                var info = 'id: ' + data[i].id + 'Number: ' + data[i].number;
                                return info;
                            }
                        }
                        }
?>
