                    // function checkIfWarned() {
                    //     if (localStorage.warning) {
                    //         document.getElementById('notice').hidden = true;
                    //     }
                    //     else {
                    //         document.getElementById('notice').hidden = false;
                    //     }
                    // }
                        var btn = document.getElementById('closebtn');
                        btn.addEventListener('click', function() {
                            document.getElementById('notice').hidden = true;
                        });
