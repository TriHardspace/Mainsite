        function clipcopy() {
                var site = document.getElementById("copyUrl").value
                alert(site)
                navigator.clipboard.writeText(site)
                return site
                }
