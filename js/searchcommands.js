function myFunction() {
                            var input, filter, table, tr, td, i, txtValue, data;
					      data = document.getElementById('commands-info')
                            input = document.getElementById("SearchQuery");
                            filter = input.value.toUpperCase();
                            table = document.getElementById("commands-info");
                            tr = table.getElementsByTagName("tr");
			    for (var o = 0; o < data.length; o++) {
				    var name = data[o].name;
			    }
                            for (i = 0; i < tr.length; i++) {
                                td = tr[i].getElementsByTagName("td")[0];
                                if (td) {
                                    txtValue = td.textContent || td.innerHTML;
                                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                        tr[i].style.display = "";
                                    } else {
                                        tr[i].style.display = "none";
                                    }
                                }
                            }
                        }
