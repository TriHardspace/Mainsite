        function clipcopy() {
                var site = document.getElementById("copyUrl").value;
                navigator.clipboard.writeText(site);
                var popupelement = document.getElementById("copybutton");
                var popover = new bootstrap.Popover(popupelement, content="URL Copied", placement="bottom", trigger="manual");
                popover.show();
                return site;
                }
