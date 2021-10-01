/*
maps.ts负责所有的地图操作
包括初始化、绘制、视角移动等
*/
import { core } from './core';
import { main } from '../main';

class Maps {
    constructor() {

    }

    /** 初始化maps */
    init(): void {

    }

    /** 初始化所有楼层 */
    initFloors(): void {
        core.floors = main.floors;
    }
}

let maps = new Maps();
export { maps, Maps }