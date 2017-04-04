"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map = (function () {
    function Map(size, area) {
        this.size = size;
        if (area)
            this.area = area;
        else
            for (var i = 0; i < this.size; i++) {
                this.area.push([]);
                for (var j = 0; j < this.size; j++) {
                    this.area[i].push(null);
                }
            }
    }
    return Map;
}());
exports.Map = Map;
//# sourceMappingURL=map.js.map