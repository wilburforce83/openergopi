// Wilbur's module of useful functions



function removeFalsy(arr) { // remove falsy entries in an array i.e. null, false, 0, "" etc
    return arr.filter(Boolean);
};

function findInArray(needle) { // find if needle is within the called array use like : findInArray.call(arr, needle); return true/false.
    var findNaN = needle !== needle;
    var indexOf;

    if (!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (needle) {
            var i = -1,
                index = -1;

            for (i = 0; i < this.length; i++) {
                var item = this[i];

                if ((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};


function buildDropdown(elementID, arr) {

    let dropdownsource = document.getElementById(elementID);
    var options = arr;
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        dropdownsource.appendChild(el);
    };

};

function getProductCodes() {



    var papaCSV = p + '/pricing.csv';
    Papa.parse(papaCSV, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
            console.log(results.data);

            let d = results.data;
            productData = results.data;

            let codelist = removeFalsy(d.map(data => data.product_code));
            console.log(codelist)
            settings.set('productcode.list', codelist);
            return codelist;

        }
    })
}