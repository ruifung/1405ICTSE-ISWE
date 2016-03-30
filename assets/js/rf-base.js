if (!this.window.RFBase) {
    this.window.RFBase = {
        Attribute: function (k, v) {
            this.key = k;
            this.value = v;
        },
        
        deparam: function (querystring) {
            // remove any preceding url and split
            querystring = querystring.substring(querystring.indexOf('?') + 1).split('&');
            var params = {}, pair, d = decodeURIComponent;
            // march and parse
            for (var i = querystring.length - 1; i >= 0; i--) {
                pair = querystring[i].split('=');
                params[d(pair[0])] = d(pair[1]);
            }

            return params;
        }
    };
}