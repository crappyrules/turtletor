$(document).ready(function() {
    var d = $("#nodeTable").DataTable({
        columnDefs: [{
            targets: [0, 1],
            visible: !1,
            searchable: !1
        }],
        order: [
            [2, "asc"]
        ],
        searching: !1,
        info: !1,
        paging: !1,
        lengthMenu: -1
    });
    loadTable(d);
    setInterval(function() {
        updateTable(d)
    }, 31000)
});



function updateTable(d) {
    d.rows().remove()
    $.each(nodes, function(f, a) {
        $.ajax({
            url: a.api,
            dataType: "json",
            type: "GET",
            cache: "false",
            success: function(c) {
                if (c.synced) {
                   c.error ? d.row.add([a.hostname, a.port, a.name, a.region, 0, "No", 0, "0 H/s", 0, 0, 0, 0, "Unknown"]).draw(!1) : d.row.add([a.hostname, a.port, a.name, a.region, c.height, c.synced ? "Yes" : "No", c.difficulty, (c.globalHashRate / 1E6).toFixed(2) + " MH/s", c.tx_pool_size, c.tx_count, c.incoming_connections_count, c.outgoing_connections_count,
                    c.version
                    ]).draw(!1) 
                }
                
            }
        })
    })
};

function loadTable(d) {
    $.each(nodes, function(f, a) {
        $.ajax({
            url: a.api,
            dataType: "json",
            type: "GET",
            cache: "false",
            success: function(c) {
                if (c.synced) {
                   c.error ? d.row.add([a.hostname, a.port, a.name, a.region, 0, "No", 0, "0 H/s", 0, 0, 0, 0, "Unknown"]).draw(!1) : d.row.add([a.hostname, a.port, a.name, a.region, c.height, c.synced ? "Yes" : "No", c.difficulty, (c.globalHashRate / 1E6).toFixed(2) + " MH/s", c.tx_pool_size, c.tx_count, c.incoming_connections_count, c.outgoing_connections_count,
                    c.version
                    ]).draw(!1) 
                }
                
            }
        })
    })
};