import {AreaBlock} from "./area-block";
export class Map {
    area: AreaBlock[][];

    constructor(public size: number, area: AreaBlock[][]) {
        if(area)
            this.area = area;
        else
            for (let i = 0; i < this.size; i++) {
                this.area.push([]);
                for(let j =0; j < this.size; j++) {
                    this.area[i].push(null);
                }
            }
    }
}